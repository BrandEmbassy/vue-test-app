<template>
  <q-layout view="lHr lpR lFr">
    <div class="xs-hide sm-hide">
      <desktop-layout/>
    </div>

    <div class="md-hide lg-hide xl-hide">
      Mobile layout
    </div>
  </q-layout>
</template>

<script>
import DesktopLayout from '../components/desktop/Layout';

export default {
  components: {
    DesktopLayout
  }
};
</script>
