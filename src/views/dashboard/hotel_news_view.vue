<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <div class="bbs-title d-flex align-center mb-2">
          <span class="text">'야놀자 라이브' 조회수 10만 돌파</span>
          <span class="date">12/24/10:36</span>
        </div>
        <div class="bbs-contents mb-2">
          <div style="width: 100%;text-align: center;">
            <img :src="img" alt="야놀자라이브 조회수 10만 돌파" />
          </div>
          <p >
            여가 플랫폼 기업 야놀자의 라이브 커머스 전용 카테고리 ‘야놀자라이브’ 조회수가 10만 회를 돌파했다고 지난 12월 7일 밝혔다.
            야놀자는 기술로 여행의 모든 것을 한 번에 쉽게 해주자는 의도로 차별화된 고객 경험을 제공하고자 야놀자라이브를 신설했고,
            이 방송에서 호텔·레저·모바일교환권 등 다양한 여가 상품을 할인 판매하고 있다.
          </p>
        </div>
        <v-table class="sm">
          <colgroup>
            <col style="width: 80px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>이전글</th>
              <td>
                <div class="d-flex justify-space-between">
                  <a href="#" class="link-text">여기어때, 총 72명에게 '괌' 여행 티켓 쏜다.</a>
                  <p class="sm-font12">12/24/10:36</p>
                </div>
              </td>
            </tr>
            <tr>
              <th>이전글</th>
              <td>
                <div class="d-flex justify-space-between">
                  <a href="#" class="link-text">미성년 혼숙 사실, 미필적 용인 여부가 처벌 대상</a>
                  <p class="sm-font12">12/24/10:36</p>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <!-- slot -->
    <template v-slot:footer>
        <div class="btns">
          <v-btn color="secondary" size="large" style="min-width: 150px">목록</v-btn>
          <v-btn color="darkgrey" size="large" style="min-width: 150px" @click="dialog = !dialog">닫기</v-btn>
        </div>
      </template>
      <!-- //slot -->
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "hotel_news_view",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "숙박뉴스 보기",
      theme: "theme-popup-light",
      size: "size-smd",
      align: "mx-auto",
    },
    img: require('@/assets/images/img-yanolza.png')
  }),
};
</script>
