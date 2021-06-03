
export default{
    namespaced: true,

    state:{
       items:[]
       
    },

    getters:{

    },

    actions:{
        loginWithEmailAndPassword(context,userdata){
            console.log(userdata)
        },
        registerUser(context,userdata){
            console.log(userdata)
        }

        
    }
}