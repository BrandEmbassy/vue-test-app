<template>
  <q-list>
    <q-item
      @click="dropdownOpen = !dropdownOpen"
      clickable
      v-ripple
      class="companyToolbar"
    >
      <q-item-section avatar>
        <q-avatar
          rounded
          size="md"
        >
          <q-img :src="authUser.avatar"/>
        </q-avatar>
      </q-item-section>
      <q-item-section class="text-body2">
        Nice Business Chat
      </q-item-section>
      <q-item-section side>
        <q-icon name="arrow_drop_down"/>
      </q-item-section>
    </q-item>

    <div
      v-if="dropdownOpen"
      class="listDropdown bg-indigo-2"
    >
      <q-item
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-icon
            name="settings"
            size="xs"
          />
        </q-item-section>
        <q-item-section>Manage</q-item-section>
      </q-item>
      <q-separator/>
      <q-item
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-icon
            name="logout"
            size="xs"
          />
        </q-item-section>
        <q-item-section>Logout</q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
import { mapGetters } from 'vuex';
import { authUser } from 'src/store/auth';

export default {
  data() {
    return {
      dropdownOpen: false
    };
  },

  computed: {
    ...mapGetters({
      authUser
    })
  }
};
</script>

<style scoped>
.listDropdown {
  position: absolute;
  width: 100%;
  z-index: 999;
  border-bottom: solid 1px #E0E0E0;
}

.companyToolbar {
  border-bottom: 1px solid white;
}

.q-item__section--avatar {
  min-width: auto;
  padding-right: 6px;
}
</style>
