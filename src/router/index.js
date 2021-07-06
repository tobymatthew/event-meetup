import  Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

import  PageHome from '@/pages/PageHome';
import  PageMeetupDetail from '@/pages/PageMeetupDetail';
import  pageMeetupFind from '@/pages/pageMeetupFind';
import  pageNotFound from '@/pages/pageNotFound';
import  PageLogin from '@/pages/PageLogin';
import  PageSecret   from '@/pages/PageSecret';
import  PageRegister from '@/pages/PageRegister';
import  PageNotAuthenticated from '@/pages/PageNotAuthenticated'




Vue.use(Router);

const router= new Router({
    routes :[
        {
            path:'/',
            name: ' PageHome',
            component: PageHome
        },

        {
            path:'/find',
            name: ' pageMeetupFind',
            component:pageMeetupFind,
           
        },

        {
            path:'/secret',
            name: 'PageSecret',
            component:PageSecret,
            beforeEnter (to, from, next) {
                if (store.getters['auth/isAuthenticated']) {
                  next ()
                } else {
                  next({name: 'PageNotAuthenticated'})
                }
              }
          },
       
        {
            path:'/meetups/:id',
            name: ' PageMeetupDetail',
            component:PageMeetupDetail
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
        path: '/401',
        name: 'PageNotAuthenticated',
        component: PageNotAuthenticated
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