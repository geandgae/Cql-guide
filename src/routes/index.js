import { createRouter, createWebHistory } from 'vue-router'
import Bong from '../views/BongHome'
import OneView from '../views/OneView'
import TwoView from '../views/TwoView'
import ThreeView from '../views/ThreeView'

export default createRouter ({
  // Hash
  // https://google.com/#/search
  history: createWebHistory(),
  // pages
  // https://google.com/
  routes: [
    {
      path: '/',
      component: Bong
    },
    {
      path: '/OneView',
      component: OneView
    },
    {
      path: '/TwoView',
      component: TwoView
    },
    {
      path: '/ThreeView',
      component: ThreeView
    }
  ]
})

