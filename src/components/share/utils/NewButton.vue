<template>
  <q-btn
    color="primary"
    align="left"
    size="sm"
    flat
    text
    v-bind="$attrs"
    v-on="$listeners"
  >
    <q-icon name="add_circle_outline"/>

    &nbsp; <slot/>
  </q-btn>
</template>

<script>
export default {
};
</script>
