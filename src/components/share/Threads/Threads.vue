<template>
  <div class="bg-grey-2 chat-panel-layout">
    <q-toolbar class="bg-grey-2 text-body2">
      <template v-if="selectedThread !== null">
        {{ selectedThread.firstMessage.user.first_name }}'s thread in {{ selectedThread.location }}

        <q-space/>

        <a
          @click="selectedThread = null"
          class="text-primary cursor-pointer"
        >
          Show the list
        </a>
      </template>
      <template v-else>
        <div class="text-body2">
          Last Threads
        </div>
      </template>
    </q-toolbar>

    <div class="top">
      <div
        v-if="selectedThread !== null"
        class="bg-grey-4">
        <chat-conversations-view class="bg-white"/>
      </div>
      <threads-list
        v-else
        @selected="selectedThread = $event"
      />
    </div>
    <div
      v-if="selectedThread !== null"
      class="bottom q-py-sm bg-grey-4">
      <message-input/>
    </div>
  </div>
</template>

<script>
import ChatConversationsView from 'components/share/Conversation/ChatConversationsView';
import MessageInput from 'components/share/utils/MessageInput';
import ThreadsList from 'components/share/Threads/ThreadsList';

export default {
  components: {
    ThreadsList,
    ChatConversationsView,
    MessageInput
  },

  data() {
    return {
      selectedThread: null
    };
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
</style>
