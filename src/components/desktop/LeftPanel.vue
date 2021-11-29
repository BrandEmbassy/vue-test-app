<template>
  <q-drawer
    :width="256"
    side="left"
    content-class="bg-indigo-1"
    :breakpoint="960"
    show-if-above
    bordered
  >
    <company-toolbar/>

    <channels-list/>
  </q-drawer>
</template>

<script>
import CompanyToolbar from '../share/ChannelsList/CompanyToolbar';
import ChannelsList from '../share/ChannelsList/ChannelsList';
import { LEFT_DRAWER_WIDTH } from 'src/utils/constants';

export default {
  components: {
    CompanyToolbar,
    ChannelsList
  },

  computed: {
    LEFT_DRAWER_WIDTH() {
      return LEFT_DRAWER_WIDTH;
    }
  }
};
</script>
