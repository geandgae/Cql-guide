<template>
  <!-- popup -->
  <div class="popup size-md">
    <v-card>
      <!-- top -->
      <v-card-title class="d-flex align-center">
        <span class="chip-bi">BI</span>
        <h2 class="title mx-auto">환경설정</h2>
        <div class="btns d-flex align-center">
          <v-btn color="white" size="small" rounded="xl" class="pa-0">
            <v-icon size="large" color="darkgrey">mdi-close-thick</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <!-- //top -->
      <!-- body -->
      <v-card-text class="pa-0">
        <!-- tabs -->
        <!-- tab Test -->
        <!-- 탭 버튼 -->
        <v-item-group v-model="onboarding" class="tabs" mandatory>
          <!-- <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ toggle }" :value="n"> -->
            <!-- <v-btn :variant="isSelected ? 'outlined' : 'text'" icon="mdi-record" @click="toggle"></v-btn> -->

            <v-item v-for="(item, index) in tabsItem" :key="index" v-slot="{ toggle }" :value="item">
            <v-btn
              v-if="index === 0"
              color="white"
              style="width: 80px; height: 76px !important; position: absolute"
              @click="toggle(index)"
              :class="setting === item ? 'active' : ''"
            >
              {{ item }}
            </v-btn>
            <v-btn v-else color="white" @click="toggle(item)" :class="setting === item ? 'active' : ''">
              {{ item }}
            </v-btn>
            </v-item>
          <!-- </v-item> -->
        </v-item-group>

        <!-- /탭 버튼 -->

        <!-- 탭 내용 -->
        <v-window v-model="onboarding">
          <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
            <v-card height="200" class="d-flex justify-center align-center">
              <span class="text-h2"> Card {{ n }} </span>
            </v-card>
          </v-window-item>
        </v-window>
        <!-- /탭 내용 -->
        <!-- tab Test -->

        <v-item-group v-model="onboarding" class="tabs">
          <div v-for="(item) in tabsItem" :key="item" :value="item">
            <v-btn
              v-if="onboarding === '구독관리'"
              color="white"
              style="width: 80px; height: 76px !important; position: absolute"
              @click="toggle(item)"
              :class="onboarding === 0 ? 'active' : ''"
            >
              {{ item }}
            </v-btn>
            <v-btn v-else color="white" @click="toggle(item)" :class="setting === item ? 'active' : ''">
              {{ item }}
            </v-btn>
          </div>
        </v-item-group>
        <!-- //tabs -->
        <!-- tab-apanel -->
        <div class="tab-apanel" v-if="setting === '요금설정'">
          <h3 class="sub-title mb-2">요금 변경 시 금액 단위 설정</h3>
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
          <h3 class="sub-title my-2">객실 추가/할인 요금 설정</h3>
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
          <h3 class="sub-title my-2">무인 판매가능 시간 및 요금 설정</h3>
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
          <h3 class="sub-title my-2">체크인 기본 요금 타입 설정</h3>
          <v-table>
            <colgroup>
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="현금" value="현금"></v-radio>
                    <v-radio color="secondary" label="카드" value="카드" class="ml-4"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
            </tbody>
          </v-table>
          <h3 class="sub-title my-2">기타 설정</h3>
          <v-table>
            <colgroup>
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <v-checkbox hide-details density="compact" color="secondary" label="언박 시 해당 일/시간의 요금 적용함"></v-checkbox>
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
        <div class="tab-apanel" v-if="setting === '운영규칙 설정'">
          <h3 class="sub-title mb-2">운영규칙 설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '입실시간 옵션'">
          <h3 class="sub-title mb-2">입실시간 옵션</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '무인판매 설정'">
          <h3 class="sub-title mb-2">무인판매 설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '예약설정'">
          <h3 class="sub-title mb-2">예약설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '포인트 설정'">
          <h3 class="sub-title mb-2">포인트 설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '잠금 설정'">
          <h3 class="sub-title mb-2">잠금 설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '냉/난방 설정'">
          <h3 class="sub-title mb-2">냉/난방 설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '구독관리'">
          <h3 class="sub-title mb-2">구독관리</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '화면설정'">
          <h3 class="sub-title mb-2">화면설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '음성설정'">
          <h3 class="sub-title mb-2">음성설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '전원설정'">
          <h3 class="sub-title mb-2">전원설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '알림설정'">
          <h3 class="sub-title mb-2">알림설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === 'PMS 설정'">
          <h3 class="sub-title mb-2">PMS 설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '도어락 설정'">
          <h3 class="sub-title mb-2">도어락 설정</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '데이터 관리'">
          <h3 class="sub-title mb-2">데이터 관리</h3>
        </div>
        <div class="tab-apanel" v-if="setting === '직원관리'">
          <h3 class="sub-title mb-2">직원관리</h3>
        </div>
        <!-- //tab-apanel -->
      </v-card-text>
      <!-- //body -->
      <!-- footer -->
      <div class="popup-footer">
        <div class="btns">
          <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
          <v-btn color="primary" size="large" style="min-width: 150px">저장</v-btn>
        </div>
      </div>
      <!-- //footer -->
    </v-card>
  </div>
  <!-- //popup -->
</template>

<script>
export default {
  name: "settingEnv",
  data() {
    return {
      length: 17,
      onboarding: 0,

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
    next() {
      this.onboarding = this.onboarding + 1 > this.length ? 1 : this.onboarding + 1;
    },
    prev() {
      this.onboarding = this.onboarding - 1 <= 0 ? this.length : this.onboarding - 1;
    },

    toggle(val) {
      this.setting = val;
    },
  },
};
</script>

<style lang="scss"></style>
