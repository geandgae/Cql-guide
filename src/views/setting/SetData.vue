<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">데이터 보관 기간 설정</h3>
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
              <th class="text-center" style="width: 100px">매출이력 정보</th>
              <td>
                <div class="d-flex align-center">
                  <div class="input-counter" style="width: 100px">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="8" />
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                  <span class="ml-2">일 (정산 시간 기준)</span>
                </div>
              </td>
              <th class="text-center" style="width: 100px">객실이력 정보</th>
              <td>
                <div class="d-flex align-center">
                  <div class="input-counter" style="width: 100px">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="12" />
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                  <span class="ml-2">일 (0시 기준)</span>
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
  name: "SetData",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss"></style>
