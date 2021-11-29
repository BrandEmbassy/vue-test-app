<template>
  <div class="rightMenuFixed">
    <template v-for="section in sections">
      <q-btn
        @click="activateSection(section)"
        :key="section.name"
        :color="activeColor(section.name)"
        :icon="section.icon"
        class="rightMenuBtn"
        flat
        round
      >
        <q-tooltip
          anchor="center left"
          self="center right"
          :offset="[2, 2]"
          transition-show="scale"
          transition-hide="scale"
        >
          {{ section.title }}
        </q-tooltip>

        <q-badge
          v-if="section.badge > 0"
          color="indigo-12"
          size="xs"
          floating
        >
          {{ section.badge }}
        </q-badge>
      </q-btn>
    </template>
  </div>
</template>

<script>
import { ACTIVATE_SECTION, RIGHT_PANEL_NAMESPACE } from 'src/store/rightPanel';
import { mapMutations } from 'vuex';

const STORAGE_ACTIVE_SECTION = 'rightPanel_activeSection';

export default {
  mounted() {
    const savedActive = localStorage.getItem(STORAGE_ACTIVE_SECTION);

    if (savedActive) {
      this.activeSection = JSON.parse(savedActive);
    }
  },

  methods: {
    ...mapMutations(RIGHT_PANEL_NAMESPACE, {
      commitActivateSection: ACTIVATE_SECTION
    }),

    activeColor(sectionName) {
      return this.activeSection.name === sectionName ? 'indigo-12' : 'grey-10';
    },

    activateSection(section) {
      this.activeSection = section;

      localStorage.setItem(STORAGE_ACTIVE_SECTION, JSON.stringify(this.activeSection));

      this.$nextTick(() => {
        this.$root.$emit('rightPanelSectionChanged');
      });
    }
  },

  computed: {
    activeSection: {
      get() {
        return this.$store.state.rightPanel.activeSection;
      },
      set(value) {
        this.commitActivateSection(value);
      }
    }
  },

  data() {
    return {
      sections: [
        {
          name: 'search',
          title: 'Search',
          icon: 'search'
        },
        {
          name: 'activity',
          title: 'Recent activity',
          icon: 'notifications',
          badge: 2
        },
        // {
        //   name: 'threads',
        //   title: 'Active threads',
        //   icon: 'forum',
        //   badge: 3
        // },
        {
          name: 'announcements',
          title: 'Announcements',
          icon: 'receipt',
          badge: 1
        },
        // {
        //   name: 'wiki',
        //   title: 'Wiki pages',
        //   icon: 'description',
        // },
        // {
        //   name: 'saved',
        //   title: 'Saved items',
        //   icon: 'star',
        // },
        {
          name: 'users',
          title: 'Users & Teams',
          icon: 'people'
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.rightMenuFixed {
  position: fixed;
  right: 0;
  top: 0;
  width: 48px;
  min-width: 48px;
  max-width: 48px;
  height: 100vh;
  text-align: center;
  background: $indigo-2;
  padding-top: 50px;

  & button {
    margin-top: 16px;
  }

  .q-badge--floating {
    top: -1px;
    right: 0;
  }
}
</style>
