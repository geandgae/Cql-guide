import { createRouter, createWebHistory } from 'vue-router'

export default createRouter ({
  // Hash
  // https://google.com/#/search
  // pages
  // https://google.com/
  history: createWebHistory(),
  
  routes: [
    {
      path: '/',
      name: 'IA',
      component: () => import("@/views/index")
    },
    {
      path: '/guide',
      name: 'guideList',
      component: () => import("@/views/guide")
    },
    {
      path: '/setting/env',
      name: 'settingEnv',
      component: () => import("@/views/setting/env")
    },
    {
      path: '/setting/popup',
      name: 'popup',
      component: () => import("@/views/setting/popup")
    },
  ]
})

