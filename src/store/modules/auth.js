import axios from "axios";


export default {
  namespaced: true,

  state: {
    user:null,
    isAuthResolved: false
  },

  getters: {
    authUser(state) { return state.user || null },
    isAuthUser(state) {return !!state.user}
  },

  actions: {
    loginWithEmailAndPassword({ commit }, userdata) {
     return axios.post("api/v1/users/login", userdata)
        .then((res) => {
          const user = res.data;
          console.log(user)
          commit("setAuthUser", user);
         
        })
        .catch((err) => console.log(err));
    },

    getCurrentUser({commit}){
     axios.get("api/v1/users/me")
      .then(res=>{
        const user=res.data;
        commit("setAuthUser", user);
        commit( "setAuthState", true)
          
      })
      .catch(()=>{
        return undefined
      })
    },

    registerUser(context,userdata) {
      axios.post("api/v1/users/register", userdata);
      console.log(userdata);
    },

    logoutUser({commit}){
      axios.post("api/v1/users/logout")
       .then(()=>{
        commit("setAuthUser", null);
       })
      
          
    }
  },

  mutations: {
    setAuthUser(state, user) {
      return state.user = user;
    },

    setAuthState(state,authState){
      return state.isAuthResolved=authState;
    }

  }
  
}