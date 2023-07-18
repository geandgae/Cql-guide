<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">적립 포인트 비율 설정</h3>
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
          <th class="text-center" style="width: 270px">다른 사용자가 객실 조작 시 체크인 화면 잠금을</th>
        <td>
          <v-radio-group hide-details density="compact" inline>
            <v-radio color="secondary" label="사용" value="사용"></v-radio>
            <v-radio class="ml-2" color="secondary" label="사용안함" value="사용안함"></v-radio>
          </v-radio-group>
        </td>
          <th class="text-center" style="width: 200px">동시 잠금 상태에서 자동해제 시간</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 100px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="10" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">분으로 설정</div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>
  <fieldset class="field-set">
    <h3 class="field-title mb-2">자리비움 자동 잠금 설정</h3>
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
          <th class="text-left" style="width: 270px; padding-left: 14px !important">일정시간 자리비움 시 전체 화면 잠금을</th>
        <td>
          <v-radio-group hide-details density="compact" inline>
            <v-radio color="secondary" label="사용" value="사용"></v-radio>
            <v-radio class="ml-2" color="secondary" label="사용안함" value="사용안함"></v-radio>
          </v-radio-group>
        </td>
          <th class="text-left" style="width: 200px; padding-left: 14px !important">자리비움 시 자동 잠김 시간</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 100px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="30" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="ml-2">분으로 설정</div>
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
  name: "SetLock",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
