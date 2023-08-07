<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <div class="msgbox">
          <p class="info">암호가 올바르지 않습니다.</p>
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
      title: "암호입력",
      theme: "theme-popup-light",
      size: "size-sm",
      align: "mx-auto",
    },
    date: null,
    page: 1,
  }),
};
</script>
