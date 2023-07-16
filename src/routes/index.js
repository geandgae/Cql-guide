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
      path: '/app-main',
      name: 'app-main',
      component: () => import("@/views/app-main")
    },
    // management
    {
      path: '/management/roominfo',
      name: 'setting',
      component: () => import("@/views/management/RoomInfo")
    },
    // setting
    // {
    //   path: '/setting',
    //   name: 'setting',
    //   component: () => import("@/views/setting/Index")
    // },
    // test
    {
      path: '/setting/popup',
      name: 'popup-test',
      component: () => import("@/views/setting-test/popup")
    },
    {
      path: '/setting/env',
      name: 'settingEnv',
      component: () => import("@/views/setting-test/env")
    },
  ]
})

