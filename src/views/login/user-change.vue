<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <div class="msgbox">
          <div class="input-area">
            <label for="id">아이디</label>
            <select>
              <option>관리자</option>
            </select>
          </div>
          <div class="input-area">
            <label for="pw">비밀번호</label> <input type="password" id="pw" />
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
      title: "사용자 전환",
      theme: "theme-popup-light",
      size: "size-sm",
      align: "mx-auto",
    },
    date: null,
    page: 1,
  }),
};
</script>
