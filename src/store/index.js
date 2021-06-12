import vue from "vue";
import vuex from "vuex";

import meetups from "./modules/meetups";
import threads from "./modules/threads";
import categories from "./modules/categories";
import auth from "./modules/auth";

vue.use(vuex);

export default new vuex.Store({
  modules: {
    meetups,
    categories,
    threads,
    auth,
  },

  mutations: {
    setItems(state, { resource, items }) {
      state[resource].items = items;
    },

    setitem(state, { resource, item }) {
      state[resource].item = item;
      console.log(state[resource].item);
    },
  },
});

// state: {
//   meetups: [],
//   categories: [],
//   threads: [],
//   meetup: {},
// },
// getters: {
//   meetups(state) {
//     return state.meetups;
//   },
//   categories(state) {
//     return state.categories;
//   },
// },

// actions: {
//   fetchMeetups({ state, commit }) {
//     commit("setitems", { resource: "meetup", items: {} });
//     axios.get("/api/v1/meetups").then((res) => {
//       const meetups = res.data;
//       commit("setitems", { resource: "meetups", items: meetups });
//       return state.meetups;
//     });
//   },

//   fetchCategories({ state, commit }) {
//     axios.get("/api/v1/categories").then((res) => {
//       const categories = res.data;
//       commit("setitems", { resource: "categories", items: categories });
//       return state.categories;
//     });
//   },

//   fetchMeetupById({ state, commit }, meetupId) {
//     commit("setitems", { resource: "meetup", items: {} });
//     axios.get(`/api/v1/meetups/${meetupId}`).then((res) => {
//       const meetup = res.data;
//       commit("setitems", { resource: "meetup", items: meetup });
//       return state.meetup;
//     });
//   },

//   fetchThreads({ state, commit }, meetupId) {
//     axios.get(`/api/v1/threads?meetupId=${meetupId}`).then((res) => {
//       const threads = res.data;
//       commit("setitems", { resource: "threads", items: threads });
//       return state.threads;
//     });
//   },
// },

//    setMeetups(state, meetups ){
//       state.meetups=meetups
//    },

//    setCategories(state, categories ){
//     state.categories=categories
//  },
//  setMeetup(state, meetup){
//    state.meetup=meetup
//  },
//  setThreads (state, threads) {
//   state.threads = threads
// }
