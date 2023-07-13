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
          name: '대시보드',
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
          name: '예약현황',
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
          name: 'ISGA(무인판매기)',
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
          name: '숙박뉴스_목록',
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
          name: '숙박뉴스_보기',
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
          name: '공지사항_목록',
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
          name: '공지사항_보기',
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
          name: '구독현황_목록',
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
          name: '구독현황_나의구독 채널',
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
          name: '구독현황_보기',
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
          name: '메인',
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
          name: '포인트이력조회',
          depth1: 'room',
          depth2: 'pointList',
          depth3: '-',
          url: {
            to: '/room/pointList',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '포인트관리',
          depth1: 'room',
          depth2: 'pointManage',
          depth3: '-',
          url: {
            to: '/room/pointManage',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '객실정보관리',
          depth1: 'room',
          depth2: 'Info',
          depth3: '-',
          url: {
            to: '/room/info',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '객실타입관리',
          depth1: 'room',
          depth2: 'type',
          depth3: '-',
          url: {
            to: '/room/type',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '일괄처리',
          depth1: 'room',
          depth2: 'Status',
          depth3: '-',
          url: {
            to: '/room/status',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '예약관리',
          depth1: 'room',
          depth2: 'reservation',
          depth3: '-',
          url: {
            to: '/room/reservation',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        {
          type: '',
          name: '예약등록',
          depth1: 'room',
          depth2: 'registration',
          depth3: '-',
          url: {
            to: '/room/registration',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
        


        {
          type: '03.환경설정',
          name: '초기화면',
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
          name: '카드데크 키 현황 보기',
          depth1: 'dashboard',
          depth2: 'key_status',
          depth3: '-',
          url: {
            to: '/dashboard/key_status',
            link: true,
          },
          status: '대기',
          memo: '-',
        },


        
        {
          type: '팝업',
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
          type: '팝업',
          depth1: 'management',
          depth2: 'index',
          depth3: '-',
          url: {
            to: '/management/index',
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
