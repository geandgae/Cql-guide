<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">고객 설정 최소/최대 온도</h3>
    <div class="field-box">
      <v-radio-group hide-details density="compact" inline>
        <v-radio color="secondary" label="사용" value="사용"></v-radio>
        <v-radio color="secondary" label="사용 안함" value="사용 안함"></v-radio>
      </v-radio-group>
      <div class="field-content ml-3 color-primary">(※0분 이면 계속 표시)</div>
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
    <div class="field-inner">
      <h3 class="field-title mb-2">전원 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="전원차단"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="전원공급"></v-checkbox>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">차량호출 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="배차요청"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="배차완료"></v-checkbox>
      </div>
    </div>
  </fieldset>

  
  <fieldset class="field-set d-flex w-100" style="gap: 8px">
    <div class="field-inner">
      <h3 class="field-title mb-2" style="width: 300px !important">인스펙트(점검) 음성 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="점검대기"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="점검 중"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="점검완료"></v-checkbox>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">기타 효과음 설정 여부</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="숙박/대실 상태"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="알람 효과음"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="자동입실"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="자동퇴실"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="외출"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="외출복귀"></v-checkbox>
      </div>
    </div>
  </fieldset>

  <hr class="mt-4 mb-1">

  <fieldset class="field-set">
    <div class="d-flex align-center">
      <h3 class="field-title mr-2">기타설정</h3>
      <v-checkbox hide-details density="compact" color="secondary" label="객실타입명 음성 출력"></v-checkbox>
    </div>

    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 80px">음성속도</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 80px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="1.4" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">숫자가 클 수록 말하기 속도가 빨라집니다.</div>
            </div>
          </td>
          <th class="text-center" style="width: 80px">음성버퍼</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 80px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="7" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">순차적으로 재생 할 음성의 최대 갯수 입니다.</div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <div class="v-container field-content">
      - 재생대기 음성이 버퍼 갯수를 넣으면 다음 재생 할 음성이 제거 되고 신규 음성이 버퍼에 추가됩니다.<br />
      - '0' 이면 실시간으로 음성이 재생됩니다.
    </div>
  </fieldset>
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
