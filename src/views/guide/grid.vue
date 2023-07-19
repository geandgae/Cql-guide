<template>
  <v-container fluid class="bg-surface-variant">
    <v-row no-gutters>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2"> .v-col-2 </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6">
        <v-sheet class="pa-2 ma-2">
          <fieldset class="field-set">
            <h3 class="field-title mb-2">QR코드 키 발급</h3>
            <div class="field-box">
              <v-radio-group hide-details density="compact" inline>
                <v-radio color="secondary" label="현금" value="현금"></v-radio>
                <v-radio color="secondary" label="카드" value="카드"></v-radio>
              </v-radio-group>
            </div>
          </fieldset>
          <fieldset class="field-set">
            <h3 class="field-title mb-2">객실 이력 표시 설정</h3>
            <div class="field-box">
              <v-checkbox hide-details density="compact" color="secondary" label="전원상태"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="통신상태"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="온도상태"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="차량상태"></v-checkbox>
            </div>
          </fieldset>
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet class="pa-2 ma-2">
          <fieldset class="field-set">
            <h3 class="field-title mb-2">공실 경과 시간 표시 설정</h3>
            <div class="field-box">
              <v-radio-group hide-details density="compact" inline>
                <v-radio color="secondary" label="표시" value="표시"></v-radio>
                <v-radio color="secondary" label="숨김" value="숨김"></v-radio>
              </v-radio-group>
            </div>
          </fieldset>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GuideGride",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
