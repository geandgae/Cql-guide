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
            <!-- vsheet -->
            <v-sheet class="box-border" style="height: 280px;">

              <div class="d-flex align-center justify-space-between bg-lightgrey w-100 ma-0 py-2 px-6"
                style="height: 42px; border-bottom: 1px solid #d6dbe2;">

                <div class="title-2 my-2">예약현황</div>

                <!-- btn_taps -->
                <div class="btn-toggels">
                  <v-btn :class="{ active: toggle === 0 }" rounded="0" size="small" @click="btnTog(0)">
                    일별
                  </v-btn>
                  <v-btn :class="{ active: toggle === 1 }" rounded="0" size="small" @click="btnTog(1)">
                    주별
                  </v-btn>
                  <v-btn :class="{ active: toggle === 2 }" rounded="0" size="small" @click="btnTog(2)">
                    월별
                  </v-btn>
                </div>
                <!-- </btn_taps> -->
              </div>


              <!-- day -->
              <div v-if="toggle === 0" class="py-4">
                <Chart class="pa-2" style="height: 220px;"></Chart>
              </div>

              <!-- week -->
              <div v-if="toggle === 1" class="py-4">
                <div>week</div>
              </div>

              <!-- month -->
              <div v-if="toggle === 2" class="py-4">
                <div>month</div>
              </div>
            </v-sheet>
            <!-- //vsheet -->

            <!-- vsheet -->
            <!-- vsheet -->
            <v-sheet class="box-border mt-3 overflow-y-auto" style="height: 306px;">

              <div class="d-flex align-center justify-space-between w-100 ma-0 py-2 px-6"
                style="height: 42px; border-bottom: 1px solid #d6dbe2;">

                <div class="title-2 my-2">App 통계</div>

                <div>
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="일간통계" value="일간통계"></v-radio>
                    <v-radio color="secondary" label="주간통계" value="주간통계"></v-radio>
                    <v-radio color="secondary" label="월간통계" value="월간통계"></v-radio>
                  </v-radio-group>
                </div>
              </div>

                <div class="d-flex align-center justify-space-between" style="height:30px; background-color: #d3d9e0;">
                  <v-btn variant="text" style="min-width: 50px; height: 30px;">
                    <v-icon color="darkgrey" size="large">mdi-chevron-left</v-icon>
                  </v-btn>
                  <div class="title-sub">1주</div>
                  <v-btn variant="text" style="min-width: 50px; height: 30px;">
                    <v-icon color="darkgrey" size="large">mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
              
              
              <Chart2 class="pa-2" style="height: 230px;"></Chart2>
            </v-sheet>
            <!-- //vsheet -->
            <!-- //vsheet -->
          </div>
          <!-- //left-->

          <!-- right -->
          <div class="d-flex flex-column flex-shrink-0 ml-4" style="width: 380px">
            <!-- vsheet -->
            <v-sheet class="box-border pa-5" style="height: 280px;">
              <div class="title-2">매출현황</div>
              <div class="d-flex justify-center mt-3" style="gap: 30px;">
                <div class="day-price">오늘 : <span class="title-sub color-secondary">1,200,000</span>원</div>
                <div class="day-price">어제 : <span class="title-sub color-primary">1,200,000</span>원</div>
              </div>
              <div class="d-flex align-center bg-darkgrey py-4 px-6 justify-space-between mt-4"
                style="height: 60px; border-radius: 3px;">
                <div class="title color-white" style="font-weight: 400;">총 매출</div>
                <div class="number lg" style="color: #ffcc00;">1,560,000원</div>
              </div>
              <div class="title-2 mt-4">전체현황</div>
              <div class="d-flex justify-center mt-3" style="gap: 8px;">
                <div class="d-flex align-center bg-lightgrey justify-space-between pa-4"
                  style="width: 108px; height: 56px; border-radius: 10px;">
                  <div class="title-sub" style="font-weight: 400;">신규</div>
                  <div class="number lg color-primary">5</div>
                </div>
                <div class="d-flex align-center bg-lightgrey justify-space-between pa-4"
                  style="width: 108px; height: 56px; border-radius: 10px;">
                  <div class="title-sub" style="font-weight: 400;">처리</div>
                  <div class="number lg color-primary">13</div>
                </div>
                <div class="d-flex align-center bg-lightgrey justify-space-between pa-4"
                  style="width: 108px; height: 56px; border-radius: 10px;">
                  <div class="title-sub" style="font-weight: 400;">취소</div>
                  <div class="number lg color-primary">8</div>
                </div>
              </div>
            </v-sheet>
            <!-- vsheet -->

            <!-- vsheet -->
            <v-sheet class="box-border mt-3 overflow-y-auto" style="height: 306px;">
              <div class="d-flex align-center px-2 bg-darkgrey custom-bar" style="height: 40px;">
                <span class="title-2 mr-4">예약현황</span>
                <v-checkbox hide-details density="compact" color="secondary" label="전체" style="width: 40px;!important"></v-checkbox>
                <v-checkbox hide-details density="compact" color="secondary" label="숙박" style="width: 40px;!important"></v-checkbox>
                <v-checkbox hide-details density="compact" color="secondary" label="대실" style="width: 40px;!important"></v-checkbox>
                <v-select :items="['층 선택']" value="층 선택" density="compact" class="custom-select ml-2" hide-details style="width: 80px">
            </v-select>
              </div>
              <div class="d-flex align-center ma-2">
                <div class="d-flex align-center bg-lightgrey pa-3" style="width: 100%; height: 38px; border-radius: 3px;">
                  <div class="title-sub color-aqua" style="width: 22%;">숙박앱</div>
                  <div class="body-1 text-center" style="width: 2%;">|</div>
                  <div class="body-1 text-center" style="width: 15%;">숙박</div>
                  <div class="body-1 text-center" style="width: 2%;">|</div>
                  <div class="body-1 text-center" style="width: 35%;">203호 / 스위트룸</div>
                  <div class="body-1 text-center" style="width: 2%;">|</div>
                  <div class="body-1 text-right" style="width: 22%;">22-12-24</div>
                </div>
              </div>
              <div class="d-flex align-center ma-2">
                <div class="bg-lightgrey pa-3 w-100" style="height: 70px; border-radius: 3px;">
                  <div class="d-flex justify-space-between align-center">
                    <div class="title-sub color-aqua" style="width: 22%;">야놀자</div>
                    <div class="body-1 text-center" style="width: 2%;">|</div>
                    <div class="body-1 text-center" style="width: 15%;">대실</div>
                    <div class="body-1 text-center" style="width: 2%;">|</div>
                    <div class="body-1 text-center" style="width: 35%;">306호 / 일반룸</div>
                    <div class="body-1 text-center" style="width: 2%;">|</div>
                    <div class="body-1 text-right" style="width: 22%;">22-12-24</div>
                  </div>
                  <div class="d-flex justify-start align-center mt-2">
                    <div class="custom-memo body-2">고객메모</div>
                    <div class="body-2 color-secondary ml-2" style="font-weight: 400;">PC 사용하려고 하는데 와이파이 가능한가요?</div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-center ma-2 " v-for="item in 10" :key="item">
                <div class="d-flex align-center bg-lightgrey pa-3" style="width: 100%; height: 38px; border-radius: 3px;">
                  <div class="title-sub color-aqua" style="width: 22%;">여기어때</div>
                  <div class="body-1 text-center" style="width: 2%;">|</div>
                  <div class="body-1 text-center" style="width: 15%;">숙박</div>
                  <div class="body-1 text-center" style="width: 2%;">|</div>
                  <div class="body-1 text-center" style="width: 35%;">417호 / VIP룸</div>
                  <div class="body-1 text-center" style="width: 2%;">|</div>
                  <div class="body-1 text-right" style="width: 22%;">22-12-24</div>
                </div>
              </div>
            </v-sheet>
            <!-- vsheet -->

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
import Chart from "./registration_chart.vue";
import Chart2 from "./registration_chart2.vue";

