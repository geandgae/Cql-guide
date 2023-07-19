<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">처리 확인 알림 팝업</h3>
    <div class="field-box">
      <input type="text" class="input" />
    </div>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">처리 확인 알림 팝업</h3>
    <div class="field-box">
      <input type="text" class="input" style="width: 550px;" />
      <div class="field-content ml-2">PMS 업체에서 발급한 연동 ID (없으면 업체명을 입력하세요)</div>
    </div>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">PMS 소켓 연동 인증 KEY (Micronic)</h3>
    <div class="field-box" style=" height: 100px;">
      <input type="text" class="input" style="height: 80px;" />
    </div>
  </fieldset>

  <fieldset class="field-set">
    <div class="v-container field-content">
      ※ PMS 업체에서 발급한 없소 인증키 (체큐인 -> PMS 전송용)
    </div>
  </fieldset>
  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetPms",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
