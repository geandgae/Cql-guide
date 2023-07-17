<template>
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
</template>

<script>
export default {
  name: "SetOperation",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss"></style>
