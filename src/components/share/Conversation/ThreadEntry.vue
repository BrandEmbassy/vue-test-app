<template>
  <div class="threadEntry q-my-sm">
    <div class="bg-grey-2">
      <div class="row">
        <div class="col">
          <user-chip :user="thread.user"/>

          <small class="text-grey-6">29.9. 10:59</small>
        </div>

        <div class="col text-right q-py-xs">
          <emoji-select/>
        </div>
      </div>

      <div class="row">
        <div class="col q-px-sm q-pb-sm">
          <div class="text-black theadMessageText">
            {{ thread.msg }}
          </div>
        </div>
      </div>

      <div class="row bg-grey-3">
        <div class="col">
          <q-btn
            class="full-width"
            align="left"
            flat
            size="sm"
            color="indigo-5"
            no-caps
          >
            <template v-if="thread.replies > 0">
              <q-icon
                name="reply"
              />
              &nbsp; {{ thread.replies }} replies from Michal & Ondra
            </template>
            <template v-else>
              <q-icon
                name="reply"
              /> Open thread
            </template>
          </q-btn>
        </div>
      </div>
    </div>
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
    thread: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.threadEntry {
  width: 100%;
  border: solid 1px $grey-3;
  border-radius: 2px;
}

.q-chip {
  font-size: 0.9em;
}

.q-focusable:focus .q-focus-helper,
.q-hoverable:hover .q-focus-helper {
  background: inherit;
  opacity: 0;
}
.q-hoverable:active .q-focus-helper {
  background: inherit;
  opacity: 0;
}
.q-focus-helper {
  opacity: 0;
  transition: unset;
}

.theadMessageText {
  font-size: 1.1em;
}
</style>
