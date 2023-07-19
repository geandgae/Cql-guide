<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">처리 확인 알림 팝업</h3>
    <div class="field-box">
      <v-radio-group hide-details density="compact" inline>
        <v-radio color="secondary" label="사용" value="사용"></v-radio>
        <v-radio class="ml-2" color="secondary" label="사용 안함 (스피드 체크인)" value="사용 안함 (스피드 체크인)"></v-radio>
      </v-radio-group>
    </div>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">화면 툴팁 도움말</h3>
    <div class="field-box">
      <v-radio-group hide-details density="compact" inline>
        <v-radio color="secondary" label="보기" value="보기"></v-radio>
        <v-radio class="ml-2" color="secondary" label="주요정보만 보기" value="주요정보만 보기"></v-radio>
        <v-radio class="ml-2" color="secondary" label="숨기기" value="숨기기"></v-radio>
      </v-radio-group>
    </div>
  </fieldset>

  <div class="d-flex align-center" style="gap: 10px">
    <fieldset class="field-set mt-4">
      <h3 class="field-title mb-2">차량호출 기능</h3>
      <div class="field-box">
        <v-radio-group hide-details density="compact" inline>
          <v-radio color="secondary" label="사용" value="사용"></v-radio>
          <v-radio class="ml-2" color="secondary" label="사용 안함" value="사용 안함"></v-radio>
        </v-radio-group>
      </div>
    </fieldset>
    <fieldset class="field-set mt-4">
      <h3 class="field-title mb-2">비상호출 기능</h3>
      <div class="field-box">
        <v-radio-group hide-details density="compact" inline>
          <v-radio color="secondary" label="사용" value="사용"></v-radio>
          <v-radio class="ml-2" color="secondary" label="사용 안함" value="사용 안함"></v-radio>
        </v-radio-group>
      </div>
    </fieldset>
    <fieldset class="field-set mt-4">
      <h3 class="field-title mb-2">입실 취소 사유 입력 팝업</h3>
      <div class="field-box">
        <v-radio-group hide-details density="compact" inline>
          <v-radio color="secondary" label="사용" value="사용"></v-radio>
          <v-radio class="ml-2" color="secondary" label="사용 안함" value="사용 안함"></v-radio>
        </v-radio-group>
      </div>
    </fieldset>
  </div>

  <fieldset class="field-set mt-4">
    <h3 class="field-title mb-2">재 호출 지연 시간</h3>
    <div class="field-box">
      <div class="d-flex align-center">
        <div class="input-counter" style="width: 120px">
          <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
            <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
          </v-btn>
          <input type="text" value="0분" />
          <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
            <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
          </v-btn>
        </div>
        <div class="field-content ml-2 color-secondary">※ 차량/비상호출 후 재 호출 시에 설정한 시간내에는 알림이 보이지 않습니다.</div>
      </div>
    </div>
  </fieldset>

  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetAlarm",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
