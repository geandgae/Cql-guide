<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 150px">포인트 적립/사용 설정</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="사용" value="사용"></v-radio>
              <v-radio class="ml-2" color="secondary" label="사용안함" value="사용안함"></v-radio>
            </v-radio-group>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 150px">포인트 사용 옵션 설정</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="포인트 단독 사용 (포인트로만 결제 가능)" value="포인트 단독 사용"></v-radio>
              <v-radio class="ml-2" color="secondary" label="현금/카드 혼합 사용 (잔여 포인트 사용 가능)" value="현금/카드 혼합 사용"></v-radio>
            </v-radio-group>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">적립 포인트 비율 설정</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 150px">현금 결제 금액의</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-minus</v-icon>
                </v-btn>
                <input type="text" value="14%" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">적립</div>
            </div>
          </td>
          <th class="text-center" style="width: 150px">카드 결제 금액의</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="5%" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">적립</div>
            </div>
          </td>
        </tr>
        <tr>
          <th class="text-center" style="width: 150px">무인 결제 시</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-minus</v-icon>
                </v-btn>
                <input type="text" value="0%" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">추가 적립</div>
            </div>
          </td>
          <th class="text-center" style="width: 150px">예약 결제 시</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="3%" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">추가 적립</div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>
  <fieldset class="field-set">
    <h3 class="field-title mb-2">포인트 적립 시 휴대번호 미입력 알림</h3>
    <div class="field-box">
      <v-radio-group hide-details density="compact" inline>
        <v-radio color="secondary" label="사용" value="사용"></v-radio>
        <v-radio color="secondary" label="사용안함" value="사용안함"></v-radio>
      </v-radio-group>
    </div>
  </fieldset>
  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetPoint",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
