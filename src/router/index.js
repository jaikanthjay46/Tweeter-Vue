import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/login.vue'
import Signup from '@/components/signup.vue'
import firebase from 'firebase'

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

  if (requiresAuth && !user) next('/login')
  else if (!requiresAuth && user) next('/home')
  else next()
})

export default router;