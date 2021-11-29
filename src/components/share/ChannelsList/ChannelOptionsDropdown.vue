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
        :key="channel.name"
      >
        <q-item
          clickable
          v-close-popup
        >
          <q-item-section>Open channel</q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
        >
          <q-item-section>Mute channel</q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
        >
          <q-item-section>
            <template v-if="channel.unread">
              Mark as read
            </template>
            <template v-else>
              Mark as unread
            </template>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-item
          clickable
          v-close-popup
        >
          <q-item-section>Leave channel</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  props: {
    channel: {
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
