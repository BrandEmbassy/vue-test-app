<template>
  <div>
    <left-panel/>

    <div class="right-content">
      <q-splitter
        v-model="splitterModel"
        :limits="[50, 70]"
      >
        <template #before>
          <conversation-panel/>
        </template>

        <template #after>
          <right-panel/>
        </template>

        <template #separator>
          <q-icon
            name="more_vert"
            color="grey-2"
            size="xs"/>
        </template>
      </q-splitter>
    </div>

    <right-menu-icons/>
  </div>
</template>

<script>
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import ConversationPanel from './ConversationPanel';
import RightMenuIcons from './RightMenuIcons';

export default {
  components: {
    RightMenuIcons,
    LeftPanel,
    RightPanel,
    ConversationPanel
  },

  data() {
    return {
      splitterModel: 66
    };
  }
};
</script>

<style lang="scss">
.right-content {
  margin-left: 256px;
  margin-right: 48px;
}

.q-toolbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.q-drawer-left.q-drawer-bordered {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}

.q-drawer--right.q-drawer--bordered {
  border-left: 1px solid rgba(0, 0, 0, 0.2);
}

.q-splitter__separator-area {
  background: $indigo-2;
  width: 8px;
}
</style>
