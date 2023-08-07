<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <div class="msgbox">
          <p class="tit">홍길동 - 테스트</p>
          <div class="input-area">
            <label for="id">인증코드1</label> <input type="text" id="id" />
          </div>
          <div class="input-area">
            <label for="id2">인증코드2</label> <input type="text" id="id2" />
          </div>
        </div>
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <template v-slot:footer>
      <div class="btns">
        <v-btn color="darkgrey" size="large" style="min-width: 150px"
          >닫기</v-btn
        >
      </div>
    </template>
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "hotel_news",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "오프라인 사용기간 인증",
      theme: "theme-popup-light",
      size: "size-sm",
      align: "mx-auto",
    },
    date: null,
    page: 1,
  }),
};
</script>
