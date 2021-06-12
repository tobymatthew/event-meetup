import axios from "axios";

export default {
  namespaced: true,

  state: {
    user: [],
  },

  getters: {},

  actions: {
    loginWithEmailAndPassword({ commit }, userdata) {
      axios
        .post("api/v1/users/login", userdata)
        .then((res) => {
          const user = res.data;
          commit("setAuthUser", user);
          return user;
        })
        .catch((err) => console.log(err));
    },

    registerUser(userdata) {
      axios.post("api/v1/users/register", userdata);
      console.log(userdata);
    },
  },

  mutations: {
    setAuthUser(state, user) {
      state.user = user;
    },
  },
};
