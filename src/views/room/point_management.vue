<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <div class="d-flex align-center mt-3">
          <v-checkbox hide-details density="compact" color="secondary" label="전체선택" class="flex-grow-0"></v-checkbox>
          <i class="mx-4" style="width: 1px; height: 16px; background-color: #bcbdbe;"></i>
          <div class="input-search">
            <input type="text" placeholder="휴대폰 번호 입력"/>
            <v-btn density="compact" size="small" icon="mdi-magnify"></v-btn>
          </div>
          <v-btn color="white" class="custom-btn-icon-white ml-auto" prepend-icon="mdi-plus-thick" size="small" style="min-width: 80px" @click="dialog = !dialog">
            <template v-slot:prepend>
              <v-icon size="small" color="pa-0 ma-0"></v-icon>
            </template>
            포인트 추가
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
              <th>휴대폰 번호</th>
              <th>포인트</th>
              <th>등록일시</th>
              <th>수정일자</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <v-checkbox hide-details density="compact" color="secondary"></v-checkbox>
              </td>
              <td>
                <input type="text" class="input sm" value="000-0000-0000" />
              </td>
              <td>
                <div class="input-counter sm mx-auto" style="width: 150px">
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-minus</v-icon>
                  </v-btn>
                  <input type="text" value="1,500원" />
                  <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                    <v-icon size="x-small" color="white">mdi-plus</v-icon>
                  </v-btn>
                </div>
              </td>
              <td>0000-00-00 00:00:00</td>
              <td>0000-00-00 00:00:00</td>
              <td>
                <v-btn density="compact" size="small" icon="mdi-trash-can-outline"></v-btn>
              </td>
            </tr>
            <tr v-for="item in 3" :key="item">
              <td>
                <v-checkbox hide-details density="compact" color="secondary"></v-checkbox>
              </td>
              <td>000-0000-0000</td>
              <td>1,500원</td>
              <td>0000-00-00 00:00:00</td>
              <td>0000-00-00 00:00:00</td>
              <td>
                <v-btn density="compact" size="small" icon="mdi-trash-can-outline"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
        <!-- //table -->
        <!-- field-set -->
        <fieldset class="field-set mt-3">
          <v-table>
            <colgroup>
              <col style="width: 150px" />
              <col style="width: *"/>
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">선택한 고객의 포인트를</th>
                <td>
                  <div class="d-flex align-center" style="gap:8px;">
                    <input type="text" class="input" />
                    <v-btn color="grey" size="small" style="min-width: 54px">추가</v-btn>
                    <v-btn color="grey" size="small" style="min-width: 54px">빼기</v-btn>
                    <v-btn color="secondary" size="small" style="min-width: 80px">포인트 변경</v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->
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
              <span>추가할 고객의 전화번호를 입력해 주세요</span>
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
  name: "PointManagement",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "포인트 관리",
      theme: "theme-popup-dark",
      size: "size-smd",
      align: "mx-auto",
    },
    popupAlert: {
      title: "포인트 추가",
      theme: "theme-popup-light",
      size: "size-sm",
      align: "ml-3 mr-auto",
    },
    dialog: false,
  }),
};
</script>
