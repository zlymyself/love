import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import CheckP from '@/pages/CheckPrice/CheckPrice'
import CheckD from '@/pages/CheckDeviation/CheckDeviation'
import Tsetting from '@/pages/Tsetting/Tsetting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/checkprice',
      component: CheckP
    },
    {
      path: '/checkdeviation',
      component: CheckD
    },
    {
      path: '/tsetting',
      component: Tsetting
    }, 
  ]
})
