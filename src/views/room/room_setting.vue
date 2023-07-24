<template>
  <!-- popup -->
  <Popup :popup="popup" style="width:650px; min-height:400px;">
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
                <th class="text-center">객체선택</th>
                <td>
                  <div class="d-flex">
                    <v-radio-group hide-details density="compact" inline>
                      <v-radio color="secondary" label="전체선택" value="전체선택"></v-radio>
                      <v-radio color="secondary" label="개별선택" value="개별선택"></v-radio>
                    </v-radio-group>
                    <v-select 
                      :items="['층별선택', '룸별선택', 'VIP룸', '일반룸']"
                      value="층별선택"
                      density="compact"
                      hide-details
                      variant="outlined"
                      class="mr-2"
                      style="width:90px;">
                    </v-select>
                    <v-btn 
                      color="darkgrey" 
                      class="custom-btn-icon-white mr-1" 
                      append-icon="mdi-refresh" 
                      size="small" 
                      style="width: 70px !important;">
                      초기화
                      <template v-slot:append>
                        <v-icon color="white"></v-icon>
                      </template>
                    </v-btn>
                    <v-btn 
                      color="darkgrey" 
                      class="custom-btn-icon-white mr-2" 
                      append-icon="mdi-trash-can-outline" 
                      size="small" 
                      style="width: 56px !important;">
                      삭제
                      <template v-slot:append>
                        <v-icon color="white"></v-icon>
                      </template>
                    </v-btn>
                    <v-btn 
                      color="secondary" 
                      class="custom-btn-icon-white " 
                      append-icon="mdi-plus" 
                      size="small"
                      variant="outline" 
                      style="width: 89px !important;">
                      객실추가
                      <template v-slot:append>
                        <v-icon></v-icon>
                      </template>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->

        <!-- field-set -->
        <fieldset class="field-set mt-2">
          <div class="d-flex align-center justify-space-between">
            <h3 class="title-sub">테마 선택</h3>
            <v-checkbox hide-details density="compact" color="secondary" label="전체적용" class="flex-grow-0" style="font-weight:bold;"></v-checkbox>
          </div>
          <!-- table -->
          <v-table class="">
            <colgroup>
              <col style="width:90px" />
              <col />
              <col style="width:90px" />
              <col />
              <col style="width:90px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">컬러/테마</th>
                <td>
                  <v-select 
                    :items="['기본테마', '블루테마', '레드테마', '그린테마']"
                    value="기본테마"
                    density="compact"
                    hide-details
                    variant="outlined"
                    style="width:90px">
                  </v-select>
                </td>
                <th class="text-center">객실추가</th>
                <td>
                  <v-select 
                    :items="['남은객실', '종료객실', '청소완료']"
                    value="남은객실"
                    density="compact"
                    hide-details
                    variant="outlined"
                    style="width:90px">
                  </v-select>
                </td>
                <th class="text-center">표시설정</th>
                <td>
                  <v-select 
                    :items="['객실명순', '층별순', '객실종류순']"
                    value="객실명순"
                    density="compact"
                    hide-details
                    variant="outlined"
                    style="width:90px">
                  </v-select>
                </td>
              </tr>
            </tbody>
          </v-table>
          <!-- //table -->
        </fieldset>
        <!--// field-set -->

         <!-- field-set -->
         <fieldset class="field-set mt-2">
          <div class="d-flex align-center justify-space-between">
            <h3 class="title-sub">테마 선택</h3>
            <v-checkbox hide-details density="compact" color="secondary" label="전체적용" class="flex-grow-0" style="font-weight:bold;"></v-checkbox>
          </div>
          <!-- table -->
          <v-table class="">
            <colgroup>
              <col style="width:90px" />
              <col />
              <col style="width:90px" />
              <col />
              <col style="width:90px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">층수</th>
                <td>
                  <div class="input-counter" style="width: 90px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="2"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center">층별 객실수</th>
                <td>
                  <div class="input-counter" style="width: 90px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="6"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center">층별 간격</th>
                <td>
                  <div class="input-counter" style="width: 90px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="5"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
              <tr>
                <th class="text-center">객실 간격</th>
                <td>
                  <div class="input-counter" style="width: 90px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="2"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center">객실 넓이</th>
                <td>
                  <div class="input-counter" style="width: 90px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="6"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center">객실 높이</th>
                <td>
                  <div class="input-counter" style="width: 90px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="5"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
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
        <v-btn color="secondary" size="large" style="min-width: 150px">저장</v-btn>
        <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
      </div>
    </template>
  </Popup>
  <!-- //popup -->

</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "room_setting",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "객실설정",
      theme: "theme-popup-dark",
      size: "size-auto",
      align: "mx-auto",
      pin: true,
    },
  }),
};
</script>
