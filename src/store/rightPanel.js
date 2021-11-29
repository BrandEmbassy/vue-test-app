export const RIGHT_PANEL_NAMESPACE = 'rightPanel';
export const ACTIVATE_SECTION = 'activateSection';

export default {
  namespaced: true,

  state: {
    activeSection: {
      name: 'activity'
    }
  },

  mutations: {
    activateSection(state, section) {
      state.activeSection = section;
    }
  }
};
