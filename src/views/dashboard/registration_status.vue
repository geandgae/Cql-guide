<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <v-row no-gutters class="mt-4">
          <!-- left-->
          <div class="flex-grow-1">

          </div>
          <!-- //left-->

          <!-- right -->
          <div class="d-flex flex-column flex-shrink-0 ml-4" style="width: 380px">
            <v-sheet class="box-border pa-5" style="height: 280px;">
              <div class="title-2">매출현황</div>
              <div class="d-flex justify-center mt-3" style="gap: 30px;">
                <div class="day-price">오늘 : <span class="title-sub color-secondary">1,200,000</span>원</div>
                <div class="day-price">어제 : <span class="title-sub color-primary">1,200,000</span>원</div>
              </div>
              <div class="d-flex align-center bg-darkgrey py-4 px-6 justify-space-between mt-4" style="height: 60px; border-radius: 3px;">
                <div class="title color-white" style="font-weight: 400;">총 매출</div>
                <div class="number lg" style="color: #ffcc00;">1,560,000원</div>
              </div>
              <div class="title-2 mt-4">전체현황</div>
              <div class="d-flex justify-center mt-3" style="gap: 8px;">
                <div class="d-flex align-center bg-lightgrey justify-space-between pa-4" style="width: 108px; height: 56px; border-radius: 10px;">
                  <div class="title-sub" style="font-weight: 400;">신규</div>
                  <div class="number lg color-primary">5</div>
                </div>
                <div class="d-flex align-center bg-lightgrey justify-space-between pa-4" style="width: 108px; height: 56px; border-radius: 10px;">
                  <div class="title-sub" style="font-weight: 400;">처리</div>
                  <div class="number lg color-primary">13</div>
                </div>
                <div class="d-flex align-center bg-lightgrey justify-space-between pa-4" style="width: 108px; height: 56px; border-radius: 10px;">
                  <div class="title-sub" style="font-weight: 400;">취소</div>
                  <div class="number lg color-primary">8</div>
                </div>
              </div>
            </v-sheet>


          </div>
          <!-- //right -->
        </v-row>
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <!-- //slot -->
    <template v-slot:footer>
      <div class="btns">
        <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
      </div>
    </template>
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "Registration_status",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "예약현황",
      theme: "theme-popup-light",
      size: "size-md",
      align: "mx-auto",
    },
  }),
};
</script>

<style lang="scss" scoped>
.day-price {
  display: flex;
  align-items: center;
  &::before {
    width: 6px;
    height: 6px;
    background-color: #3c4d60;
    content: "";
    display: block;
    border-radius: 2px;
    margin-right: 8px;
  }
}
</style>