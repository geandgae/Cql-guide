<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">QR코드 키 발급</h3>
    <div class="field-box">
      <v-radio-group hide-details density="compact" inline>
        <v-radio color="secondary" label="사용" value="사용"></v-radio>
        <v-radio class="ml-2" color="secondary" label="사용 안함 (스피드 체크인)" value="사용 안함 (스피드 체크인)"></v-radio>
      </v-radio-group>
    </div>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">APP ID</h3>
    <div class="field-box">
      <input type="text" class="input" />
    </div>
  </fieldset>

  <fieldset class="field-set">
        <h3 class="field-title mb-2">로그인 정보</h3>
        <v-table>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="text-center" style="width: 100px;">아이디</th>
              <td>
                <input type="text" class="input" />
              </td>
              <th class="text-center" style="width: 100px;">비밀번호</th>
              <td>
                <input type="password" class="input" />
              </td>
            </tr>
          </tbody>
        </v-table>
      </fieldset>

      <fieldset class="field-set">
        <h3 class="field-title mb-2">사용자 전화번호 (USER ID)</h3>
        <div class="field-box">
          <input type="text" class="input" />
        </div>
      </fieldset>

      <fieldset class="field-set">
        <h3 class="field-title mb-2">사용자 전화번호 (USER ID)</h3>
        <div class="field-box">
          <v-btn color="darkgrey" size="small" style="width:150px;">로그인</v-btn>
          <div class="field-content ml-2">※ 변경사항 저장 후 로그인 테스트를 하실 수 있습니다.</div>
        </div>
      </fieldset>
  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetDoor",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss"></style>
