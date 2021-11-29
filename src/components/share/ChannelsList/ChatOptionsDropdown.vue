<template>
  <q-btn
    color="grey"
    icon="more_horiz"
    class="iconOnHover"
    size="sm"
    @click.stop=""
    flat
    round
  >
    <q-menu>
      <q-list
        dense
        :key="chat.title"
      >
        <q-item
          clickable
          v-close-popup
        >
          <q-item-section>Open chat</q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
        >
          <q-item-section>Mute chat</q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
        >
          <q-item-section>
            <template v-if="chat.unread">
              Mark as read
            </template>
            <template v-else>
              Mark as unread
            </template>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  props: {
    chat: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.q-item .iconOnHover {
  display: none;
}

.q-item:hover .iconOnHover {
  display: initial;
}
</style>
