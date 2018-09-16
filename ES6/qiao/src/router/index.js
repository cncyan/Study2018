import Vue from 'vue'
import Router from 'vue-router'
import class1 from '@/components/class1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'class1',
      component: class1
    }
  ]
})
