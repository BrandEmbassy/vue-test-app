<template>
  <div class="chatView">
    <div
      class="chat q-px-sm"
      ref="chat"
    >
      <chat-entry
        v-for="chat in chats"
        :key="chat.id"
        :chat="chat"
      />

      <span ref="chatScrollAnchor"/>
    </div>
  </div>
</template>

<script>
import ChatEntry from 'components/share/Conversation/ChatEntry';
import { Ajax } from 'src/utils/Ajax';

export default {
  components: {
    ChatEntry
  },

  data() {
    return {
      chats: []
    };
  },

  mounted() {
    const self = this;
    Ajax.getChatMessages().then(function(response) {
      self.chats = response;

      self.$nextTick(() => {
        self.$refs.chatScrollAnchor.scrollIntoView();
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.chatView {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chat {
  height: 100%;
  overflow: auto;
}
</style>
