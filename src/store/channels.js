export const CHANNELS_LIST_NAMESPACE = 'channels';

export const ACTIVATE_CHANNEL = 'activateChannel';
export const ACTIVATE_CHAT = 'activateChat';

export const TYPE_CHANNEL = 'channel';
export const TYPE_CHAT = 'chat';

export const IS_TYPE_CHANNEL = 'channels/isTypeChannel';
export const IS_TYPE_CHAT = 'channels/isTypeChat';
export const ACTIVE_ENTRY = 'channels/activeEntry';

export default {
  namespaced: true,

  state: {
    activeEntry: {},
    activeType: TYPE_CHANNEL
  },

  mutations: {
    activateChannel(state, section) {
      state.activeEntry = section;
      state.activeType = TYPE_CHANNEL;
    },

    activateChat(state, section) {
      state.activeEntry = section;
      state.activeType = TYPE_CHAT;
    }
  },

  getters: {
    isTypeChannel(state) {
      return state.activeType === TYPE_CHANNEL;
    },

    isTypeChat(state) {
      return state.activeType === TYPE_CHAT;
    },

    activeEntry(state) {
      return state.activeEntry;
    }
  }
};
