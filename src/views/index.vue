<template>
  <!-- v-container -->
  <v-container fluid class="pa-10">
    <h1 class="mb-10">IA List</h1>
    <v-table class="flex-grow-1">
      <thead>
        <tr>
          <th v-for="item, i in th" :key="i" class="text-center">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, i in td.length" :key="item">
          <td v-for="x, n in td[i]" :key="n">
            <v-btn v-if="x.link === true" size="small" style="min-width: 80px" @click="link(x.to)">{{ x.to }} 이동</v-btn>
            <!-- <span v-if="x.link === true" style="cursor: pointer;" @click="link(x.to)">{{ x.to }}</span> -->
            <span v-else>{{ x }}</span>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
  <!-- //v-container -->
</template>

<script>
export default {
  name: "IA",
  data() {
    return {
      th: [
        { title: '구분', key: 'type', },
        { title: '파일명', key: 'name', },
        { title: '뎁스1', key: 'depth1', },
        { title: '뎁스2', key: 'depth2', },
        { title: '뎁스3', key: 'depth3', },
        { title: '링크', key: 'url', },
        { title: '상태', key: 'status', },
        { title: '메모', key: 'memo', },
      ],
      td: [
        {
          type: '가이드',
          name: '',
          depth1: 'guide',
          depth2: '-',
          depth3: '-',
          url: {
            to: '/guide',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '메인',
          name: '01.대시보드',
          depth1: 'home',
          depth2: '-',
          depth3: '-',
          url: {
            to: '/main',
            link: true,
          },
          status: '완료',
          memo: '대시보드',
        },
        
        {
          type: '01.대시보드',
          name: '02. 예약현황',
          depth1: 'dashboard',
          depth2: 'registration_status',
          depth3: '-',
          url: {
            to: '/dashboard/registration_status',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '03.ISGA(무인판매기)',
          depth1: 'dashboard',
          depth2: 'ISGA',
          depth3: '-',
          url: {
            to: '/dashboard/ISGA',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '04.숙박뉴스_목록',
          depth1: 'dashboard',
          depth2: 'hotel_news',
          depth3: '-',
          url: {
            to: '/dashboard/hotel_news',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '05.숙박뉴스_보기',
          depth1: 'dashboard',
          depth2: 'hotel_news_view',
          depth3: '-',
          url: {
            to: '/dashboard/hotel_news_view',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '06.공지사항_목록',
          depth1: 'dashboard',
          depth2: 'notice',
          depth3: '-',
          url: {
            to: '/dashboard/notice',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '07.공지사항_보기',
          depth1: 'dashboard',
          depth2: 'notice_view',
          depth3: '-',
          url: {
            to: '/dashboard/notice_view',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '08.구독현황_목록',
          depth1: 'dashboard',
          depth2: 'subscribe_status',
          depth3: '-',
          url: {
            to: '/dashboard/subscribe_status',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '09.구독현황_나의구독 채널',
          depth1: 'dashboard',
          depth2: 'subscribe_status_channel',
          depth3: '-',
          url: {
            to: '/dashboard/subscribe_status_channel',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '10.구독현황_보기',
          depth1: 'dashboard',
          depth2: 'subscribe_status_view',
          depth3: '-',
          url: {
            to: '/dashboard/subscribe_status_view',
            link: true,
          },
          status: '대기',
          memo: '-',
        },

        {
          type: '02.객실관리',
          name: '11.메인',
          depth1: 'room',
          depth2: 'index',
          depth3: '-',
          url: {
            to: '/room/index',
            link: true,
          },
          status: '대기',
          memo: '객실관리메인',
        },
        {
          type: '',
          name: '12.입실처리',
          depth1: 'room',
          depth2: 'checkIn',
          depth3: '-',
          url: {
            to: '/room/checkIn',
            link: true,
          },
          status: '대기',
          memo: '',
        },
        {
          type: '',
          name: '13.객실예약',
          depth1: 'room',
          depth2: 'check_in',
          depth3: '-',
          url: {
            to: '/room/check_in',
            link: true,
          },
          status: '대기',
          memo: '',
        },
        {
          type: '',
          name: '14.객실이력조회',
          depth1: 'room',
          depth2: 'check_room',
          depth3: '-',
          url: {
            to: '/room/check_room',
            link: true,
          },
          status: '대기',
          memo: '',
        },
        {
          type: '',
          name: '14.객실이력조회',
          depth1: 'room',
          depth2: 'check_room',
          depth3: '-',
          url: {
            to: '/room/check_room',
            link: true,
          },
          status: '대기',
          memo: '',
        },
        {
          type: '',
          name: '15.기간별 매출 집계',
          depth1: 'room',
          depth2: 'check_sales',
          depth3: '-',
          url: {
            to: '/room/check_sales',
            link: true,
          },
          status: '대기',
          memo: '',
        },
        {
          type: '',
          name: '16.객실내역',
          depth1: 'room',
          depth2: 'room_history',
          depth3: '-',
          url: {
            to: '/room/check_history',
            link: true,
          },
          status: '대기',
          memo: '',
        },
        {
          type: '',
          name: '17.객실이력',
          depth1: 'room',
          depth2: 'room_event',
          depth3: '-',
          url: {
            to: '/room/check_event',
            link: true,
          },
          status: '대기',
          memo: '',
        },
        {
          type: '',
          name: '18.객실설정',
          depth1: 'room',
          depth2: 'room_setting',
          depth3: '-',
          url: {
            to: '/room/room_setting',
            link: true,
          },
          status: '대기',
          memo: '',
        },
        {
          type: '',
          name: '19.시뮬레이터',
          depth1: 'room',
          depth2: 'simulator',
          depth3: '-',
          url: {
            to: '/room/simulator',
            link: true,
          },
          status: '대기',
          memo: '',
        },
        {
          type: '',
          name: '20.객실판매현황',
          depth1: 'room',
          depth2: 'sales_status',
          depth3: '-',
          url: {
            to: '/room/sales_status',
            link: true,
          },
          status: '대기',
          memo: '',
        },

        {
          type: '',
          name: '21.객실타임머신',
          depth1: 'room',
          depth2: 'index',
          depth3: '-',
          url: {
            to: '/room/index',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '22.포인트이력조회',
          depth1: 'room',
          depth2: 'point_list',
          depth3: '-',
          url: {
            to: '/room/point_list',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '23.객실정보관리',
          depth1: 'room',
          depth2: 'room_info',
          depth3: '-',
          url: {
            to: '/room/room_info',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '24.객실타입관리',
          depth1: 'room',
          depth2: 'room_type',
          depth3: '-',
          url: {
            to: '/room/room_type',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '25.일괄처리',
          depth1: 'room',
          depth2: 'room_status',
          depth3: '-',
          url: {
            to: '/room/room_status',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '26.포인트 관리',
          depth1: 'room',
          depth2: 'point_management',
          depth3: '-',
          url: {
            to: '/room/point_management',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '27.예약관리',
          depth1: 'room',
          depth2: 'room_reservation',
          depth3: '-',
          url: {
            to: '/room/room_reservation',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '28.예약등록',
          depth1: 'room',
          depth2: 'room_registration',
          depth3: '-',
          url: {
            to: '/room/room_registration',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '29.업소 게시판-알림목록',
          depth1: 'room',
          depth2: 'board_alarm',
          depth3: '-',
          url: {
            to: '/room/board_alarm',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '30.업소 게시판-알림등록',
          depth1: 'room',
          depth2: 'board_alarm_write',
          depth3: '-',
          url: {
            to: '/room/board_alarm_write',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '31.A/S 건의사항-건의목록',
          depth1: 'room',
          depth2: 'board_as',
          depth3: '-',
          url: {
            to: '/room/board_as',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '32.A/S 건의사항-건의등록',
          depth1: 'room',
          depth2: 'board_as_write',
          depth3: '-',
          url: {
            to: '/room/board_as_write',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '33.A/S 건의사항-건의등록',
          depth1: 'room',
          depth2: 'board_as_write',
          depth3: '-',
          url: {
            to: '/room/board_as_write',
            link: true,
          },
          status: '대기',
          memo: '-',
        },

        {
          type: '0.3.환경설정',
          name: '34. 초기화면',
          depth1: 'setting',
          depth2: 'env',
          depth3: '-',
          url: {
            to: '/setting/env',
            link: true,
          },
          status: '대기',
          memo: '-',
        },

        {
          type: '',
          name: '34. 요금설정-객실 추가/할인 요금 설정',
          depth1: 'timeline',
          depth2: 'index',
          depth3: '-',
          url: {
            to: '/timeline/index',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '35. 요금설정-무인판매 시간/추가 요금 설정',
          depth1: 'timeline',
          depth2: 'timeline_page',
          depth3: '-',
          url: {
            to: '/timeline/timeline_page',
            link: true,
          },
          status: '대기',
          memo: '-',
        },


        {
          type: '',
          name: '36.카드데크 키 현황 보기',
          depth1: 'setting',
          depth2: 'key_status',
          depth3: '-',
          url: {
            to: '/setting/key_status',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
      ],
    };
  },
  methods: {
    link(val) {
      this.$router.push({
        path: `${val}`
      });
    },
  },
};
</script>
