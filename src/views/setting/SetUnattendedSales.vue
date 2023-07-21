<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">무인자판기 사용 설정</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 160px;">전체 무인 자판기 사용 여부</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="사용" value="사용"></v-radio>
              <v-radio class="ml-2" color="secondary" label="사용안함" value="사용안함"></v-radio>
            </v-radio-group>
          </td>
          <th class="text-center" style="width: 160px;">전체 무인 판매 허용 타입</th>
          <td>
            <div class="d-flex align-center">
              <v-checkbox hide-details density="compact" color="secondary" label="숙박판매"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="대실판매"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="예약판매"></v-checkbox>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">옵션 시간 추가/변경</h3>
    <v-table>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <th class="text-center">무인판매기 옵션 설정</th>
          <td colspan="3">
            <v-select :items="['select1', '[CHECKQIN] ISSXA 01', 'select3', 'select4', 'select5']"
              value="[CHECKQIN] ISSXA 01" density="compact" class="custom-select" hide-details>
            </v-select>
          </td>
        </tr>

        <tr>
          <th class="text-center">ISSXA 01 무인판매 사용</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="사용" value="사용"></v-radio>
              <v-radio color="secondary" label="중지" value="중지"></v-radio>
            </v-radio-group>
          </td>
          <th class="text-center">카드데크 키 현황</th>
          <td><v-btn color="darkgrey" size="small" class="w-100">카드데크 키 현황 보기</v-btn></td>
        </tr>

        <tr>
          <th class="text-center">성인 인증모드 설정</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="사용" value="사용"></v-radio>
              <v-radio color="secondary" label="해제" value="해제"></v-radio>
            </v-radio-group>
          </td>
          <th class="text-center">1회 성인인증</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="사용" value="사용"></v-radio>
              <v-radio color="secondary" label="사용안함 (* 성인인증 완료시 자동으로 성인 인증모드가 해제됩니다.)"
                value="사용안함"></v-radio>
            </v-radio-group>
          </td>
        </tr>

        <tr>
          <th class="text-center">차량번호 입력 사용</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="사용" value="사용"></v-radio>
              <v-radio color="secondary" label="사용안함" value="사용안함"></v-radio>
            </v-radio-group>
          </td>
          <th class="text-center">좌측 잔여지폐 수</th>
          <td class="d-flex justify-space-between align-center">
            <span class="field-content">좌측 잔여지폐 수</span>
            <div class="input-counter" style="width: 120px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="0장" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
            <span class="field-content">우측 잔여지폐 수</span>
            <div class="input-counter" style="width: 120px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="0장" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">영수증 프린터 설정</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 160px;">결제후 묻기</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="영수증 프린터 설정" value="영수증 프린터 설정"></v-radio>
              <v-radio class="ml-2" color="secondary" label="무조건 출력" value="무조건 출력"></v-radio>
            </v-radio-group>
          </td>
          <th class="text-center" style="width: 160px;">영수증 하단 추가 메시지</th>
          <td>
            <input type="text" class="input" value="이용해 주셔서 감사합니다."/>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>
  
  <fieldset class="field-set">
    <h3 class="field-title mb-2">무인 관리자 비밀번호 변경</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 160px;">신규 비밀번호 숫자만 입력</th>
          <td>
            <input type="password" class="input" placeholder="비밀번호를 입력하세요."/>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>


  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetUnattendedSales",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.input::placeholder{
  color: #0095fb;
}
</style>
