import Vue from 'vue'
import Router from 'vue-router'
import cFoot from '@/components/cfoot'
import Home from '@/pages/home'
import Aboutme from '@/pages/aboutme'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/aboutme',
      name: 'Aboutme',
      component: Aboutme
    },{
      path: 'cfoot',
      name: 'cfoot',
      component: cFoot
    }
  ]
})
