
export default{
    data(){
        return{

        PageLoader_isDataLoaded:false

        }
    },

    methods:{
        pageLoader_resolveData () {
            this.PageLoader_isDataLoaded = true
          }
    }
}