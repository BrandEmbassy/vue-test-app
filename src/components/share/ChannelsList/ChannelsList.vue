<template>
  <div class="q-py-sm">
    <new-button class="full-width">
      New Channel
    </new-button>

    <q-list>
      <template v-for="channel in channels">
        <q-item
          :key="channel.title"
          :class="{'text-weight-bolder': channel.unread}"
          @click="commitActivateChannel(channel)"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <channel-avatar :channel="channel"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>
              # {{ channel.title }}
            </q-item-label>
            <q-item-label
              caption
              class="ellipsis"
              :class="{'text-weight-bolder': channel.unread}"
            >
              <template v-if="channel.subtitle">
                {{ channel.subtitle }}
              </template>
              <template v-else>
                &nbsp;
              </template>
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <channel-options-dropdown :channel="channel"/>
          </q-item-section>
        </q-item>
      </template>
    </q-list>

    <hr>

    <new-button class="full-width">
      New Chat
    </new-button>

    <q-list dense>
      <template v-for="chat in chats">
        <q-item
          :key="chat.title"
          :class="{'text-weight-bolder text-underlined': chat.unread}"
          class="q-my-xs"
          @click="commitActivateChat(chat)"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <user-avatar :user="chat"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ chat.title }}
            </q-item-label>
            <q-item-label
              caption
              class="ellipsis"
              :class="{'text-weight-bolder': chat.unread}"
            >
              {{ chat.subtitle }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <chat-options-dropdown :chat="chat"/>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </div>
</template>

<script>
import ChannelOptionsDropdown from 'components/share/ChannelsList/ChannelOptionsDropdown';
import ChatOptionsDropdown from 'components/share/ChannelsList/ChatOptionsDropdown';
import NewButton from '../utils/NewButton';
import { Ajax } from 'src/utils/Ajax';
import { mapMutations } from 'vuex';
import { ACTIVATE_CHANNEL, ACTIVATE_CHAT, CHANNELS_LIST_NAMESPACE } from 'src/store/channels';
import ChannelAvatar from 'components/share/utils/ChannelAvatar';
import UserAvatar from 'components/share/utils/UserAvatar';

export default {
  components: {
    UserAvatar,
    ChannelAvatar,
    ChatOptionsDropdown,
    ChannelOptionsDropdown,
    NewButton
  },

  data() {
    return {
      channels: [],
      chats: []
    };
  },

  mounted() {
    const self = this;

    Ajax.getChannelsList().then(function(channelsResponse) {
      self.channels = channelsResponse;

      Ajax.getChatsList().then(function(chatsResponse) {
        self.chats = chatsResponse;

        self.commitActivateChannel(self.channels[0]);
      });
    });
  },

  methods: {
    ...mapMutations(CHANNELS_LIST_NAMESPACE, {
      commitActivateChannel: ACTIVATE_CHANNEL,
      commitActivateChat: ACTIVATE_CHAT
    })
  }
};
</script>

<style scoped>
.q-item__section--avatar {
  min-width: auto;
  padding-right: 6px;
  justify-content: start;
}
</style>
