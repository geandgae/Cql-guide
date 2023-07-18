<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">고객 설정 최소/최대 온도</h3>
    <div class="field-box">
      <v-radio-group hide-details density="compact" inline>
        <v-radio color="secondary" label="사용" value="사용"></v-radio>
        <v-radio color="secondary" label="사용 안함" value="사용 안함"></v-radio>
      </v-radio-group>
      <div class="ml-3 color-primary" style="font-size: 12px !important">(※0분 이면 계속 표시)</div>
    </div>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">객실 이력 표시 설정</h3>
    <div class="field-box">
      <v-checkbox hide-details density="compact" color="secondary" label="손님키 삽입"></v-checkbox>
      <v-checkbox hide-details density="compact" color="secondary" label="손님키 제거"></v-checkbox>
      <v-checkbox hide-details density="compact" color="secondary" label="청소키 삽입"></v-checkbox>
      <v-checkbox hide-details density="compact" color="secondary" label="청소키 제거"></v-checkbox>
      <v-checkbox hide-details density="compact" color="secondary" label="마스터키 삽입"></v-checkbox>
      <v-checkbox hide-details density="compact" color="secondary" label="마스터키 제거"></v-checkbox>
    </div>
  </fieldset>

  <div class="d-flex align-center" style="gap: 10px;">
    <fieldset class="field-set mt-4">
      <h3 class="field-title mb-2">도어 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 닫힘"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 열림"></v-checkbox>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <h3 class="field-title mb-2">도어 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 닫힘"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 열림"></v-checkbox>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <h3 class="field-title mb-2">도어 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 닫힘"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 열림"></v-checkbox>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <h3 class="field-title mb-2">도어 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 닫힘"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 열림"></v-checkbox>
      </div>
    </fieldset>
  </div>
  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetVoice",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
