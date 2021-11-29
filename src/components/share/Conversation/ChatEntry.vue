<template>
  <div>
    <q-chat-message
      :name="`${chat.user.name} 9:18`"
      :text="chat.messages"
      :sent="itsMe"
      :avatar="chat.user.avatar"
      :bg-color="color"
      size="8"
    >
      <template #avatar>
        <div>
          <img
            class="q-message-avatar q-message-avatar--sent"
            :src="chat.user.avatar"
          >
          <q-tooltip>{{ isOnlineTitle(chat.user.online) }}</q-tooltip>
        </div>
      </template>
    </q-chat-message>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { authUser } from 'src/store/auth';
import IsOnlineMixin from 'components/mixins/IsOnlineMixin';

export default {
  mixins: [IsOnlineMixin],

  props: {
    chat: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      authUser
    }),

    itsMe() {
      return this.chat.user.id === this.authUser.id;
    },

    color() {
      return this.itsMe ? 'grey-2' : 'indigo-2';
    }
  }
};
</script>

<style lang="scss">
.q-message-avatar {
  width: 32px;
  height: 32px;
  min-width: 32px;
}

.q-message-name {
  color: $grey-9;
  font-size: 0.9em;
}

.q-message-text {
  font-size: 1.1em;
}
</style>
