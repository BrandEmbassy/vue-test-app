<template>
  <q-avatar
    rounded
    size="32px"
    class="chatAvatar"
    :class="{dimmed: channel.unread}"
  >
    <div class="absolute-top-left text-grey-9">#</div>
    <img
      :src="`https://eu.ui-avatars.com/api/?name=${channel.title}`"
      alt=""
    >
  </q-avatar>
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
.dimmed:after {
  background: rgba(0, 0, 0, 0.2) !important;
}
</style>
