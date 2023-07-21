<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">직원목록</h3>
    <!-- table -->
    <v-table fixed-header height="248" class="overflow-y-auto text-center dense-dark mt-2">
      <colgroup>
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>선택</th>
          <th>아이디</th>
          <th>이름</th>
          <th>권한</th>
          <th>부서</th>
          <th>라이선스</th>
          <th>전화번호</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>test1234</td>
          <td>테스터</td>
          <td class="color-secondary">책임자(업주)</td>
          <td>테스터</td>
          <td class="color-aqua">경영</td>
          <td>010-1234-5678</td>
          <td>
            <v-btn color="grey" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
        <tr class="active">
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>ict25</td>
          <td>아이씨티</td>
          <td>관리자(매니저)</td>
          <td>경영</td>
          <td class="color-aqua">Y</td>
          <td>02-123-4567</td>
          <td>
            <v-btn color="secondary" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
        <tr v-for="item in 20" :key="item">
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>sanha</td>
          <td>산하정보기술</td>
          <td>PMS</td>
          <td>개발부</td>
          <td>N</td>
          <td>010-1234-5678</td>
          <td>
            <v-btn color="grey" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <!-- //table -->
  </fieldset>

  <fieldset class="field-set">
    <div class="field-inner d-flex align-center justify-space-between">
      <h3 class="field-title mb-2">직원정보</h3>
      <v-btn color="white" class="custom-btn-icon-secondary mb-2 pr-3 color-secondary" prepend-icon="mdi-plus-thick"
        size="small" style="width: 80px; color:#fc6060 !important">
        <template v-slot:prepend>
          <v-icon class="pa-0 ma-0 pl-2 color-secondary"></v-icon>
        </template>
        추가/수정
      </v-btn>
    </div>

    <v-table>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <th class="text-center" style="width: 78px;">아이디</th>
          <td>
            <input type="text" class="input" />
          </td>
          <th class="text-center" style="width: 78px;">이름</th>
          <td>
            <input type="text" class="input" />
          </td>
          <th class="text-center" style="width: 78px;">권한설정</th>
          <td>
            <v-select :items="['매니저', 'select2', 'select3', 'select4', 'select5']" value="매니저" density="compact"
              hide-details>
            </v-select>
          </td>
          <th class="text-center" style="width: 78px;">이메일</th>
          <td>
            <input type="text" class="input" />
          </td>
        </tr>
        <tr>
          <th class="text-center" style="width: 78px;">휴대폰</th>
          <td>
            <input type="text" class="input" />
          </td>
          <th class="text-center" style="width: 78px;">연락처</th>
          <td>
            <input type="text" class="input" />
          </td>
          <th class="text-center" style="width: 78px;">부서</th>
          <td>
            <input type="text" class="input" />
          </td>
          <th class="text-center" style="width: 78px;">직위</th>
          <td>
            <input type="text" class="input" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <v-table>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <th class="text-center" style="width: 180px;">로그인 라이선스 사용여부</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="없음" value="없음"></v-radio>
              <v-radio color="secondary" label="있음" value="있음"></v-radio>
            </v-radio-group>
          </td>
          <th class="text-center" style="width: 180px;">로그인 라이선스 구분</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="고정 접속" value="고정 접속"></v-radio>
              <v-radio color="secondary" label="유동 접속" value="유동 접속"></v-radio>
            </v-radio-group>
          </td>
        </tr>

        <tr>
          <th class="text-center" style="width: 180px;">일일 매출 정보 메일 수신 여부</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="수신" value="수신"></v-radio>
              <v-radio color="secondary" label="안함" value="안함"></v-radio>
            </v-radio-group>
          </td>
          <th class="text-center" style="width: 180px;">무인판매 메일 수신 여부</th>
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="수신" value="수신"></v-radio>
              <v-radio color="secondary" label="안함" value="안함"></v-radio>
            </v-radio-group>
          </td>
        </tr>

        <tr>
          <th class="text-center" style="width: 180px;">OTA 예약 연동 메일 수신 여부</th>
          <td colspan="3">
            <div class="d-flex align-center">
              <v-radio-group hide-details density="compact" inline>
                <v-radio color="secondary" label="수신" value="수신"></v-radio>
                <v-radio color="secondary" label="실패만 수신" value="실패만 수신"></v-radio>
                <v-radio color="secondary" label="안함" value="안함"></v-radio>
              </v-radio-group>
              <div class="mr-2">비밀번호</div>
                <input type="password" class="input mr-2" placeholder="비밀번호 입력" style="width: 130px;" />
              <div class="mr-2">비밀번호 확인</div>
                <input type="password" class="input mr-2" placeholder="비밀번호 확인" style="width: 130px;" />
                <v-btn color="grey" size="small" style="width: 50px;">변경</v-btn>
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
  name: "SetEmployee",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.v-btn.custom-btn-icon-secondary {
  border: 1px solid #fc6060;

  .v-btn__content {
    margin-top: -2px;
  }
}
</style>
