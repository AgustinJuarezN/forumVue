import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ThreadShow from '@/components/ThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/:id',
      component: ThreadShow,
      name: 'ThreadShow',
      props: true
    }
  ],
  mode: 'history'
})
