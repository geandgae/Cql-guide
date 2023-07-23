<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">투숙 형태별 배경색 지정</h3>
    <div class="field-box d-flex align-center" style="gap: 8px;">
      <v-btn color="lightblue" size="small" style="width: 64px;">숙박</v-btn>
      <v-btn color="violet" size="small" style="width: 64px;">대실</v-btn>
      <v-btn color="navy" size="small" style="width: 64px;">장기</v-btn>
      <v-btn color="grey" size="small" style="width: 64px;">공실</v-btn>
      <v-btn color="yellow" size="small" style="color: white !important; width: 64px;">외출</v-btn>
      <v-btn color="darkgrey" size="small" style="width: 100px;">기본값 복원</v-btn>
    </div>
  </fieldset>

  <fieldset class="field-set d-flex w-100" style="gap: 8px">
    <div class="field-inner">
      <h3 class="field-title mb-2">키 색상 지정</h3>
      <div class="field-box d-flex align-center" style="gap: 8px;">
        <v-btn color="pink" size="small" style="width: 64px;">고객키</v-btn>
        <v-btn color="mint" size="small" style="width: 64px;">청소키</v-btn>
        <v-btn color="red" size="small" style="width: 64px;">마스터키</v-btn>
        <v-btn color="darkgrey" size="small" style="width: 100px;">기본값 복원</v-btn>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">객실명 색상 지정</h3>
      <div class="field-box d-flex align-center" style="gap: 8px;">
        <v-btn color="black" size="small" style="width: 64px;">기본</v-btn>
        <v-btn color="green" size="small" style="color: white !important; width: 64px;">오버타임</v-btn>
        <v-btn color="darkgrey" size="small" style="width: 100px;">기본값 복원</v-btn>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">사용시간 배경색상 지정</h3>
      <div class="field-box d-flex align-center" style="gap: 8px;">
        <v-btn color="grey" size="small" style="width: 64px; background-color: #9fa9c2 !important;">사용시간</v-btn>
        <v-btn color="aqua" size="small" style="width: 64px;">청소시간</v-btn>
        <v-btn color="darkgrey" size="small" style="width: 100px;">기본값 복원</v-btn>
      </div>
    </div>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">글자크기 설정</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 88px">기본설정</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="12" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 88px">좌측 메뉴</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="14" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 88px">체크인 팝업</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="11" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 88px">객실명</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="12" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set d-flex w-100" style="gap: 8px">
    <div class="field-inner">
      <h3 class="field-title mb-2">레이아웃 설정</h3>
      <div class="field-box d-flex align-center" style="gap: 8px;">
        <div class="field-content">좌측메뉴 넓이</div>
        <div class="d-flex align-center" style="width: 120px;">
          <div class="input-counter">
            <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
              <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
            </v-btn>
            <input type="text" value="270" />
            <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
              <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">퇴실예정 시간 알림 설정</h3>
      <div class="field-box d-flex align-center" style="gap: 8px;">
        <div class="field-content">퇴실예정 시간</div>
        <div class="d-flex align-center" style="width: 120px;">
          <div class="input-counter">
            <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
              <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
            </v-btn>
            <input type="text" value="30분" />
            <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
              <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
            </v-btn>
          </div>
        </div>
        <div class="field-content color-primary">퇴실예정 시간</div>
      </div>
    </div>
  </fieldset>

  <fieldset class="field-set d-flex w-100" style="gap: 8px">
    <div class="field-inner">
      <h3 class="field-title mb-2">객실 온도 표시 설정</h3>
      <div class="field-box">
        <v-radio-group hide-details density="compact" inline>
          <v-radio color="secondary" label="표시" value="표시"></v-radio>
          <v-radio color="secondary" label="숨김" value="숨김"></v-radio>
        </v-radio-group>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">공실 경과 시간 표시 설정</h3>
      <div class="field-box">
        <v-radio-group hide-details density="compact" inline>
          <v-radio color="secondary" label="표시" value="표시"></v-radio>
          <v-radio color="secondary" label="숨김" value="숨김"></v-radio>
        </v-radio-group>
      </div>
    </div>
  </fieldset>

  <fieldset class="field-set d-flex w-100" style="gap: 8px">
    <div class="field-inner">
      <h3 class="field-title mb-2">객실 이력 표시 설정</h3>
      <div class="field-box">
        <v-checkbox hide-details density="compact" color="secondary" label="전원상태"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="통신상태"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="온도상태"></v-checkbox>
        <v-checkbox hide-details density="compact" color="secondary" label="차량호출"></v-checkbox>
      </div>
    </div>
    <div class="field-inner">
      <h3 class="field-title mb-2">인스펙트 사용 시 <span class="color-secondary">[점검완료]</span> 문구 숨김 타이머</h3>
      <div class="field-box d-flex align-center" style="gap: 8px;">
        <div class="field-content">점검완료 후</div>
        <div class="d-flex align-center" style="width: 120px;">
          <div class="input-counter">
            <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
              <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
            </v-btn>
            <input type="text" value="1" />
            <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
              <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
            </v-btn>
          </div>
        </div>
        <div class="field-content color-primary">분 후 문구 숨김 <span class="color-primary">(※0분 이면 계속 표시)</span></div>
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

<style lang="scss" scoped></style>
