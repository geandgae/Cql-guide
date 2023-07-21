<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">대실 시간 설정</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 80px">평일 오전</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="4시" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 80px">평일 오후</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="4시" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 80px">주말 오전</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="1시" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 80px">주말 오후</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="1시" />
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

  <div class="d-flex w-100 mt-2" style="gap: 8px;">
    <!-- 1st sec -->
    <div>
      <fieldset class="field-set" style="width: 628px;">
        <h3 class="field-title mb-2">숙박 시간 설정</h3>
        <v-table>
          <tbody>
            <tr>
              <td>
                <v-radio-group hide-details density="compact" inline style="width: 230px;">
                  <v-radio color="secondary" label="입실시간 기준" value="입실시간 기준"></v-radio>
                  <v-radio class="ml-2" color="secondary" label="퇴실시간 기준" value="퇴실시간 기준"></v-radio>
                </v-radio-group>
              </td>
              <th class="text-center" style="width: 60px">평일</th>
              <td>
                <div class="d-flex align-center">
                  <div class="input-counter">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="12시 퇴실" />
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </div>
              </td>
              <th class="text-center" style="width: 60px">주말</th>
              <td>
                <div class="d-flex align-center">
                  <div class="input-counter">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="13시 퇴실" />
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

      <fieldset class="field-set">
        <h3 class="field-title mb-2">손님키 삽입 시 자동입실 처리</h3>
        <div class="field-box">
          <v-radio-group hide-details density="compact" inline style="width: auto;">
            <v-radio color="secondary" label="대실시간만 사용" value="대실시간만 사용"></v-radio>
            <v-radio class="ml-2" color="secondary" label="숙박시간만 사용" value="숙박시간만 사용"></v-radio>
            <v-radio color="secondary" label="대실/숙박 사용" value="대실/숙박 사용"></v-radio>
            <v-radio class="ml-2" color="secondary" label="사용안함" value="사용안함"></v-radio>
          </v-radio-group>
        </div>
      </fieldset>

      <fieldset class="field-set">
        <h3 class="field-title mb-2">손님키 제거 시 기본설정</h3>
        <v-table>
          <tbody>
            <tr>
              <th class="text-center" style="width: 80px">대실</th>
              <td>
                <v-radio-group hide-details density="compact" inline style="width: auto;">
                  <v-radio color="secondary" label="외출" value="외출"></v-radio>
                  <v-radio class="ml-2" color="secondary" label="퇴실" value="퇴실"></v-radio>
                </v-radio-group>
              </td>
              <th class="text-center" style="width: 80px">숙박</th>
              <td>
                <v-radio-group hide-details density="compact" inline style="width: auto;">
                  <v-radio color="secondary" label="외출" value="외출"></v-radio>
                  <v-radio class="ml-2" color="secondary" label="퇴실" value="퇴실"></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
      </fieldset>

      <fieldset class="field-set">
        <h3 class="field-title mb-2">사용시간 경과 후 자동퇴실 처리</h3>
        <div class="field-box">
          <v-checkbox hide-details density="compact" color="secondary" label="손님키 제거 시 자동 퇴실처리"></v-checkbox>
          <v-checkbox hide-details density="compact" color="secondary" label="출입문이 열리면 자동 퇴실처리"></v-checkbox>
        </div>
      </fieldset>

      <fieldset class="field-set">
        <h3 class="field-title mb-2">인스펙트(객실점검) 사용 설정</h3>
        <div class="field-box">
          <v-radio-group hide-details density="compact" inline style="width: auto;">
            <v-radio color="secondary" label="퇴실 상태만 사용" value="퇴실 상태만 사용"></v-radio>
            <v-radio class="ml-2" color="secondary" label="항상 사용" value="항상 사용"></v-radio>
            <v-radio color="secondary" label="사용안함" value="사용안함"></v-radio>
          </v-radio-group>
          <div class="field-content color-secondary" style="width:50%;">(* 인스펙트는 마스터키가 있어야 사용 가능합니다.)</div>
        </div>
      </fieldset>

      <fieldset class="field-set">
        <h3 class="field-title mb-2">마스터키 제거 시 공실처리<span class="color-secondary ml-1">(*퇴실 상태일때)</span></h3>
        <div class="field-box">
          <v-radio-group hide-details density="compact" inline style="width: auto;">
            <v-radio color="secondary" label="대실만 사용" value="대실만 사용"></v-radio>
            <v-radio class="ml-2" color="secondary" label="숙박만 사용" value="숙박만 사용"></v-radio>
            <v-radio color="secondary" label="대실/숙박 사용" value="대실/숙박 사용"></v-radio>
            <v-radio class="ml-2" color="secondary" label="사용안함" value="사용안함"></v-radio>
          </v-radio-group>
        </div>
      </fieldset>
    </div>
    <!-- /1st sec -->

    <!-- 2nd sec -->
    <div class="mt-7">
      <div class="field-inner-box">
        <fieldset class="field-set ma-2">
          <h3 class="field-title my-1">숙박 시간 설정</h3>
          <div class="d-flex align-center" style="gap: 8px">
            <div class="input-counter">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="22시" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
            <div>~</div>
            <div class="input-counter">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="22시" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
          </div>
        </fieldset>

        <hr class="my-2">

        <fieldset class="field-set ma-2">
          <h3 class="field-title mb-1">일일 매출 정산 시간설정</h3>
          <div class="d-flex align-center" style="gap: 8px">
            <div class="input-counter" style="width: 100%">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="17시" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
          </div>
        </fieldset>

        <hr class="my-2">

        <fieldset class="field-set ma-2">
          <h3 class="field-title mb-1">입실취소 가능 시간설정</h3>
          <div class="d-flex align-center">
            <div class="field-box-mini">
              <div class="field-content">
                체크인 후
              </div>
            </div>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="60분" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="field-box-mini">
              <div class="field-content">
                이내
              </div>
            </div>
          </div>
        </fieldset>

        <hr class="my-2">

        <fieldset class="field-set ma-2">
          <h3 class="field-title mb-1">퇴실취소 가능 시간설정</h3>
          <div class="d-flex align-center">
            <div class="field-box-mini">
              <div class="field-content">
                퇴실 후
              </div>
            </div>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="60분" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="field-box-mini">
              <div class="field-content">
                이내
              </div>
            </div>
          </div>
        </fieldset>

        <hr class="my-2">

        <fieldset class="field-set ma-2">
          <h3 class="field-title mb-1">손님키 제거 시 퇴실처리 지연 시간설정</h3>
          <div class="d-flex align-center">
            <div class="field-box-mini">
              <div class="field-content">
                제거 시
              </div>
            </div>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="60분" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="field-box-mini">
              <div class="field-content">
                후 처리
              </div>
            </div>
          </div>
        </fieldset>

        <hr class="my-2">

        <fieldset class="d-flex field-set align-center ma-2">
          <h3 class="field-title">객실이동 시 손님키 있는 객실</h3>
          <v-radio-group hide-details density="compact" inline>
            <v-radio color="secondary" label="외출" value="외출"></v-radio>
            <v-radio color="secondary" label="퇴실" value="퇴실"></v-radio>
          </v-radio-group>
        </fieldset>

        <hr class="my-2">

        <fieldset class="field-set ma-2">
          <h3 class="field-title">객실 타입명 보기 설정</h3>
          <v-radio-group hide-details density="compact" inline>
            <v-radio color="secondary" label="숨기기" value="숨기기"></v-radio>
            <v-radio color="secondary" label="객실명 앞" value="객실명 앞"></v-radio>
            <v-radio color="secondary" label="객실명 뒤" value="객실명 뒤"></v-radio>
          </v-radio-group>
        </fieldset>

      </div>
    </div>
    <!-- /2nd sec -->
  </div>
  <!-- //field-set -->
</template>

<script>
export default {
  name: "setCharge",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.field-inner-box {
  height: 464px;
  border: 1px solid #d6dbe2;
  box-sizing: border-box;
  background-color: #fff;
}

.field-box-mini {
  background-color: #eff2f4;
  display: flex;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 28px;
  border: 1px solid #d6dbe2;
}

.field-content {
  width: 100%;
  text-align: center;
  font-size: 12px;
}
</style>
