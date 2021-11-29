import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import rightPanel from './rightPanel';
import channels from './channels';

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  return new Vuex.Store({
    modules: {
      auth,
      rightPanel,
      channels
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });
}
