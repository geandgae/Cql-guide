<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">난방 온도 설정</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px">사용 중</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="30도" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 100px">외출 중</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="27도" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 100px">공실</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="18도" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th class="text-center" style="width: 100px">청소/점검대기</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="24도" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 100px">청소/점검 중</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="29도" />
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
    <h3 class="field-title mb-2">고객 설정 최소/최대 온도</h3>
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px">최소</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="20도" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
          <th class="text-center" style="width: 100px">최대</th>
          <td>
            <div class="d-flex align-center">
              <div class="input-counter" style="width: 120px">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="35도" />
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <h3 class="field-title mb-2">고객 설정 최소/최대 온도</h3>
        <div class="field-box">
          <v-radio-group hide-details density="compact" inline>
            <v-radio color="secondary" label="키에 연동" value="키에 연동"></v-radio>
            <v-radio color="secondary" label="전원 ON" value="전원 ON"></v-radio>
            <v-radio color="secondary" label="전원 OFF" value="전원 OFF"></v-radio>
          </v-radio-group>
        </div>
  </fieldset>
  <!-- //field-set -->
</template>

<script>
export default {
  name: "SetAir",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss"></style>
