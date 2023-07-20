<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
      <v-container fluid class="dashBoard">
        <v-row no-gutters>
          <d-flex>
            
          </d-flex>
          <v-col cols="7">
            <v-sheet class="pa-3 ma-1">
              <fieldset class="field-set">
                <h3 class="field-title mb-2">QR코드 키 발급</h3>
                <div class="field-box">
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="현금" value="현금"></v-radio>
                    <v-radio color="secondary" label="카드" value="카드"></v-radio>
                  </v-radio-group>
                </div>
              </fieldset>
            </v-sheet>
            <v-sheet class="pa-3 ma-1">
              <fieldset class="field-set">
                <h3 class="field-title mb-2">QR코드 키 발급</h3>
                <div class="field-box">
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="현금" value="현금"></v-radio>
                    <v-radio color="secondary" label="카드" value="카드"></v-radio>
                  </v-radio-group>
                </div>
              </fieldset>
            </v-sheet>
          </v-col>
          <v-col cols="5">
            <v-sheet class="pa-3 ma-1">
              <fieldset class="field-set">
                <h3 class="field-title mb-2">공실 경과 시간 표시 설정</h3>
                <div class="field-box">
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="표시" value="표시"></v-radio>
                    <v-radio color="secondary" label="숨김" value="숨김"></v-radio>
                  </v-radio-group>
                </div>
              </fieldset>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>





        <div class="d-flex align-center mt-3">
          <v-checkbox hide-details density="compact" color="secondary" label="전체선택" class="flex-grow-0"></v-checkbox>
          <v-btn color="white" class="custom-btn-icon-white ml-auto" prepend-icon="mdi-plus-thick" size="small" style="min-width: 80px" @click="dialog = !dialog">
            <template v-slot:prepend>
              <v-icon size="small" color="pa-0 ma-0"></v-icon>
            </template>
            객실추가
          </v-btn>
        </div>
        <!-- table -->
        <v-table fixed-header height="447" class="overflow-y-auto text-center dense-dark mt-2">
          <colgroup>
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>선택</th>
              <th>객실이름</th>
              <th>GID</th>
              <th>LID</th>
              <th>객실타입</th>
              <th>층수</th>
              <th>방수</th>
              <th>바코드</th>
              <th>도어락 ID</th>
              <th>예약가능</th>
              <th>무인 숙박판매</th>
              <th>무인 대실판매</th>
              <th>무인 예약판매</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <v-checkbox hide-details density="compact" color="secondary"></v-checkbox>
              </td>
              <td><input type="text" class="input" style="width: 50px;" /></td>
              <td><input type="text" class="input" style="width: 50px;" /></td>
              <td><input type="text" class="input" style="width: 50px;" /></td>
              <td><input type="text" class="input" style="width: 80px;" /></td>
              <td><input type="text" class="input" style="width: 50px;" /></td>
              <td><input type="text" class="input" style="width: 50px;" /></td>
              <td><input type="text" class="input" style="width: 80px;" /></td>
              <td><input type="text" class="input" style="width: 80px;" /></td>
              <td>
                <v-checkbox hide-details density="compact" color="secondary" label="불가" :model-value="true" disabled></v-checkbox>
              </td>
              <td>
                <v-checkbox hide-details density="compact" color="secondary" label="중지" :model-value="true"  disabled></v-checkbox>
              </td>
              <td>
                <v-checkbox hide-details density="compact" color="secondary" label="중지" :model-value="true"  disabled></v-checkbox>
              </td>
              <td>
                <v-checkbox hide-details density="compact" color="secondary" label="중지" :model-value="true"  disabled></v-checkbox>
              </td>
              <td>
                <v-btn density="compact" size="small" icon="mdi-trash-can-outline"></v-btn>
              </td>
            </tr>
            <tr v-for="item in 20" :key="item">
              <td>
                <v-checkbox hide-details density="compact" color="secondary"></v-checkbox>
              </td>
              <td>201호</td>
              <td>1</td>
              <td>1</td>
              <td>스위트룸</td>
              <td>2층</td>
              <td>1</td>
              <td>1</td>
              <td>D0EFF01</td>
              <td>
                <v-checkbox hide-details density="compact" color="secondary" label="가능"></v-checkbox>
              </td>
              <td>
                <v-checkbox hide-details density="compact" color="secondary" label="허용"></v-checkbox>
              </td>
              <td>
                <v-checkbox hide-details density="compact" color="secondary" label="허용"></v-checkbox>
              </td>
              <td>
                <v-checkbox hide-details density="compact" color="secondary" label="허용"></v-checkbox>
              </td>
              <td>
                <v-btn density="compact" size="small" icon="mdi-trash-can-outline"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
        <!-- //table -->

      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->

  <!-- popup -->
  <v-dialog v-model="dialog" width="auto">
    <!-- popup -->
    <Popup :popup="popupAlert">
      <!-- slot -->
      <template v-slot:body>
        <!-- popup-contents -->
        <div class="popup-contents">
          <div class="box-border d-flex flex-column align-center justify-center px-8" style="height: 140px;">
            <div class="mb-5">
              <v-icon color="secondary" class="mr-2">mdi-alert-circle</v-icon>
              <span>추가할 객실명을 입력하세요</span>
            </div>
            <input type="text" class="input md" />
          </div>
        </div>
        <!-- //popup-contents -->
      </template>
      <!-- //slot -->
      <!-- slot -->
      <template v-slot:footer>
        <div class="btns">
          <v-btn color="primary" size="large" style="min-width: 150px">추가</v-btn>
          <v-btn color="darkgrey" size="large" style="min-width: 150px" @click="dialog = !dialog">취소</v-btn>
        </div>
      </template>
      <!-- //slot -->
    </Popup>
    <!-- //popup -->
    
  </v-dialog>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "RoomInfo",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "예약현황",
      theme: "theme-popup-light",
      size: "size-md",
      align: "mx-auto",
    },
    // popupAlert: {
    //   title: "객실추가",
    //   theme: "theme-popup-light",
    //   size: "size-sm",
    //   align: "ml-3 mr-auto",
    // },
    dialog: false,
  }),
};
</script>
