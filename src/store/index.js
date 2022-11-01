import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    modalIsActive: false,
    loginError: null,
  },
  getters: {
    getModalIsActive: (state) => state.modalIsActive,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    SET_MODAL(state, modal) {
      state.modalIsActive = modal;
    },

    CLEAR_USER(state) {
      state.user = null;
    },
    SET_ERROR(state, error) {
      state.loginError = error;
    },
  },
  actions: {
    async logout({ commit }) {
      commit("CLEAR_USER");
    },

    setModal({ commit }, modal) {
      commit("SET_MODAL", modal);
    },

    setLoginError({ commit }, error) {
      commit("SET_ERROR", error);
    },
  },
});
