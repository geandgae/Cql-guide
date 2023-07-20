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
    // 2023-07-18: 백인환 추가
    { //02. 예약현황
      path: '/dashboard/registration_status',
      name: 'registration_status',
      component: () => import("@/views//dashboard/registration_status")
    },
    { //03.ISGA(무인판매기) 
      path: '/dashboard/ISGA',
      name: 'ISGA',
      component: () => import("@/views//dashboard/ISGA")
    },
    { //04.숙박뉴스_목록 
      path: '/dashboard/hotel_news',
      name: 'hotel_news',
      component: () => import("@/views//dashboard/hotel_news")
    },
    { //05.숙박뉴스_보기 
      path: '/dashboard/hotel_news_view',
      name: 'hotel_news_view',
      component: () => import("@/views//dashboard/hotel_news_view")
    },
    { //06.공지사항_목록 
      path: '/dashboard/notice_news',
      name: 'notice_news',
      component: () => import("@/views//dashboard/notice_news")
    },
    { //07.공지사항_보기 
      path: '/dashboard/notice_news_view',
      name: 'notice_news_view',
      component: () => import("@/views//dashboard/notice_news_view")
    },
    { //08.구독현황_목록 
      path: '/dashboard/subscribe_status',
      name: 'subscribe_status',
      component: () => import("@/views//dashboard/subscribe_status")
    },
    { //09.구독현황_나의구독 채널 
      path: '/dashboard/subscribe_status_channel',
      name: 'subscribe_status_channel',
      component: () => import("@/views//dashboard/subscribe_status_channel")
    },
    { //10.구독현황_보기 
      path: '/dashboard/subscribe_status_view',
      name: 'subscribe_status_view',
      component: () => import("@/views//dashboard/subscribe_status_view")
    },
  ]
})

