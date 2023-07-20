<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2" style="width:">대실 시간 설정</h3>
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

  <div class="d-flex align-center" style="gap: 8px;">
    <div class="field-inner">
      <fieldset class="field-set" style="width: 630px">
        <h3 class="field-title mb-2">기타설정</h3>
        <v-table>
          <tbody>
            <tr>
              <td>
                <v-radio-group hide-details density="compact" inline>
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
    </div>
    <div class="field-inner">
      <div class="field-inner-box pa-2 mt-11" style="border: 1px solid #d6dbe2; box-sizing: border-box; background-color: #fff;">
        <fieldset class="field-set">
          <h3 class="field-title mb-2">숙박 시간 설정</h3>
          <div class="d-flex align-center" style="gap: 8px">
            <div class="input-counter" style="width: 100px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="12" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
            <div>~</div>
            <div class="input-counter" style="width: 100px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="12" />
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
              </v-btn>
            </div>
          </div>
        </fieldset>
      </div>
    </div>

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

<style lang="scss"></style>
