<template>
  <span>
    <q-icon
      :name="icon"
      :color="activity.read ? 'grey-8' : 'indigo-4'"
      size="xxs"
    />
  </span>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true
    }
  },

  computed: {
    icon() {
      if(this.activity.type === 'emoji') {
        return this.activity.type_value;
      }

      if(this.activity.type === 'mention') {
        return 'alternate_email';
      }

      if(this.activity.type === 'reply') {
        return 'reply';
      }

      return 'chat_bubble';
    }
  }
};
</script>

<style scoped>
.q-icon {
  font-size: 1.3em !important;
}
</style>
