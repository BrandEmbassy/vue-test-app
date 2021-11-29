export const AUTH_NAMESPACE = 'auth';

export const authUser = 'auth/user';

import { USER } from 'src/utils/MockData';

export default {
  namespaced: true,

  state: {
    user: USER
  },

  mutations: {},

  getters: {
    user(state) {
      return state.user;
    }
  }
};
