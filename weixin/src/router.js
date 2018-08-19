import Vue from 'vue'
import Router from 'vue-router'
import Tongxun from './views/tongxun/tongxun'
import Weixin from './views/weixin/weixin'
import Faxian from './views/faxian/faxian'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/weixin'
    },
    {
      path: '/weixin',
      component: Weixin
    },
    {
      path: '/tongxun',
      component: Tongxun
    },
    {
      path: '/faxian',
      component: Faxian
    },
    {
      path: '/wo',
      component: () => import('./views/wo/wo')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