export default {
  name: "Registration_status",
  components: {
    Popup,
    Chart,
    Chart2,
  },
  data: () => ({
    toggle: 0,
    dates: null,
    datee: null,
    popup: {
      title: "일별",
      theme: "theme-popup-light",
      size: "size-md",
      align: "mx-auto",
    },
    //tab
    tab: "day",
    tabsItem: [
      'day',
      'week',
      'month',
    ],
    slides: [
          '1주',
          '2주',
          '3주',
          '4주',
        ],
  }),
  methods: {
    // toggle(val) {
    //   this.setting = val;
    // },
    btnTog(val) {
      this.toggle = val;
    },
    btnSlide(val) {
      this.slides = val;
    }
  },
}
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

.custom-memo {
  width: 60px;
  height: 24px;
  padding: 0 6px;
  border-radius: 12px;
  border: solid 1px #fc6060;
  background-color: #fff;
  color: #fc6060;
}

.reg-dot {
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background-color: #33b0df;
  display: block;
  content: "";
}

.btn-toggels {
  display: flex;
  align-items: center;

  .v-btn {
    width: 80px;
    border: 1px solid #b7c2cf;
    color: #2c2f35 !important;

    &.active {
      color: #fc6060 !important;
      background-color: white !important;
      border-color: #fc6060 !important;
    }
  }
}
</style>