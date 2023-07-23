<template>
  <!-- popup -->
  <Popup :popup="popup" style="width:550px; min-height:440px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <v-table>
            <colgroup>
              <col style="width: 90px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">객실선택</th>
                <td>
                  <v-select 
                      :items="['객실명', '객실호수', '객실층', '객실위치']"
                      value="객실명"
                      density="compact"
                      hide-details
                      variant="outlined">
                    </v-select>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->

        <!-- field-set -->
        <fieldset class="field-set mt-2">
          <div class="d-flex align-center justify-space-between">
            <h3 class="title-sub">CCU 선택</h3>
          </div>
          <!-- table -->
          <v-table class="">
            <colgroup>
              <col style="width:90px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">key</th>
                <td>
                  <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="전송" value="전송"></v-radio>
                      <v-radio color="secondary" label="OUT" value="OUT"></v-radio>
                      <v-radio color="secondary" label="고객키 IN" value="고객키 IN"></v-radio>
                      <v-radio color="secondary" label="청소키 IN" value="청소키 IN"></v-radio>
                      <v-radio color="secondary" label="마스터키 IN" value="마스터키 IN"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th class="text-center">DOOR</th>
                <td>
                  <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="전송" value="전송"></v-radio>
                      <v-radio color="secondary" label="닫힘" value="닫힘"></v-radio>
                      <v-radio color="secondary" label="열림" value="열림"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th class="text-center">EMLOCK</th>
                <td>
                  <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="전송" value="전송"></v-radio>
                      <v-radio color="secondary" label="닫힘" value="닫힘"></v-radio>
                      <v-radio color="secondary" label="열림" value="열림"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th class="text-center">차량호출</th>
                <td>
                  <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="전송" value="전송"></v-radio>
                      <v-radio color="secondary" label="닫힘" value="닫힘"></v-radio>
                      <v-radio color="secondary" label="열림" value="열림"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <th class="text-center">비상호출</th>
                <td>
                  <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="전송" value="전송"></v-radio>
                      <v-radio color="secondary" label="닫힘" value="닫힘"></v-radio>
                      <v-radio color="secondary" label="열림" value="열림"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
            </tbody>
          </v-table>
          <!-- //table -->
        </fieldset>
        <!--// field-set -->

      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <template v-slot:footer>
      <div class="btns">
        <v-btn color="secondary" size="large" style="min-width: 150px">실행</v-btn>
        <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
      </div>
    </template>
  </Popup>
  <!-- //popup -->

</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "ccu_simulator",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "CCU 시뮬레이터",
      theme: "theme-popup-dark",
      size: "size-auto",
      align: "mx-auto",
      pin: true,
    },
  }),
};
</script>
