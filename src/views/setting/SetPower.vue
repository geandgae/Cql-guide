<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">객실 전원 설정</h3>
    <div class="field-box">
      <v-radio-group hide-details density="compact" inline>
        <v-radio color="secondary" label="사용" value="사용"></v-radio>
        <v-radio color="secondary" label="사용안함" value="사용안함"></v-radio>
      </v-radio-group>
    </div>
  </fieldset>
  <fieldset class="field-set">
    <h3 class="field-title mb-2">공실 시 고객키 삽입 전원차단 타이머</h3>
    <v-table>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <th class="text-center" style="width: 120px">고객카드 삽입 후</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 100px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="1" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">분 후 전원 차단 <span class="color-secondary ml-2">(※0분 이면 계속 표시)</span></div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>
  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetPower",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
