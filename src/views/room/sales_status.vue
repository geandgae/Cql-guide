<template>
  <!-- popup -->
  <Popup :popup="popup" style="width: 950px;min-height:700px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents overflow-y-auto" style="height: 700px;">
        <v-container class="pa-0 ma-0">
          <v-row no-gutters class="sales_status">
            <!-- left -->
            <div class="status_wrap">
              <div class="banner-title bg-secondary">
                  <h3 class="header-title">OTA 예약현황</h3>
                  <v-btn color="secondary" size="medium" rounded="xl" class="pa-0" style="width:32px;height:32px;margin-right:-16px">
                    <v-icon color="white" size="medium">mdi-open-in-new</v-icon>
                  </v-btn>
              </div>
              <div class="form-card">
                <div class="card-item">
                  <div class="item-area-type1">
                    <h4 class="title">여기어때</h4>
                    <div class="sub-title">
                      <p class="name">건수</p>
                      <p class="num">6</p>
                    </div>
                  </div>
                  <p class="item-hr"></p>
                  <div class="item-area-type2">
                    <p class="room-type"><span class="point-text1" style="margin-right:10px">[숙박]</span>20:30 / 203호 / 특실</p>
                    <p class="time">22-12-24</p>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type1">
                    <h4 class="title">야놀자</h4>
                    <div class="sub-title">
                      <p class="name">건수</p>
                      <p class="num">3</p>
                    </div>
                  </div>
                  <p class="item-hr"></p>
                  <div class="item-area-type2">
                    <p class="room-type"><span class="point-text2" style="margin-right:10px">[대실]</span>20:30 / 203호 / 특실</p>
                    <p class="time">22-12-24</p>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type1">
                    <h4 class="title">네이버</h4>
                    <div class="sub-title">
                      <p class="name">건수</p>
                      <p class="num">12</p>
                    </div>
                  </div>
                  <p class="item-hr"></p>
                  <div class="item-area-type2">
                    <p class="room-type"><span class="point-text1" style="margin-right:10px">[숙박]</span>20:30 / 203호 / 특실</p>
                    <p class="time">22-12-24</p>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type1">
                    <h4 class="title">호텔스닷컴</h4>
                    <div class="sub-title">
                      <p class="name">건수</p>
                      <p class="num">0</p>
                    </div>
                  </div>
                  <p class="item-hr"></p>
                  <div class="item-area-type2">
                    <p class="room-type"><span class="point-text1" style="margin-right:10px">[숙박]</span>20:30 / 203호 / 특실</p>
                    <p class="time">22-12-24</p>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type1">
                    <h4 class="title">아고다</h4>
                    <div class="sub-title">
                      <p class="name">건수</p>
                      <p class="num">0</p>
                    </div>
                  </div>
                  <p class="item-hr"></p>
                  <div class="item-area-type2">
                    <p class="room-type"><span class="point-text2" style="margin-right:10px">[대실]</span>20:30 / 203호 / 특실</p>
                    <p class="time">22-12-24</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- //left -->
            <!-- center -->
            <div class="status_wrap">
              <div class="banner-title bg-primary">
                  <h3 class="header-title">무인판매기 현황</h3>
                  <v-btn color="primary" size="medium" rounded="xl" class="pa-0" style="width:32px;height:32px;margin-right:-16px">
                    <v-icon color="white" size="medium">mdi-open-in-new</v-icon>
                  </v-btn>
              </div>
              <div class="form-card">
                <div class="card-item">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="point-text1 ml-2">[숙박]</span></p>
                        <p>입실:<span class="ml-2">13:00</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">203호</span></p>
                        <p>객실:<span class="ml-2">스위트룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                        <p>결제:<span class="ml-2">카드</span></p>
                        <p><span class="bold">50,000</span>원</p>
                      </div>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="point-text2 ml-2">[대실]</span></p>
                        <p>입실:<span class="ml-2">14:00</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">402호</span></p>
                        <p>객실:<span class="ml-2">VIP룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                        <p>결제:<span class="ml-2">현금</span></p>
                        <p><span class="bold">45,000</span>원</p>
                      </div>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="point-text1 ml-2">[숙박]</span></p>
                        <p>입실:<span class="ml-2">13:00</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">203호</span></p>
                        <p>객실:<span class="ml-2">스위트룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                        <p>결제:<span class="ml-2">카드</span></p>
                        <p><span class="bold">50,000</span>원</p>
                      </div>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="point-text2 ml-2">[대실]</span></p>
                        <p>입실:<span class="ml-2">14:00</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">402호</span></p>
                        <p>객실:<span class="ml-2">VIP룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                        <p>결제:<span class="ml-2">현금</span></p>
                        <p><span class="bold">45,000</span>원</p>
                      </div>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="point-text1 ml-2">[숙박]</span></p>
                        <p>입실:<span class="ml-2">13:00</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">203호</span></p>
                        <p>객실:<span class="ml-2">스위트룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                        <p>결제:<span class="ml-2">카드</span></p>
                        <p><span class="bold">50,000</span>원</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //center -->
            <!-- right -->
            <div class="status_wrap">
              <div class="banner-title bg-violet">
                  <h3 class="header-title" style="width:100%;text-align:center;">프론트 판매현황</h3>
              </div>
              <div class="form-card">
                <div class="card-item">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="point-text1 ml-2">[숙박]</span></p>
                        <p>입실:<span class="ml-2">13:00</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">203호</span></p>
                        <p>객실:<span class="ml-2">스위트룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                        <p>결제:<span class="ml-2">카드</span></p>
                        <p><span class="bold">50,000</span>원</p>
                      </div>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="point-text2 ml-2">[대실]</span></p>
                        <p>입실:<span class="ml-2">14:00</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">402호</span></p>
                        <p>객실:<span class="ml-2">VIP룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                        <p>결제:<span class="ml-2">현금</span></p>
                        <p><span class="bold">45,000</span>원</p>
                      </div>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="point-text1 ml-2">[숙박]</span></p>
                        <p>입실:<span class="ml-2">13:00</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">203호</span></p>
                        <p>객실:<span class="ml-2">스위트룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                        <p>결제:<span class="ml-2">카드</span></p>
                        <p><span class="bold">50,000</span>원</p>
                      </div>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="ml-2">[공실]</span></p>
                        <p>퇴실:<span class="ml-2">15:30</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">501호</span></p>
                        <p>객실:<span class="ml-2">일반룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                      <p><span class="point-text4">전원차단</span> / <span class="point-text3">청소완료</span></p>
                    </div>
                  </div>
                </div>
                <div class="card-item mt-2">
                  <div class="item-area-type">
                      <div class="item-section">
                        <p>유형:<span class="ml-2">[공실]</span></p>
                        <p>퇴실:<span class="ml-2">13:00</span></p>
                      </div>
                      <div class="item-section">
                        <p>호실:<span class="ml-2">403호</span></p>
                        <p>객실:<span class="ml-2">스위트룸</span></p>
                      </div>
                  </div>                  
                  <p class="item-hr"></p>
                  <div class="item-area-type">
                    <div class="item-section">
                      <p><span class="point-text5">청소요청</span> / <span class="point-text2">문닫힘</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //right -->
          </v-row>
        </v-container>
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <!-- //slot -->
    <template v-slot:footer>
      <div style="height: 20px;"></div>
    </template>
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "sales_status",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "객실판매 현황",
      theme: "theme-popup-light",
      size: "size-auto",
      align: "mx-auto",
      pin: "true",
    },
  }),
};
</script>
