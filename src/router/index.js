import Vue from 'vue'
import Router from 'vue-router'
import Nastenka from '@/components/Nastenka'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/Nastenka',
    name: 'Nastenka',
    component: Nastenka
  }]
})