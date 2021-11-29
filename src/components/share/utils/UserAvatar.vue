<template>
  <q-avatar
    rounded
    :size="`${size}px`"
    class="userAvatar"
  >
    <img
      :src="user.avatar"
      alt=""
    >

    <div
      class="onlineIcon absolute-bottom-left"
      :class="[
        user.online ? 'bg-green' : 'bg-red',
        {
          disabled: stateMuted
        }
      ]"
    />

    <q-tooltip>{{ isOnlineTitle(user.online) }}</q-tooltip>
  </q-avatar>
</template>

<script>
import IsOnlineMixin from 'components/mixins/IsOnlineMixin';

export default {
  props: {
    user: {
      type: Object,
      required: true
    },

    size: {
      type: Number,
      default: 32
    },

    stateMuted: {
      type: Boolean,
      default: false
    }
  },

  mixins: [IsOnlineMixin]
};
</script>

<style scoped>
.onlineIcon {
  width: 8px;
  height: 8px;
  border-radius: 16px;
  left: -2px;
  bottom: -2px;
}
</style>
