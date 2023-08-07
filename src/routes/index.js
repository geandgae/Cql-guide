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
      path: '/login',
      name: 'login',
      component: () => import("@/views/login")
    }, 
    {
      path: '/app-main',
      name: 'app-main',
      component: () => import("@/views/app-main")
    }, 
    {
      path: '/div/time-m',
      name: 'time-m',
      component: () => import("@/views/div/time-m") 
    },
    {
      path: '/div/room-sett',
      name: 'room-sett',
      component: () => import("@/views/div/room-sett") 
    },
    {
      path: '/div/setting-r',
      name: 'setting-r',
      component: () => import("@/views/div/setting-r") 
    },
  
    // setting
    {
      path: '/setting',
      name: 'setting',
      component: () => import("@/views/setting/index")
    },
    {
      path: '/setting/key_status',
      name: 'settingkey',
      component: () => import("@/views/setting/key_status")
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
    // 대시보드
    { //02. 예약현황
      path: '/dashboard/registration_status',
      name: 'registration_status',
      component: () => import("@/views/dashboard/registration_status")
    },
    { //03.ISGA(무인판매기) 
      path: '/dashboard/ISGA',
      name: 'ISGA',
      component: () => import("@/views/dashboard/ISGA")
    },
    { //04.숙박뉴스_목록 
      path: '/dashboard/hotel_news',
      name: 'hotel_news',
      component: () => import("@/views/dashboard/hotel_news")
    },
    { //05.숙박뉴스_보기 
      path: '/dashboard/hotel_news_view',
      name: 'hotel_news_view',
      component: () => import("@/views/dashboard/hotel_news_view")
    },
    { //06.공지사항_목록 
      path: '/dashboard/notice_news',
      name: 'notice_news',
      component: () => import("@/views/dashboard/notice_news")
    },
    { //07.공지사항_보기 
      path: '/dashboard/notice_news_view',
      name: 'notice_news_view',
      component: () => import("@/views/dashboard/notice_news_view")
    },
    { //08.구독현황_목록 
      path: '/dashboard/subscribe_status',
      name: 'subscribe_status',
      component: () => import("@/views/dashboard/subscribe_status")
    },
    { //09.구독현황_나의구독 채널 
      path: '/dashboard/subscribe_status_channel',
      name: 'subscribe_status_channel',
      component: () => import("@/views/dashboard/subscribe_status_channel")
    },
    { //10.구독현황_보기 
      path: '/dashboard/subscribe_status_view',
      name: 'subscribe_status_view',
      component: () => import("@/views/dashboard/subscribe_status_view")
    },

    //객실관리
    { //12.객실관리 - 입실처리
      path: '/room/room_in',
      name: 'check_in',
      component: () => import("@/views/room/room_in")
    },
    { //13.객실예약
      path: '/room/room_reservation',
      name: 'room_reservation',
      component: () => import("@/views/room/room_reservation")
    },
    { //14.객실이력조회
      path: '/room/room_inquiry',
      name: 'room_inquiry',
      component: () => import("@/views/room/room_inquiry")
    },
    { //15.기간별 매출 집계
      path: '/room/check_sales',
      name: 'check_sales',
      component: () => import("@/views/room/check_sales")
    },
    { //16.객실내역
      path: '/room/room_history',
      name: 'room_history',
      component: () => import("@/views/room/room_history")
    },
    { //17.객실이력
      path: '/room/room_event',
      name: 'room_event',
      component: () => import("@/views/room/room_event")
    },
    { //18.객실설정
      path: '/room/room_setting',
      name: 'room_setting',
      component: () => import("@/views/room/room_setting")
    },
    { //19.시뮬레이터
      path: '/room/ccu_simulator',
      name: 'ccu_simulator',
      component: () => import("@/views/room/ccu_simulator")
    },
    { //20.객실판매현황
      path: '/room/sales_status',
      name: 'sales_status',
      component: () => import("@/views/room/sales_status")
    },
    { //23.포인트이력조회
      path: '/room/point_list',
      name: 'point_list',
      component: () => import("@/views/room/point_list")
    },
    // management
    {//24.객실정보 관리
      path: '/management/room_info',
      name: 'room_info',
      component: () => import("@/views/management/room_info")
    },
    { //25.객실타입 관리
      path: '/room/room_type',
      name: 'room_type',
      component: () => import("@/views/room/room_type")
    },
    { //26.일괄처리
      path: '/room/room_status',
      name: 'room_status',
      component: () => import("@/views/room/room_status")
    },
    { //27.포인트관리
      path: '/room/point_management',
      name: 'point_management',
      component: () => import("@/views/room/point_management")
    },
    { //28.예약관리, 29.예약등록
      path: '/room/room_management',
      name: 'room_management',
      component: () => import("@/views/room/room_management")
    },
    { //30.업소 게시판-알림목록
      path: '/room/board_alarm',
      name: 'board_alarm',
      component: () => import("@/views/room/board_alarm")
    },
    { //31.업소 게시판-알림등록
      path: '/room/board_alarm_write',
      name: 'board_alarm_write',
      component: () => import("@/views/room/board_alarm_write")
    },
    { //32.A/S 건의사항-건의목록
      path: '/room/board_as',
      name: 'board_as',
      component: () => import("@/views/room/board_as")
    },
    { //33.A/S 건의사항-건의등록
      path: '/room/board_as_write',
      name: 'board_as_write',
      component: () => import("@/views/room/board_as_write")
    },
  ]
})

