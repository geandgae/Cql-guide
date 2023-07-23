<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">QR코드 키 발급</h3>
    <div class="field-box d-flex align-center" style="gap: 8px;">
      <v-btn color="lightblue" size="small" style="width: 64px;">숙박</v-btn>
      <v-btn color="violet" size="small" style="width: 64px;">대실</v-btn>
      <v-btn color="navy" size="small" style="width: 64px;">장기</v-btn>
      <v-btn color="grey" size="small" style="width: 64px;">공실</v-btn>
      <v-btn color="yellow" size="small"  style="color: white !important; width: 64px;">외출</v-btn>
      <v-btn color="darkgrey" size="small" style="width: 100px;">기본값 복원</v-btn>
    </div>
  </fieldset>

  <fieldset class="field-set d-flex w-100" style="gap: 8px">
    <div class="field-inner">
      <h3 class="field-title mb-2">도어 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 닫힘"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="객실문 열림"></v-checkbox>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">청소 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="청소요청"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="청소완료"></v-checkbox>
      </div>
    </div>
  </fieldset>
  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetView",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
