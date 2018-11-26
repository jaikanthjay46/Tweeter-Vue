import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/login.vue'
import Signup from '@/components/signup.vue'
import TopicFeed from '@/components/TopicFeed.vue'
import firebase from '@/firebase.js'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    { 
      path: '/topics/:topic', 
      component: TopicFeed 
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: Signup
    }
  ]
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requireAuth);
  let isLogin = to.matched.some(record => record.name === 'Login');

  if (requiresAuth && !user) next('/login')
  else if(user && isLogin )  next('/home') 
  else next()
})

export default router;