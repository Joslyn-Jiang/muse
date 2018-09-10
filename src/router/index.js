import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Index from '@/views/index/index'
import Music from '@/views/music/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/music',
      name: 'Music',
      component: Music
    }
  ]
})
