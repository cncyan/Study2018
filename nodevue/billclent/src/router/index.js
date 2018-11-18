import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Forgetpwd from '@/pages/Forgetpwd'
import Aboutme from '@/pages/Aboutme'
import Set from '@/pages/Set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgetpwd',
      name: 'Forgetpwd',
      component: Forgetpwd
    },
    {
        path: '/aboutme',
        name: 'Aboutme',
        component: Aboutme
    },
    {
        path: '/set',
        name: 'Set',
        component: Set
    }
  ]
})
