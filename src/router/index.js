import  Vue from 'vue';
import Router from 'vue-router';
 
import  PageHome from '@/pages/PageHome';
import  PageMeetupDetail from '@/pages/PageMeetupDetail';
import  pageMeetupFind from '@/pages/pageMeetupFind';
import  pageNotFound from '@/pages/pageNotFound';
import  PageLogin from '@/pages/PageLogin'
import  PageRegister from '@/pages/PageRegister'



Vue.use(Router);

const router= new Router({
    routes :[
        {
            path:'/',
            name: ' PageHome',
            component: PageHome
        },
       
        {
            path:'/meetups/:id',
            name: ' PageMeetupDetail',
            component:PageMeetupDetail
        },

        {
            path:'/find',
            name: ' pageMeetupFind',
            component:pageMeetupFind
        },
        {
            path:'/login',
            name: 'PageLogin',
            component:PageLogin
        },

        {
            path:'/register',
            name: 'PageRegister',
            component:PageRegister
        },

        {
            path: '*',
            name: 'pageNotFound',
            component:pageNotFound
        }


    ],

    mode:'history'
})

export default router;