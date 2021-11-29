<template>
  <div class="bg-grey-4 chat-panel-layout">
    <q-toolbar class="bg-grey-2 text-body2">
      # {{ activeEntry.title }}
    </q-toolbar>

    <div class="top">
      <div class="conversationMaxWidth">
        <channel-conversations-view v-if="isTypeChannel"/>
        <chat-conversations-view v-else-if="isTypeChat"/>
      </div>
    </div>
    <div class="bottom">
      <div class="conversationMaxWidth">
        <div class="q-pa-sm">
          <message-input/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelConversationsView from 'components/share/Conversation/ChannelConversationsView';
import ChatConversationsView from 'components/share/Conversation/ChatConversationsView';
import MessageInput from '../share/utils/MessageInput';
import { mapGetters } from 'vuex';
import { ACTIVE_ENTRY, IS_TYPE_CHANNEL, IS_TYPE_CHAT } from 'src/store/channels';

export default {
  components: {
    ChannelConversationsView,
    ChatConversationsView,
    MessageInput
  },

  computed: {
    ...mapGetters({
      isTypeChannel: IS_TYPE_CHANNEL,
      isTypeChat: IS_TYPE_CHAT,
      activeEntry: ACTIVE_ENTRY
    })
  }
};
</script>

<style scoped>
.chat-panel-layout {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top {
  height: 100%;
  overflow: auto;
}

.bottom {
}

.conversationMaxWidth {
  max-width: 780px;
  margin: 0 auto;
}
</style>
