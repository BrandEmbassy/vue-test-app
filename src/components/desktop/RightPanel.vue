<template>
  <div
    class="rightPanel"
    :class="{open: !!activeSection.name}"
  >
    <div class="rightPanelContent">
      <component
        :is="`panel-${activeSection.name}`"
        ref="panel"
      />
    </div>
  </div>
</template>

<script>
import { RIGHT_DRAWER_WIDTH } from 'src/utils/constants';
import PanelActivity from 'src/components/share/Activity/Activity';
import RightMenuIcons from 'components/desktop/RightMenuIcons';
import PanelSearch from 'src/components/share/Search/Search';
import PanelAnnouncements from 'src/components/share/Announcements/Announcements';
import PanelUsers from 'src/components/share/Users/Users';

export default {
  components: {
    RightMenuIcons,
    PanelActivity,
    PanelSearch,
    PanelAnnouncements,
    PanelUsers
  },

  data() {
    return {
      drawerWidth: RIGHT_DRAWER_WIDTH
    };
  },

  computed: {
    activeSection() {
      return this.$store.state.rightPanel.activeSection;
    }
  }
};
</script>

<style lang="scss">
.rightPanel {
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  background: $grey-1;
}

.rightPanelContent .scrollableArea {
  max-height: calc(100vh - 50px);
  overflow: auto;
}
</style>
