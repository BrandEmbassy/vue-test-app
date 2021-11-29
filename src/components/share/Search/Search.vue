<template>
  <div class="full-width">
    <q-toolbar>
      <div class="text-body2">
        Search
      </div>
    </q-toolbar>

    <div class="q-pa-sm scrollableArea">
      <q-input
        class="full-width"
        v-model="query"
        placeholder="Search conversations, announcements, wiki..."
        ref="input"
        clearable
        outlined
        dense
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    };
  },

  created() {
    this.$root.$on('rightPanelSectionChanged', this.focusInput);
  },

  beforeDestroy() {
    this.$root.$off('rightPanelSectionChanged',this.focusInput);
  },

  methods: {
    focusInput() {
      this.$refs.input.focus();
    }
  }
};
</script>
