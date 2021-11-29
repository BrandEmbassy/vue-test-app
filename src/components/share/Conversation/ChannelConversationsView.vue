<template>
  <div class="conversationsView">
    <div
      class="conversations q-px-sm"
      ref="conversations"
    >
      <thread-entry
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
      />

      <span ref="conversationsScrollAnchor"/>
    </div>
  </div>
</template>

<script>
import ThreadEntry from 'components/share/Conversation/ThreadEntry';
import { Ajax } from 'src/utils/Ajax';

export default {
  components: {
    ThreadEntry
  },

  data() {
    return {
      threads: []
    };
  },

  mounted() {
    const self = this;
    Ajax.getChannelConversations().then(function(response) {
      self.threads = response;

      self.$nextTick(() => {
        self.$refs.conversationsScrollAnchor.scrollIntoView();
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.conversationsView {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.conversations {
  height: 100%;
  overflow: auto;
}
</style>
