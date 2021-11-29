<template>
  <div class="q-py-sm scrollableArea">
    <q-list
      bordered
      separator
      class="bg-grey-2 text-caption"
    >
      <q-item
        v-for="(thread, i) in threads"
        :key="i"
        @click="$emit('selected', thread)"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <user-avatar
            :user="thread.firstMessage.user"
            :size="42"
            state-muted
          />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-primary text-weight-medium': !thread.read }"
          >
            {{ thread.firstMessage.user.first_name }}
            in
            {{ thread.location }}
          </q-item-label>

          <q-item-label
            caption
            lines="1"
          >
            {{ thread.firstMessage.message }}
          </q-item-label>
          <q-item-label
            caption
            lines="1"
          >
            <i>{{ thread.lastMessage.user.name }}</i>: {{ thread.lastMessage.message }}
          </q-item-label>
        </q-item-section>

        <q-item-section
          side
          top
          class="text-grey-6"
        >
          9:14
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { Ajax } from 'src/utils/Ajax';
import UserAvatar from 'components/share/utils/UserAvatar';

export default {
  components: {
    UserAvatar
  },

  data() {
    return {
      threads: []
    };
  },

  mounted() {
    const self = this;
    Ajax.getActiveThreads().then(function(response) {
      self.threads = response;
    });
  },

  methods: {
    markAllAsRead() {
    }
  }
};
</script>

<style lang="scss" scoped>
.q-item__section--avatar {
  min-width: auto !important;
}
</style>
