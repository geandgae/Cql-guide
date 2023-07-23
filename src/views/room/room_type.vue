<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <v-row no-gutters style="min-height: 578px">
          <!-- left -->
          <div class="d-flex flex-column flex-shrink-0" style="width: 178px">
            <h3 class="title-sub mb-4">객실정보 변경</h3>
            <div class="box-border flex-grow-1 pa-2">
              <v-btn color="primary" append-icon="mdi-trash-can-outline" size="small" style="width: 100%" class="custom-btn-icon">
                VIP 룸
                <template v-slot:append>
                  <v-icon color="white"></v-icon>
                </template>
              </v-btn>
              <v-btn color="darkgrey" append-icon="mdi-trash-can-outline" size="small" style="width: 100%" class="custom-btn-icon mt-2">
                스위트 룸
                <template v-slot:append>
                  <v-icon color="white"></v-icon>
                </template>
              </v-btn>
              <v-btn color="darkgrey" append-icon="mdi-trash-can-outline" size="small" style="width: 100%" class="custom-btn-icon mt-2">
                일반실
                <template v-slot:append>
                  <v-icon color="white"></v-icon>
                </template>
              </v-btn>
              <v-btn color="secondary" append-icon="mdi-plus" size="small" style="width: 100%" class="custom-btn-icon mt-2">
                객실추가
                <template v-slot:append>
                  <v-icon color="white"></v-icon>
                </template>
              </v-btn>
            </div>
          </div>
          <!-- //left -->

          <!-- right -->
          <div class="ml-2 flex-grow-1">
            <fieldset class="field-set">
              <h3 class="title-sub mb-4">기본정보</h3>
              <v-table>
                <colgroup>
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th class="text-left">타입명</th>
                    <td>
                      <input type="text" class="input" />
                    </td>
                    <th class="text-left">투숙인원</th>
                    <td>
                      <div class="input-counter" style="width: 120px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="2명" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-left">설명</th>
                    <td colspan="3">
                      <input type="text" class="input" placeholder="객실에 관련된 설명을 입력하세요." />
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </fieldset>
            <fieldset class="field-set">
              <div class="d-flex align-center mb-4">
                <h3 class="title-sub">기본정보</h3>
                <div class="body-2 color-secondary ml-auto">*변경 단위 수정은 환경설정에서 가능합니다.</div>
              </div>
              <v-table>
                <colgroup>
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th class="text-left">숙박</th>
                    <td>
                      <div class="input-counter" style="width: 150px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="15,000원" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </td>
                    <th class="text-left">대실</th>
                    <td>
                      <div class="input-counter" style="width: 150px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="15,000원" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </fieldset>
            <fieldset class="field-set">
              <h3 class="title-sub mb-4">추가요금</h3>
              <v-table>
                <colgroup>
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th class="text-left">카드결제 추가</th>
                    <td>
                      <div class="input-counter" style="width: 150px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="0원" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </td>
                    <th class="text-left">인원추가(인당)</th>
                    <td>
                      <div class="input-counter" style="width: 150px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="0명" />
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
              <h3 class="title-sub mb-4">예약할인</h3>
              <v-table>
                <colgroup>
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th class="text-left">숙박</th>
                    <td>
                      <div class="input-counter" style="width: 150px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="0원" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </td>
                    <th class="text-left">대실</th>
                    <td>
                      <div class="input-counter" style="width: 150px">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="0원" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="x-small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </fieldset>
            <fieldset class="field-set">
              <h3 class="title-sub mb-4">기본정보</h3>
              <v-table>
                <colgroup>
                  <col style="width: 100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr v-for="item in ['OTA 1', 'OTA 2', 'OTA 3', 'OTA 4', 'OTA 5']" :key="item">
                    <th class="text-left">{{item}}</th>
                    <td>
                      <input type="text" class="input" placeholder="타입명 입력" />
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </fieldset>
            
          </div>
          <!-- //right -->
        </v-row>
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->

  <!-- popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "RoomType",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "객실타입 관리",
      theme: "theme-popup-dark",
      size: "size-smd",
      align: "mx-auto",
    },
  }),
};
</script>
