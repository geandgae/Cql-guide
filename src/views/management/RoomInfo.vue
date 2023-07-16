<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents" -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <h3 class="title-sub mb-4">객실정보 변경</h3>
          <v-table>
            <colgroup>
              <col style="width: 110px" />
              <col />
              <col style="width: 110px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">객실타입 선택</th>
                <td>
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="VIP룸" value="VIP룸"></v-radio>
                    <v-radio color="secondary" label="스위트룸" value="스위트룸" class="ml-4"></v-radio>
                    <v-radio color="secondary" label="일반실" value="일반실" class="ml-4"></v-radio>
                    <v-radio color="secondary" label="없음" value="없음" class="ml-4"></v-radio>
                  </v-radio-group>
                </td>
                <th class="text-center">검색</th>
                <td>
                  <div class="input-search">
                    <input type="text" />
                    <v-btn density="compact" size="small" icon="mdi-magnify"></v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->
        <div class="d-flex align-center mt-3">
          <v-checkbox hide-details density="compact" color="secondary" label="전체선택"></v-checkbox>
          <v-btn color="white" class="custom-btn-icon-white" prepend-icon="mdi-plus-thick" size="small" style="min-width: 80px">
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
        <!-- field-set -->
        <fieldset class="field-set mt-3">
          <v-table>
            <colgroup>
              <col style="width: 110px" />
              <col style="width: *"/>
              <col style="width: 130px" />
              <col style="width: 220px" />
              <col style="width: 110px" />
              <col style="width: 220px" />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">선택한 객실을</th>
                <td>
                  <div class="d-flex align-center">
                    <v-select 
                      :items="['선택', '스위트룸', 'VIP룸', '일반룸']"
                      value="선택"
                      density="compact"
                      hide-details
                      variant="outlined">
                    </v-select>
                    <span class="ml-2">타입으로 변경</span>
                  </div>
                </td>
                <th class="text-center">선택한 객실 GID를</th>
                <td>
                  <input type="text" class="input" style="width: 100px;" />
                  <span class="ml-2">으로</span>
                  <v-btn color="grey" class="ml-2" size="small" style="min-width: 60px">변경</v-btn>
                </td>
                <th class="text-center">선택한 객실을</th>
                <td>
                  <div class="d-flex align-center">
                    <v-select
                      :items="['스위트룸', 'VIP룸', '일반룸']"
                      value="스위트룸"
                      density="compact"
                      hide-details
                      variant="outlined">
                    </v-select>
                    <v-btn color="grey" class="ml-2" size="small" style="min-width: 60px">적용</v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->
      </div>
      <!-- //popup-contents" -->
    </template>
    <!-- //slot -->
  </Popup>
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
      title: "객실정보 관리",
      theme: "theme-popup-dark",
      size: "size-lg",
      align: "mx-auto",
    },
    dialog: false,
  }),
};
</script>
