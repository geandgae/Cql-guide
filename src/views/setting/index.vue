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
        <SetCharge></SetCharge>
      </div>
      <div class="popup-contents" v-if="setting === '운영규칙 설정'">
        <SetOperation></SetOperation>
      </div>
      <div class="popup-contents" v-if="setting === '입실시간 옵션'">
        <OptionEntrance></OptionEntrance>
      </div>
      <div class="popup-contents" v-if="setting === '무인판매 설정'">
        <SetUnattendedSales></SetUnattendedSales>
      </div>
      <div class="popup-contents" v-if="setting === '예약설정'">
        <SetReservation></SetReservation>
      </div>
      <div class="popup-contents" v-if="setting === '포인트 설정'">
        <SetPoint></SetPoint>
      </div>
      <div class="popup-contents" v-if="setting === '잠금설정'">
        <SetLock></SetLock>
      </div>
      <div class="popup-contents" v-if="setting === '냉/난방 설정'">
        <SetAir></SetAir>
      </div>
      <div class="popup-contents" v-if="setting === '구독관리'">
        <SetSubscribe></SetSubscribe>
      </div>
      <div class="popup-contents" v-if="setting === '화면설정'">
        <SetView></SetView>
      </div>
      <div class="popup-contents" v-if="setting === '음성설정'">
        <SetVoice></SetVoice>
      </div>
      <div class="popup-contents" v-if="setting === '전원설정'">
        <SetPower></SetPower>
      </div>
      <div class="popup-contents" v-if="setting === '알림설정'">
        <SetAlarm></SetAlarm>
      </div>
      <div class="popup-contents" v-if="setting === 'PMS 설정'">
        <SetPms></SetPms>
      </div>
      <div class="popup-contents" v-if="setting === '도어락 설정'">
        <SetDoor></SetDoor>
      </div>
      <div class="popup-contents" v-if="setting === '데이터 관리'">
        <SetData></SetData>
      </div>
      <div class="popup-contents" v-if="setting === '직원관리'">
        <SetEmployee></SetEmployee>
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";
import SetCharge from "./SetCharge.vue";
import SetOperation from "./SetOperation.vue";
import OptionEntrance from "./OptionEntrance.vue";
import SetUnattendedSales from "./SetUnattendedSales.vue";
import SetReservation from "./SetReservation.vue";
import SetPoint from "./SetPoint.vue";
import SetLock from "./SetLock.vue";
import SetAir from "./SetAir.vue";
import SetSubscribe from "./SetSubscribe.vue";
import SetView from "./SetView.vue";
import SetVoice from "./SetVoice.vue";
import SetPower from "./SetPower.vue";
import SetAlarm from "./SetAlarm.vue";
import SetPms from "./SetPms.vue";
import SetDoor from "./SetDoor.vue";
import SetData from "./SetData.vue";
import SetEmployee from "./SetEmployee.vue";

export default {
  name: "settingEnv",
  components: {
    Popup,
    SetCharge,
    SetOperation,
    OptionEntrance,
    SetUnattendedSales,
    SetReservation,
    SetPoint,
    SetLock,
    SetAir,
    SetSubscribe,
    SetView,
    SetVoice,
    SetPower,
    SetAlarm,
    SetPms,
    SetDoor,
    SetData,
    SetEmployee,
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
        "잠금설정",
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
