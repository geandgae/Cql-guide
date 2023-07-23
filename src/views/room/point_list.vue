<template>
  <!-- popup -->
  <Popup :popup="popup" style="width: 1110px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <h3 class="title-sub">조회일자</h3>
          <div class="field-box mt-3">
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="어제" value="어제"></v-radio>
              <v-radio color="secondary" label="오늘" value="오늘" class="ml-2"></v-radio>
              <v-radio color="secondary" label="이번주" value="이번주" class="ml-2"></v-radio>
              <v-radio color="secondary" label="이번달" value="이번달" class="ml-2"></v-radio>
            </v-radio-group>
            <div class="d-flex align-center ml-4">
              <VueDatePicker v-model="date" style="width:150px;border-radius: 0;" class="div-daypicker"></VueDatePicker>
              <div class="input-counter ml-2" style="width: 88px;">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="10시"/>
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="input-counter ml-2" style="width: 88px;">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="0분"/>
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <span class="ml-2 mr-2"> - </span>
              <VueDatePicker v-model="date" style="width:150px;border-radius: 0;" class="div-daypicker"></VueDatePicker>
              <div class="input-counter ml-2" style="width: 88px;">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="10시"/>
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
              <div class="input-counter ml-2" style="width: 88px;">
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                </v-btn>
                <input type="text" value="0분"/>
                <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                  <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                </v-btn>
              </div>
            </div>
            <v-btn color="secondary" size="small"  variant="outlined" class="ml-2" style="max-width:66px">
                검색조회
            </v-btn>
          </div>
        </fieldset>
        <!-- //field-set -->
        <!-- field-set -->
        <fieldset class="field-set">
          <div class="d-flex justify-space-between align-center">
            <h3 class="title-sub pt-1">필터옵션</h3>
            <div class="d-flex align-center">
              <span class="mr-2">검색어</span>
              <div class="input-search" style="width:190px;">
                <input type="text" placeholder="검색어를 입력하세요" />
                <v-btn density="compact" size="small" icon="mdi-magnify"></v-btn>
              </div>
            </div>
          </div>
          <div class="field-check-group mt-2">
            <div class="check-group">
              <v-checkbox hide-details density="compact" color="secondary" label="전체선택"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="포인트 추가"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="포인트 삭감"></v-checkbox>
            </div>
          </div>
        </fieldset>
        <!--// field-set -->
        <div class="d-flex justify-space-between align-center mt-3">
          <p>total: <span class="text-secondary">46</span>개</p>
        </div>
        <!-- table -->
        <v-table fixed-header height="447" class="overflow-y-auto text-center dense-dark mt-2">
          <colgroup>
            <col style="width: 180px;"/>
            <col style="width: 120px;"/>
            <col style="width: 120px;"/>
            <col style="width: 120px;"/>
            <col style="width: 200px;"/>
            <col style="width: *"/>
          </colgroup>
          <thead>
            <tr>
              <th>일시</th>
              <th>전화번호</th>
              <th>구분</th>
              <th>근무자</th>
              <th>변경 포인트</th>
              <th>잔여 포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>포론트</span></td>
              <td class="text-center"><span>매니져</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>포론트</span></td>
              <td class="text-center"><span>매니져</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>포론트</span></td>
              <td class="text-center"><span>매니져</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>포론트</span></td>
              <td class="text-center"><span>매니져</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>
            <tr>
              <td class="text-center"><span>2022-12-24 17:23:02</span></td>
              <td class="text-center"><span>010-1234-5678</span></td>
              <td class="text-center"><span>자동</span></td>
              <td class="text-center"><span>홍길동</span></td>
              <td class="text-center"><span>10,000P</span></td>
              <td class="text-center"><span class="color-primary">10,000P</span></td>
            </tr>

          </tbody>
        </v-table>
        <!-- //table -->

      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <template v-slot:footer>
      <div class="btns">
        <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
      </div>
    </template>
  </Popup>
  <!-- //popup -->
</template>


<script>
import Popup from "@/components/popup/popup.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: "point_list",
  components: {
    Popup, VueDatePicker
  },
  data: () => ({
    popup: {
      title: "포인트 이력 조회",
      theme: "theme-popup-dark",
      size: "size-lg",
      align: "mx-auto",
    },
    date: null,
  }),
};
</script>
