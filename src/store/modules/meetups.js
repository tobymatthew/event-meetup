import axios from "axios";

export default {
  namespaced: true,

  state: {
    items: [],
    item: {},
  },
  getters: {},
  actions: {
    fetchMeetups({ state, commit }) {
      commit("setItems", { resource: "meetups", items: [] }, { root: true });
      return axios.get("/api/v1/meetups").then((res) => {
        const meetups = res.data;
        commit(
          "setItems",
          { resource: "meetups", items: meetups },
          { root: true }
        );
        return state.items;
      });
    },
    fetchMeetupById({ state, commit }, meetupId) {
      commit("setitem", { resource: "meetups", item: {} }, { root: true });
      return axios.get(`/api/v1/meetups/${meetupId}`).then((res) => {
        const meetup = res.data;
        commit(
          "setitem",
          { resource: "meetups", item: meetup },
          { root: true }
        );
        return state.item;
      });
    },
  },
  mutations: {},
};
