<template>
  <!-- popup -->
  <Popup :popup="popup" style="width: 1000px;min-height: 630px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <v-table class="mb-3">
              <colgroup>
                <col style="width: 90px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th><span>예약</span></th>
                  <td>
                    <div class="d-flex" style="align-items: center;">
                      <v-select 
                        :items="['타입1', '타입2', '타입3']" 
                        value="[스위트룸] 예약없음" 
                        density="compact" 
                        class="mr-2" 
                        hide-details
                      ></v-select>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>  
        <!-- field-set -->
        <fieldset class="field-set">
          <h3 class="title-sub pt-1 mb-2">예약 정보입력</h3>
          <div class="d-flex justify-space-between">
            <v-table style="width: 474px;">
              <colgroup>
                <col style="width: 90px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th><span>숙박형태</span></th>
                  <td>
                    <span>305호 (스위트룸)</span>
                  </td>
                </tr>
                <tr>
                  <th><span>예약방법</span></th>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="야놀자" value="야놀자"></v-radio>
                      <v-radio color="secondary" label="여기어때" value="여기어때" class="ml-2"></v-radio>
                      <v-radio color="secondary" label="네이버" value="네이버" class="ml-2"></v-radio>
                      <v-radio color="secondary" label="기타" value="기타" class="ml-2"></v-radio>
                      <v-radio color="secondary" label="직접입력" value="직접입력" class="ml-2"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <th><span>예약방법</span></th>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="VIP룸" value="VIP룸"></v-radio>
                      <v-radio color="secondary" label="스위트룸" value="스위트룸" class="ml-2"></v-radio>
                      <v-radio color="secondary" label="일반룸" value="일반룸" class="ml-2"></v-radio>
                      <v-radio color="secondary" label="특실" value="특실" class="ml-2"></v-radio>
                      <v-radio color="secondary" label="기타" value="기타" class="ml-2"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <th><span>입실예정일</span></th>
                  <td>
                    <div class="d-flex align-center">
                      <VueDatePicker v-model="date" style="width:175px;border-radius: 0;" class="table-daypicker"></VueDatePicker>
                      <div class="input-counter ml-2" style="width: 88px;">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="12시"/>
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                      <div class="input-counter ml-2" style="width: 88px;">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="12시" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><span>휴대폰번호</span></th>
                  <td>
                    <input type="text" class="input" placeholder="010-1234-5678" />
                  </td>
                </tr>
                <tr>
                  <th><span>고객명</span></th>
                  <td>
                    <input type="text" class="input" placeholder="홍길동" />
                  </td>
                </tr>
                <tr>
                  <th><span>판매가</span></th>
                  <td>
                    <input type="text" class="input" value="80,000원" style="text-align: right;"/>
                  </td>
                </tr>
                <tr>
                  <th><span>OTA결제</span></th>
                  <td>
                    <div class="d-flex align-center">
                      <div class="input-counter" style="width: 128px;">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="70,000원" style="text-align: right;"/>
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                      <div class="room-btn-area">
                        <v-btn color="darkgrey ml-2" append-icon="mdi-plus" style="max-width: 48px;height: 28px;">
                          잔액
                          <template v-slot:append>
                            <v-icon color="white"></v-icon>
                          </template>
                        </v-btn>
                        <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                          1.0
                          <template v-slot:prepend>
                            <v-icon size="small" color="pa-0 ma-0"></v-icon>
                          </template>
                        </v-btn>
                        <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                          5.0
                          <template v-slot:prepend>
                            <v-icon size="small" color="pa-0 ma-0"></v-icon>
                          </template>
                        </v-btn>
                        <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                          10
                          <template v-slot:prepend>
                            <v-icon size="small" color="pa-0 ma-0"></v-icon>
                          </template>
                        </v-btn>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><span>결제잔금</span></th>
                  <td>
                    <input type="text" class="input" value="0원" style="text-align: right;"/>
                  </td>
                </tr>

              </tbody>
            </v-table>
            <v-table style="width: 474px;">
              <colgroup>
                <col style="width: 90px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th><span>예약상태</span></th>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="정상" value="정상"></v-radio>
                      <v-radio color="secondary" label="취소" value="취소" class="ml-4"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <th><span>예약일</span></th>
                  <td>
                    <input type="text" class="input" value="2022년 / 12월 24일 / 17:04"/>
                  </td>
                </tr>
                <tr>
                  <th><span>객실배정</span></th>
                  <td>
                    <div class="d-flex" style="align-items: center;">
                      <v-select 
                        :items="['객실미배정', '객실배정', '객실대기']" 
                        value="객실미배정" 
                        density="compact" 
                        class="mr-2" 
                        hide-details
                        style="width:250px !important;">
                      </v-select>
                      <v-checkbox hide-details density="compact" color="secondary" label="자동배정설정" class="ml-1"></v-checkbox>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><span>퇴실예정일</span></th>
                  <td>
                    <div class="d-flex align-center">
                      <VueDatePicker v-model="date" style="width:175px;border-radius: 0;" class="table-daypicker"></VueDatePicker>
                      <div class="input-counter ml-2" style="width: 88px;">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="12시"/>
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                      <div class="input-counter ml-2" style="width: 88px;">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="12시" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><span>예약번호</span></th>
                  <td>
                    <div class="d-flex align-center">
                      <input type="text" class="input" placeholder="예약번호입력" style="width:260px;" />
                      <v-btn color="secondary" size="small"  variant="outlined" class="ml-2" style="max-width:100px">
                         자동번호생성
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><span>방문형태</span></th>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="도보방문" value="도보방문"></v-radio>
                      <v-radio color="secondary" label="차량방문" value="차량방문" class="ml-2"></v-radio>
                      <v-radio color="secondary" label="대중교통이용" value="대중교통이용" class="ml-2"></v-radio>
                      <v-radio color="secondary" label="기타" value="기타" class="ml-2"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <th><span>예약가</span></th>
                  <td>
                    <div class="d-flex align-center">
                      <div class="input-counter" style="width: 128px;">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="70,000원" style="text-align: right;"/>
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                      <div class="room-btn-area">
                        <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                          1.0
                          <template v-slot:prepend>
                            <v-icon size="small" color="pa-0 ma-0"></v-icon>
                          </template>
                        </v-btn>
                        <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                          5.0
                          <template v-slot:prepend>
                            <v-icon size="small" color="pa-0 ma-0"></v-icon>
                          </template>
                        </v-btn>
                        <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                          10
                          <template v-slot:prepend>
                            <v-icon size="small" color="pa-0 ma-0"></v-icon>
                          </template>
                        </v-btn>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th><span>고객메모</span></th>
                  <td>
                    <div class="d-flex align-center">
                      <textarea class="input"
                        style="width:100%;height:72px;resize: none;margin:4px 0"
                      >
                      </textarea>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>            
          </div>
        </fieldset>
        <!-- //field-set -->
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <template v-slot:footer>
      <div class="btns">
        <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
        <v-btn color="primary" size="large" style="min-width: 150px">예약등록</v-btn>
      </div>
    </template>
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: "	room_reservation",
  components: {
    Popup, VueDatePicker
  },
  data: () => ({
    popup: {
      title: "305호 [스위트룸] 입실처리",
      theme: "theme-popup-dark",
      size: "size-lg",
      align: "mx-auto",
      pin: true,
    },
    date: null,
  }),
};
</script>
