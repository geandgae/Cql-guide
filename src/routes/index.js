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
      component: () => import("@/views/guide/guide")
    },
    {
      path: '/app-main',
      name: 'app-main',
      component: () => import("@/views/app-main")
    },
    // management
    {
      path: '/management/roominfo',
      name: 'roominfo',
      component: () => import("@/views/management/RoomInfo")
    },
    // setting
    {
      path: '/setting',
      name: 'setting',
      component: () => import("@/views/setting/index")
    },
    // test
    {
      path: '/test/popup',
      name: 'popup-test',
      component: () => import("@/views/test/popup")
    },
    {
      path: '/test/env',
      name: 'settingEnv',
      component: () => import("@/views/test/env")
    },
  ]
})

