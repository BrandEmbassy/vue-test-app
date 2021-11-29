<template>
  <div>
    <q-toolbar>
      <div class="text-body2">
        Recent Activity
      </div>

      <q-space/>

      <q-btn
        @click="markAllAsRead"
        class="text-primary text-caption"
        size="sm"
        flat
        dense
      >
        Mark all as read
      </q-btn>
    </q-toolbar>

    <div class="q-py-sm scrollableArea">
      <q-list
        bordered
        separator
        class="bg-grey-2 text-caption"
      >
        <q-item
          v-for="(activity, i) in activities"
          :key="i"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <user-avatar
              :user="activity.user"
              :size="42"
              state-muted
            />
          </q-item-section>

          <q-item-section>
            <q-item-label
              :class="{ 'text-primary text-weight-medium': !activity.read }"
            >
              <activity-type-icon :activity="activity"/>

              {{ activity.user.first_name }}
              {{ activity.action }}
            </q-item-label>

            <q-item-label
              caption
              lines="2"
            >
              {{ activity.location }} <br>
              {{ activity.message }}
            </q-item-label>
          </q-item-section>

          <q-item-section
            side
            top
            class="text-grey-6"
          >
            9:14
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import ActivityTypeIcon from './TypeIcon';
import UserAvatar from 'components/share/utils/UserAvatar';
import { Ajax } from 'src/utils/Ajax';

export default {
  components: {
    UserAvatar,
    ActivityTypeIcon
  },

  data() {
    return {
      activities: []
    };
  },

  mounted() {
    const self = this;
    Ajax.getRecentActivities().then(function(response) {
      self.activities = response;
    });
  },

  methods: {
    markAllAsRead() {}
  }
};
</script>

<style lang="scss" scoped>
.q-item__section--avatar {
  min-width: auto !important;
}
</style>
