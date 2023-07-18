<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">예약 숙박 입실가능 시간</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px">체크인 시간</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="01시간" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="input-counter ml-2" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="50분" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">전 부터 입실 가능</div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">예약 화면표시 일자 설정</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px">체크인 시간</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="01시간" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="input-counter ml-2" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="50분" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">전 부터 입실 가능</div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">예약 화면표시 일자 설정</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px">체크인 시간</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="1일" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">전</div>
              <div class="ml-2 color-secondary">(2022년 04월 05일 14시 25분 이내 표시됩니다.)</div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">기타설정</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center">예약 객실 정리시간(청소)</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="1일" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center">예약 시 객실 자동배정</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="사용" value="사용"></v-radio>
              <v-radio class="ml-2" color="secondary" label="사용안함" value="사용안함"></v-radio>
            </v-radio-group>
          </td>
          <th class="text-center">예약번호 QR코드 발송 여부</th>
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
  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetReservation",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
