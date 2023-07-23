<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- tab -->
        <div class="btn-toggels">
          <v-btn
            :class="{active : toggle === 0}" 
            rounded="0" 
            size="large" 
            @click="btnTog(0)"
          >
            <v-icon class="mr-1">
              mdi-calendar-text
            </v-icon>
            객실예약 목록
          </v-btn>
          <v-btn
            :class="{active : toggle === 1}" 
            rounded="0" 
            size="large" 
            @click="btnTog(1)"
          >
            <v-icon class="mr-1">mdi-gesture-tap-button</v-icon>
            객실예약 등록
          </v-btn>
        </div>

        <!-- panels -->
        <div v-if="toggle === 0" class="mt-4">
          <!-- field-set -->
          <fieldset class="field-set">
            <h3 class="title-sub mb-2">객실예약 목록</h3>
            <div class="field-box">
              <div class="field">
                <v-radio-group hide-details density="compact" inline>
                  <v-radio color="secondary" label="어제" value="어제"></v-radio>
                  <v-radio color="secondary" label="오늘" value="오늘" class="ml-4"></v-radio>
                  <v-radio color="secondary" label="이번주" value="이번주" class="ml-4"></v-radio>
                  <v-radio color="secondary" label="이번달" value="이번달" class="ml-4"></v-radio>
                </v-radio-group>
                <div class="like-th mx-4" style="width: 120px;">날짜 및 타입선택</div>
                <div class="d-flex align-center" style="gap:8px;">
                  <VueDatePicker v-model="dates" class="date-custom" style="width:140px;"></VueDatePicker>
                  <VueDatePicker v-model="datee" class="date-custom" style="width:140px;"></VueDatePicker>
                  <v-select :items="['전체예약', '정상예약', '취소예약', '사용완료']" value="전체예약" density="compact" class="custom-select" hide-details style="width: 120px !important;">
                  </v-select>
                  <v-select :items="['일반룸', 'VIP룸', '스위트룸']" value="일반룸" density="compact" class="custom-select" hide-details style="width: 120px !important;">
                  </v-select>
                  <div class="input-search" style="width:200px">
                    <input type="text" />
                    <v-btn density="compact" size="small" icon="mdi-magnify"></v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- table -->
            <v-table fixed-header height="447" class="overflow-y-auto text-center dense-dark mt-4">
              <thead>
                <tr>
                  <th>OTA</th>
                  <th>예약번호</th>
                  <th>타입</th>
                  <th>상태</th>
                  <th>입실일시</th>
                  <th>퇴실일시</th>
                  <th>휴대폰번호</th>
                  <th>객실타입</th>
                  <th>배정객실</th>
                  <th>고객명</th>
                  <th>판매가</th>
                  <th>예약가</th>
                  <th>접수일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>여기어때</td>
                  <td>0000-0000</td>
                  <td><span class="color-primary">숙박</span></td>
                  <td>정상예약</td>
                  <td>0000-00-00 00:00</td>
                  <td>0000-00-00 00:00</td>
                  <td>000-0000-0000</td>
                  <td>일반실</td>
                  <td><span class="color-primary">배정</span></td>
                  <td>홍길동</td>
                  <td>50,000원</td>
                  <td><span class="color-primary">65,000원</span></td>
                  <td>0000-00-00 00:00</td>
                </tr>
                <tr>
                  <td>여기어때</td>
                  <td>0000-0000</td>
                  <td><span class="color-green">대실</span></td>
                  <td>정상예약</td>
                  <td>0000-00-00 00:00</td>
                  <td>0000-00-00 00:00</td>
                  <td>000-0000-0000</td>
                  <td><span class="color-secondary">미배정</span></td>
                  <td><span class="color-secondary">미배정</span></td>
                  <td>홍길동</td>
                  <td>50,000원</td>
                  <td><span class="color-primary">65,000원</span></td>
                  <td>0000-00-00 00:00</td>
                </tr>
              </tbody>
            </v-table>
            <!-- //table -->
          </fieldset>
        </div>
        <div v-if="toggle === 1" class="mt-4">
          <!-- field-set -->
          <fieldset class="field-set">
            <h3 class="title-sub mb-2">예약정보 입력</h3>
            <v-table class="not-overflow">
              <colgroup>
                <col style="width: 120px" />
                <col />
                <col style="width: 120px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th class="text-center">숙박형태</th>
                  <td>
                    <v-select 
                      :items="['숙박', '대실']"
                       value="숙박" 
                       density="compact" 
                       class="custom-select" hide-details style="width: 530px !important;"
                    >
                    </v-select>
                  </td>
                  <th class="text-center">예약상태</th>
                  <td>
                    <v-select 
                      :items="['정상예약']"
                       value="정상예약" 
                       density="compact" 
                       class="custom-select" hide-details style="width: 530px !important;"
                    >
                    </v-select>
                  </td>
                </tr>
                <tr>
                  <th class="text-center">예약방법</th>
                  <td>
                    <v-select 
                      :items="['야놀자', '여기어때', '네이버', '에어비엔비', '호텔나우', '기타', '직접입력']"
                       value="야놀자" 
                       density="compact" 
                       class="custom-select" hide-details style="width: 530px !important;"
                    >
                    </v-select>
                  </td>
                  <th class="text-center">예약일</th>
                  <td>
                    <input type="text" class="input" value="2022-12-24 13:18" />
                  </td>
                </tr>
                <tr>
                  <th class="text-center">객실타입</th>
                  <td>
                    <v-select 
                      :items="['일반룸', 'VIP룸', '스위트룸']"
                       value="일반룸" 
                       density="compact" 
                       class="custom-select" hide-details style="width: 530px !important;"
                    >
                    </v-select>
                  </td>
                  <th class="text-center">객실배정</th>
                  <td>
                    <div class="d-flex align-center" style="gap:8px;">
                      <v-select 
                        :items="['일반룸', 'VIP룸', '스위트룸']"
                         value="일반룸" 
                         density="compact" 
                         class="custom-select" hide-details style="width: 420px !important;"
                      >
                      </v-select>
                      <v-checkbox hide-details density="compact" color="secondary" label="자동배정"></v-checkbox>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center">입실 예정일</th>
                  <td>
                    <div class="d-flex align-center" style="gap:8px;">
                      <VueDatePicker v-model="dates" class="date-custom" style="width:200px;"></VueDatePicker>
                      <div class="input-counter" style="width: 120px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="14시" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                      <div class="input-counter" style="width: 120px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="14분" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </td>
                  <th class="text-center">퇴실 예정일</th>
                  <td>
                    <div class="d-flex align-center" style="gap:8px;">
                      <VueDatePicker v-model="dates" class="date-custom" style="width:200px;"></VueDatePicker>
                      <div class="input-counter" style="width: 120px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="14시" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                      <div class="input-counter" style="width: 120px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="14분" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center">휴대폰 번호</th>
                  <td>
                    <input type="text" class="input" />
                  </td>
                  <th class="text-center">예약번호</th>
                  <td>
                    <div class="d-flex align-center" style="gap:8px;">
                      <input type="text" class="input" />
                      <v-btn color="secondary" size="small" style="min-width: 100px">번호 자동 생성</v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center">고객명</th>
                  <td>
                    <input type="text" class="input" />
                  </td>
                  <th class="text-center">방문형태</th>
                  <td>
                    <div class="d-flex align-center" style="gap:8px;">
                      <v-select 
                        :items="['도보방문', '차량방문', '대중교통']"
                         value="도보방문" 
                         density="compact" 
                         class="custom-select" hide-details style="width: 420px !important;"
                      >
                      </v-select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center">판매가</th>
                  <td>
                    <input type="text" class="input" />
                  </td>
                  <th class="text-center">예약가</th>
                  <td>
                    <div class="d-flex align-center" style="gap:8px;">
                      <div class="input-counter" style="width: 350px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="0원" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                      <v-btn color="grey" size="small" style="min-width: 40px">+ 1.0</v-btn>
                      <v-btn color="grey" size="small" style="min-width: 40px">+ 5.0</v-btn>
                      <v-btn color="grey" size="small" style="min-width: 40px">+ 10</v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center">OTA 결제</th>
                  <td>
                    <div class="d-flex align-center" style="gap:8px;">
                      <div class="input-counter" style="width: 350px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="0원" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                      <v-btn color="grey" size="small" style="min-width: 40px">+ 1.0</v-btn>
                      <v-btn color="grey" size="small" style="min-width: 40px">+ 5.0</v-btn>
                      <v-btn color="grey" size="small" style="min-width: 40px">+ 10</v-btn>
                    </div>
                  </td>
                  <th class="text-center">결제잔금</th>
                  <td>
                    <input type="text" class="input" />
                  </td>
                </tr>
                <tr>
                  <th class="text-center">고객메모</th>
                  <td colspan="3">
                    <textarea class="textarea" placeholder="고객 메모가 없습니다." style="height: 200px; margin: 6px 0;"></textarea>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </fieldset>
        </div>
        
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <!-- //slot -->
    <template v-slot:footer>
      <template v-if="toggle === 0">
        <div class="btns">
          <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
        </div>
      </template>
      <template v-if="toggle === 1">
        <div class="btns">
          <v-btn color="primary" size="large" style="min-width: 150px">예약등록</v-btn>
          <v-btn color="darkgrey" size="large" style="min-width: 150px">예약목록</v-btn>
        </div>
      </template>
    </template>
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: "RoomManagement",
  components: {
    Popup,
    VueDatePicker,
  },
  data: () => ({
    toggle: 0,
    dates: null,
    datee: null,
    popup: {
      title: "예약관리",
      theme: "theme-popup-dark",
      size: "size-xlg",
      align: "mx-auto",
    },
  }),
  methods: {
    btnTog (val) {
      this.toggle = val;
    }
  },
};
</script>
