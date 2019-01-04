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
      path: '/thread',
      component: Home,
      name: 'Hello'
    },
    {
      path: '/thread/:id',
      component: ThreadShow,
      name: 'ThreadShow',
      props: {default: true}
    }
  ],
  mode: 'history'
})
