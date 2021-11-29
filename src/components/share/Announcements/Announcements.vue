<template>
  <div class="full-width">
    <q-toolbar>
      <div class="text-body2">
        Announcements
      </div>

      <q-space/>

      <new-button class="q-my-sm">
        Create announcement
      </new-button>
    </q-toolbar>

    <div class="q-pa-sm q-pt-lg q-gutter-md scrollableArea">
      <div class="row q-gutter-y-lg">
        <Announcement-entry
          v-for="(entry, i) in news"
          :key="i"
          :entry="entry"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AnnouncementEntry from 'components/share/Announcements/AnnouncementEntry';
import { Ajax } from 'src/utils/Ajax';
import NewButton from '../utils/NewButton';

export default {
  components: {
    AnnouncementEntry,
    NewButton
  },

  data() {
    return {
      news: []
    };
  },

  mounted() {
    const self = this;
    Ajax.getAnnouncements().then(function(response) {
      self.news = response;
    });
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },

    markAllAsRead() {
    }
  }
};
</script>
