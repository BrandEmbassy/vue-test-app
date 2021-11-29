<template>
  <q-chip
    color="grey-4"
    size="sm"
    clickable
    class="ellipsis"
  >
    <q-avatar>
      <q-img :src="user.avatar"/>
    </q-avatar>

    {{ user.name }}
  </q-chip>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({
        name: 'Anonymous User',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
      })
    }
  }
};
</script>
