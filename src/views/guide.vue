<template>
  <!-- v-container -->
  <v-container fluid class="pa-10">
    <h1 class="mb-10">guide</h1>

    <v-tabs v-model="tab" color="primary" align-tabs="start" style="border-bottom: 1px solid #ddd">
      <v-tab v-for="item in ['buttons', 'popup', 'form', 'font', 'color', 'icon']" :key="item" :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <!-- buttons -->
    <div v-if="tab === 'buttons'" class="py-10">
      <h2 class="mb-2">icon btn</h2>
      <div class="d-flex align-center mt-2" style="gap: 12px">
        <v-btn color="darkgrey" prepend-icon="mdi-check-circle" append-icon="mdi-account-circle">
          <template v-slot:prepend>
            <v-icon color="white"></v-icon>
          </template>
          text
          <template v-slot:append>
            <v-icon color="white"></v-icon>
          </template>
        </v-btn>

        <v-btn append-icon="mdi-trash-can-outline" size="small" style="width: 160px" class="custom-btn-icon">
          VIP 룸
          <template v-slot:append>
            <v-icon color="white"></v-icon>
          </template>
        </v-btn>

        <v-btn color="secondary" append-icon="mdi-plus" size="small" style="width: 160px" class="custom-btn-icon">
          객실추가
          <template v-slot:append>
            <v-icon color="white"></v-icon>
          </template>
        </v-btn>

        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
          <v-icon size="x-small" color="white">mdi-plus</v-icon>
        </v-btn>
        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
          <v-icon size="x-small" color="white">mdi-minus</v-icon>
        </v-btn>
        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
          <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
        </v-btn>
        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
          <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
        </v-btn>
        <v-btn color="darkgrey" size="small" rounded="xl" class="pa-0">
          <v-icon color="white">mdi-close-thick</v-icon>
        </v-btn>
        <v-btn color="darkgrey" size="small" rounded="xl" class="pa-0">
          <v-icon color="white">mdi-pin</v-icon>
        </v-btn>

        <v-btn color="grey" size="small" style="min-width: 80px">취소</v-btn>

        <v-btn variant="outlined" color="secondary" prepend-icon="mdi-plus" size="small" style="min-width: 80px">
          <template v-slot:prepend>
            <v-icon></v-icon>
          </template>
          구독추가
        </v-btn>
      </div>
      <h2 class="mt-10">primary</h2>
      <div class="d-flex align-center mt-2" style="gap: 12px">
        <v-btn color="primary" size="x-small" style="min-width: 150px">x-small 20</v-btn>
        <v-btn color="primary" size="small" style="min-width: 150px">small 28</v-btn>
        <v-btn color="primary" style="min-width: 150px">regular 36</v-btn>
        <v-btn color="primary" size="large" style="min-width: 150px">large 40</v-btn>
        <v-btn color="primary" size="x-large" style="min-width: 150px">x-large 60</v-btn>
      </div>
      <h2 class="mt-10">secondary</h2>
      <div class="d-flex align-center mt-2" style="gap: 12px">
        <v-btn color="secondary" size="x-small" style="min-width: 150px">x-small</v-btn>
        <v-btn color="secondary" size="small" style="min-width: 150px">small</v-btn>
        <v-btn color="secondary" style="min-width: 150px">regular</v-btn>
        <v-btn color="secondary" size="large" style="min-width: 150px">large</v-btn>
        <v-btn color="secondary" size="x-large" style="min-width: 150px">x-large</v-btn>
      </div>
    </div>

    <!-- popup -->
    <div v-if="tab === 'popup'" class="py-10">
      <h2>popup</h2>

      <v-btn color="primary" class="my-10" @click="dialog = true">open popup</v-btn>
      <!-- popup -->
      <v-dialog v-model="dialog" width="auto">
        <div class="popup size-md">
          <v-card>
            <v-card-title class="d-flex align-center">
              <span class="chip-bi">BI</span>
              <h2 class="title mx-auto">환경설정</h2>
              <div class="btns d-flex align-center">
                <v-btn color="white" size="small" rounded="xl" class="pa-0" @click="dialog = false">
                  <v-icon size="large" color="darkgrey">mdi-close-thick</v-icon>
                </v-btn>
              </div>
            </v-card-title>
            <v-card-text>popup-content</v-card-text>
            <div class="popup-footer">
              <div class="btns">
                <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
                <v-btn color="primary" size="large" style="min-width: 150px">저장</v-btn>
              </div>
            </div>
          </v-card>
        </div>
      </v-dialog>
      <!-- //popup -->

      <!-- popup -->
      <div class="popup size-md">
        <v-card>
          <!-- top -->
          <v-card-title class="d-flex align-center">
            <span class="chip-bi">BI</span>
            <h2 class="title mx-auto">환경설정</h2>
            <div class="btns d-flex align-center">
              <v-btn color="white" size="small" rounded="xl" class="pa-0 mr-2">
                <v-icon size="large" color="darkgrey">mdi-pin</v-icon>
              </v-btn>
              <v-btn color="white" size="small" rounded="xl" class="pa-0">
                <v-icon size="large" color="darkgrey">mdi-close-thick</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <!-- //top -->
          <!-- body -->
          <v-card-text class="pa-0">
            <!-- tabs -->
            <!-- <ul class="tabs">
              <li v-for="item in tabsItem" :key="item" :value="item">
                <v-btn v-if="item === '구독관리'" color="white" style="width: 80px; height: 76px !important; position: absolute" @click="test">
                  {{ item }}
                </v-btn>
                <v-btn v-else color="white" @click="test">
                  {{ item }}
                </v-btn>
              </li>
            </ul> -->
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
            <!-- tab-apanel -->
            <div class="tab-apanel" v-if="setting === '요금설정'">
              <h2>요금설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '운영규칙 설정'">
              <h2>운영규칙 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '입실시간 옵션'">
              <h2>입실시간 옵션</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '무인판매 설정'">
              <h2>무인판매 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '예약설정'">
              <h2>예약설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '포인트 설정'">
              <h2>포인트 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '잠금 설정'">
              <h2>잠금 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '냉/난방 설정'">
              <h2>냉/난방 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '구독관리'">
              <h2>구독관리</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '화면설정'">
              <h2>화면설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '음성설정'">
              <h2>음성설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '전원설정'">
              <h2>전원설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '알림설정'">
              <h2>알림설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === 'PMS 설정'">
              <h2>PMS 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '도어락 설정'">
              <h2>도어락 설정</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '데이터 관리'">
              <h2>데이터 관리</h2>
            </div>
            <div class="tab-apanel" v-if="setting === '직원관리'">
              <h2>직원관리</h2>
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
    </div>

    <!-- form -->
    <div v-if="tab === 'form'" class="py-10">
      <h2>form</h2>
    </div>

    <!-- font -->
    <div v-if="tab === 'font'" class="py-10">
      <h2>font</h2>
    </div>

    <!-- color -->
    <div v-if="tab === 'color'" class="py-10">
      <h2>color</h2>
    </div>

    <!-- icon -->
    <div v-if="tab === 'icon'" class="py-10">
      <h2>icon</h2>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "guideList",
  data() {
    return {
      tab: "popup",
      setting: "요금설정",
      dialog: false,
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

<style lang="scss"></style>
