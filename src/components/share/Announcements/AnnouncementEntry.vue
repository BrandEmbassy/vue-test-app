<template>
  <div class="col-12">
    <q-card class="relative-position bg-grey-4">
      <q-badge
        v-if="!announcement.read"
        color="indigo-12"
        class="announceNewBadge"
        @click="announcement.read = true"
      >
        NEW
      </q-badge>

      <div class="my-card">
        <q-img
          v-if="announcement.img"
          :src="announcement.img"
        />
        <div
          v-else-if="announcement.read === false"
          class="q-pt-sm"
        />

        <q-card-section>
          <div class="text-subtitle2 row">
            <div class="col">
              <small class="text-grey-6">29.9.</small>
            </div>
            <div class="col text-right">
              <user-chip/>
            </div>
          </div>
        </q-card-section>

        <q-card-section v-if="announcement.title">
          <div class="text-h6">
            {{ announcement.title }}
          </div>
        </q-card-section>

        <q-card-section
          v-if="announcement.body"
          class="q-pt-none announcementBody"
        >
          {{ announcement.body }}
        </q-card-section>
      </div>

      <div class="text-subtitle2 row">
        <div class="col">
          <q-btn
            class="full-width announceReplyBtn"
            align="left"
            size="sm"
            color="indigo-5"
            flat
            no-caps
          >
            <template>
              <q-icon
                name="reply"
              /> Open thread
            </template>
          </q-btn>
        </div>
        <div class="col text-right">
          <emoji-select/>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import UserChip from '../utils/UserChip';
import EmojiSelect from '../utils/EmojiSelect';

export default {
  components: {
    UserChip,
    EmojiSelect
  },

  props: {
    entry: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      announcement: this.entry
    };
  },

  watch: {
    entry(newValue) {
      this.announcement = newValue;
    }
  }
};
</script>

<style lang="scss">
.q-card {
  max-width: 512px !important;
  margin-left: auto;
  margin-right: auto;

  & .q-img {
    border-radius: 4px;
  }
}

.announcementBody {
  font-size: 1.1em;
}

.announceNewBadge {
  font-size: 1em;
  padding: 8px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.announceReplyBtn .q-btn__wrapper {
  padding-left: 8px;
}
</style>
