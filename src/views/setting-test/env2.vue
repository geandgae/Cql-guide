<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- tabs -->
      <v-item-group v-model="setting" class="tabs">
        <div v-for="item in tabsItem" :key="item" :value="item">
          <v-btn
            v-if="item === '구독관리'"
            color="white"
            style="width: 80px; height: 76px !important; position: absolute"
            @click="toggle(item)"
            :class="setting === item ? 'active' : ''"
          >
            {{ item }}
          </v-btn>
          <v-btn v-else color="white" @click="toggle(item)" :class="setting === item ? 'active' : ''">
            {{ item }}
          </v-btn>
        </div>
      </v-item-group>
      <!-- //tabs -->
      <!-- popup-contents -->
      <div class="popup-contents" v-if="setting === '요금설정'">
        <!-- field-set -->
        <fieldset class="field-set">
          <h3 class="field-title mb-2">요금 변경 시 금액 단위 설정</h3>
          <v-table>
            <colgroup>
              <col style="width: 80px" />
              <col />
              <col style="width: 80px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">대실</th>
                <td>
                  <div class="input-counter" style="width: 356px">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-minus</v-icon>
                    </v-btn>
                    <input type="text" value="10,000원" />
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center">숙박</th>
                <td>
                  <div class="input-counter" style="width: 356px">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-minus</v-icon>
                    </v-btn>
                    <input type="text" value="5,000원" />
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->
        <!-- field-set -->
        <fieldset class="field-set">
          <h3 class="field-title mb-2">객실 추가/할인 요금 설정</h3>
          <v-table>
            <colgroup>
              <col style="width: 360px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="color-primary">* 타입별 / 요일별 / 시간별 추가 요금을 설정합니다.</th>
                <td><v-btn color="darkgrey" size="small" class="w-100">설정하기</v-btn></td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->
        <!-- field-set -->
        <fieldset class="field-set">
          <h3 class="field-title mb-2">무인 판매가능 시간 및 요금 설정</h3>
          <v-table>
            <colgroup>
              <col style="width: 360px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="color-primary">* 타입별 / 요일별 / 시간별 판매 가능 시간 및 요금을 설정합니다.</th>
                <td><v-btn color="darkgrey" size="small" class="w-100">설정하기</v-btn></td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->
        <!-- field-set -->
        <fieldset class="field-set">
          <h3 class="field-title mb-2">체크인 기본 요금 타입 설정</h3>
          <div class="field-box">
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="현금" value="현금"></v-radio>
              <v-radio color="secondary" label="카드" value="카드"></v-radio>
            </v-radio-group>
          </div>
        </fieldset>
        <!-- //field-set -->
        <!-- field-set -->
        <fieldset class="field-set">
          <h3 class="field-title mb-2">기타 설정</h3>
          <div class="field-box">
            <v-checkbox hide-details density="compact" color="secondary" label="언박 시 해당 일/시간의 요금 적용함"></v-checkbox>
          </div>
        </fieldset>
        <!-- //field-set -->
      </div>
      <div class="popup-contents" v-if="setting === '운영규칙 설정'">
      <!-- field-set //대기시간설정-->
      <fieldset class="field-set">
          <h3 class="field-title mb-2">대실 시간 설정</h3>
          <v-table>
            <colgroup>
              <col style="width: 80px" />
              <col />
              <col style="width: 80px" />
              <col />
              <col style="width: 80px" />
              <col />
              <col style="width: 80px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">평일오전</th>
                <td>
                  <div class="input-counter" style="width: 128px">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="4시" />
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center">평일오후</th>
                <td>
                  <div class="input-counter" style="width: 128px">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="4시" />
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center">주말오전</th>
                <td>
                  <div class="input-counter" style="width: 128px">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="1시" />
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center">주말오후</th>
                <td>
                  <div class="input-counter" style="width: 128px">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="1시" />
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
      </fieldset>
      <!-- //field-set -->

      <!-- v-container -->
      <v-container
        class="mb-2 mt-2"
        style="padding: 0;margin: 0;"
      >
        <v-row
          align="start"
          no-gutters
          style="padding: 0;margin: 0;"
        >
          <v-col
          style="width: 630px;padding: 0;margin: 0;"
          >
          <!-- field-set //숙박시간설정 -->
          <fieldset class="field-set mt-2">
            <h3 class="field-title mb-2">숙박 시간 설정</h3>
            <v-table
            style="width: 630px;"
            >
              <colgroup>
                <col style="width: 230px" />
                <col style="width: 60px" />
                <col />
                <col style="width: 60px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="입실시간 기준" value="입실시간 기준" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="퇴실시간 기준" value="퇴실시간 기준"></v-radio>
                    </v-radio-group>
                  </td>
                  <th class="text-center">평일</th>
                  <td>
                    <div class="input-counter" style="width: 120px">
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                      </v-btn>
                      <input type="text" value="12시 퇴실" />
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                      </v-btn>
                    </div>
                  </td>
                  <th class="text-center">주말</th>
                  <td>
                    <div class="input-counter" style="width: 120px">
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                      </v-btn>
                      <input type="text" value="13시 퇴실" />
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                      </v-btn>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </fieldset>
          <!-- //field-set -->
          <!-- field-set //손님키 삽입 시 자동입실 처리 -->
          <fieldset class="field-set">
            <h3 class="field-title mb-2">손님키 삽입 시 자동입실 처리</h3>
            <v-table
            style="width: 630px;"
            >
              <colgroup>
                <col style="width: 630px" />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="대실시간만 사용" value="대실시간만 사용" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="숙박시간만 사용" value="숙박시간만 사용" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="대실/숙박 사용" value="대실/숙박 사용" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="사용안함" value="사용안함"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </fieldset>
          <!-- //field-set -->
          <!-- field-set //손님키 제거 시 기본설정 -->
          <fieldset class="field-set mt-2">
            <h3 class="field-title mb-2">손님키 제거 시 기본설정</h3>
            <v-table
            style="width: 630px;"
            >
              <colgroup>
                <col style="width: 80px" />
                <col />
                <col style="width: 80px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th class="text-center">대실</th>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="외출" value="외출" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="퇴실" value="퇴실"></v-radio>
                    </v-radio-group>
                  </td>
                  <th class="text-center">숙박</th>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="외출" value="외출" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="퇴실" value="퇴실"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </fieldset>
          <!-- //field-set -->
          <!-- field-set //사용시간 경과 후 자동퇴실 처리 -->
          <fieldset class="field-set">
            <h3 class="field-title mb-2">사용시간 경과 후 자동퇴실 처리</h3>
            <v-table
            style="width: 630px;"
            >
              <colgroup>
                <col style="width: 630px" />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <div class="field-box2" >
                      <v-checkbox :model-value="true" hide-details density="compact" color="secondary" label="손님키 제거 시 자동 퇴실처리"></v-checkbox>
                      <v-checkbox hide-details density="compact" color="secondary" label="출입문이 열리면 자동 퇴실처리"></v-checkbox>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </fieldset>
          <!-- //field-set -->
          <!-- field-set //인스펙트(객실점검) 사용 설정 -->
          <fieldset class="field-set">
            <h3 class="field-title mb-2">인스펙트(객실점검) 사용 설정</h3>
            <v-table
            style="width: 630px;"
            >
              <colgroup>
                <col style="width: 630px" />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="퇴실 상태만 사용" value="퇴실 상태만 사용" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="항상 사용" value="항상 사용" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="사용안함" value="사용안함" class="mr-2"></v-radio>
                      <p class="text-secondary mt-1 ml-2" style="font-size: 12px;display: inline-block;">(* 인스펙트는 마스터키가 있어야 사용 가능합니다.)</p>
                    </v-radio-group>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </fieldset>
          <!-- //field-set -->
          <!-- field-set //마스터키 제거 시 공실처리 -->
          <fieldset class="field-set">
            <h3 class="field-title mb-2">마스터키 제거 시 공실처리<span>(*퇴실 상태일때)</span></h3>
            <v-table
            style="width: 630px;"
            >
              <colgroup>
                <col style="width: 630px" />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="대실만 사용" value="대실만 사용" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="숙박만 사용" value="숙박만 사용" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="대실/숙박 사용" value="대실/숙박 사용" class="mr-2"></v-radio>
                      <v-radio color="secondary" label="사용안함" value="사용안함" class="mr-2"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </fieldset>
          <!-- //field-set -->
          </v-col>
          <v-col
          style="width: 264px;padding: 0;margin-left: 8px;margin-top:36px;border: 1px solid #d6dbe2;background-color: #fff;"
          >
          <!-- field-set //숙박 시간 설정-->
          <v-card
          class=""
          style="padding: 0 10px;border: 0;background-color: #fff;"
          >
            <!-- field-set-->
            <fieldset class="field-set">
                <h3 class="field-title mb-2 mt-2">숙박 시간 설정</h3>
                <v-table>
                  <colgroup>
                    <col style="width: 90px" />
                    <col />
                    <col style="width: 90px" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>
                        <div class="input-counter" style="width: 90px">
                          <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                            <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                          </v-btn>
                          <input type="text" value="22시" />
                          <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                            <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                          </v-btn>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">~</div>
                      </td>
                      <td>
                        <div class="input-counter" style="width: 90px">
                          <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                            <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                          </v-btn>
                          <input type="text" value="22시" />
                          <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                            <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                          </v-btn>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
            </fieldset>
            <!-- //field-set -->
          </v-card>
          
          
          </v-col>

        </v-row>
      </v-container>
      <!--// v-container -->






      </div>
      <div class="popup-contents" v-if="setting === '입실시간 옵션'">
        <h3 class="sub-title mb-2">입실시간 옵션</h3>
      </div>
      <div class="popup-contents" v-if="setting === '무인판매 설정'">
        <h3 class="sub-title mb-2">무인판매 설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '예약설정'">
        <h3 class="sub-title mb-2">예약설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '포인트 설정'">
        <h3 class="sub-title mb-2">포인트 설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '잠금 설정'">
        <h3 class="sub-title mb-2">잠금 설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '냉/난방 설정'">
        <h3 class="sub-title mb-2">냉/난방 설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '구독관리'">
        <h3 class="sub-title mb-2">구독관리</h3>
      </div>
      <div class="popup-contents" v-if="setting === '화면설정'">
        <h3 class="sub-title mb-2">화면설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '음성설정'">
        <h3 class="sub-title mb-2">음성설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '전원설정'">
        <h3 class="sub-title mb-2">전원설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '알림설정'">
        <h3 class="sub-title mb-2">알림설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === 'PMS 설정'">
        <h3 class="sub-title mb-2">PMS 설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '도어락 설정'">
        <h3 class="sub-title mb-2">도어락 설정</h3>
      </div>
      <div class="popup-contents" v-if="setting === '데이터 관리'">
        <h3 class="sub-title mb-2">데이터 관리</h3>
      </div>
      <div class="popup-contents" v-if="setting === '직원관리'">
        <h3 class="sub-title mb-2">직원관리</h3>
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "settingEnv",
  components: {
    Popup,
  },
  data() {
    return {
      popup: {
        title: "환경설정",
        theme: "theme-popup-dark",
        size: "size-md",
        align: "mx-auto",
      },
      setting: "요금설정",
      tabsItem: [
        "요금설정",
        "운영규칙 설정",
        "입실시간 옵션",
        "무인판매 설정",
        "예약설정",
        "포인트 설정",
        "잠금 설정",
        "냉/난방 설정",
        "구독관리",
        "화면설정",
        "음성설정",
        "전원설정",
        "알림설정",
        "PMS 설정",
        "도어락 설정",
        "데이터 관리",
        "직원관리",
      ],
    };
  },
  methods: {
    toggle(val) {
      this.setting = val;
    },
  },
};
</script>

<style lang="scss">

.field-set {
  .field-title {
    span{
      color: #fc6060;
      font-weight: 400;
      margin-left: 10px;
    }
  }
  .field-box2 {
    background-color: #fff;
    display: flex;
    height: 40px;
  }
}


</style>
