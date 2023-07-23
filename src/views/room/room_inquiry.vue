<template>
  <!-- popup -->
  <Popup :popup="popup" style="width: 1040px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <div class="d-flex justify-space-between">
            <h3 class="title-sub">조회일자</h3>
            <div class="text-secondary bullet-text">객실이력 보관 일수는 12일 입니다.</div>
          </div>
          <div class="field-box mt-3">
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="어제" value="어제"></v-radio>
              <v-radio color="secondary" label="오늘" value="오늘" class="ml-2"></v-radio>
              <v-radio color="secondary" label="이번주" value="일반실" class="ml-2"></v-radio>
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
          <div class="d-flex justify-space-between">
            <h3 class="title-sub pt-1">필터옵션</h3>
            <div class="d-flex align-center">
              <v-checkbox hide-details density="compact" color="secondary" label="전체선택" class=""></v-checkbox>
              <span class="ml-2 mr-2"> | </span>
              <span class="mr-2">객실명</span>
              <v-select 
                :items="['객실미배정', '객실배정', '객실대기']" 
                value="전체객실" 
                density="compact" 
                hide-details
                style="width:250px !important;background-color: #fff;">
              </v-select>
            </div>
          </div>
          <div class="field-check-group mt-2">
            <div class="check-group">
              <v-checkbox hide-details density="compact" color="secondary" label="손님키"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="손님키"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="출입문"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="대실"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="숙박"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="장기"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="퇴실"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="외출"></v-checkbox>
            </div>
            <div class="check-group">
              <v-checkbox hide-details density="compact" color="secondary" label="객실이동"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="청소요청"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="청소완료"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="외출복귀"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="입실취소"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="퇴실취소"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="전원차단"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="전원공급"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="배차요청"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="배차완료"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="배차취소"></v-checkbox>
            </div>
          </div>
        </fieldset>
        <!--// field-set -->
        <div class="d-flex justify-space-between align-center mt-3">
          <p>total: <span class="text-secondary">46</span>개</p>
          <div class="d-flex align-center">
            <v-select 
              :items="['10개씩 보기', '20개씩 보기', '30개씩 보기']" 
              value="10개씩 보기" 
              density="compact" 
              hide-details
              class="mr-2"
              style="width:110px !important;background-color: #fff;">
            </v-select>
            <v-btn color="white" class="custom-btn-icon-white ml-auto" prepend-icon="mdi-close-box" size="small" style="min-width: 80px" @click="dialog = !dialog">
              <template v-slot:prepend>
                <v-icon size="medium" color="" style="color: #0e6d10;"></v-icon>
              </template>
              엑셀저장
            </v-btn>
          </div>
        </div>
        <!-- table -->
        <v-table fixed-header height="447" class="overflow-y-auto text-center dense-dark mt-2">
          <colgroup>
            <col style="width: 180px;"/>
            <col style="width: 120px;"/>
            <col style="width: 120px;"/>
            <col style="width: 120px;"/>
            <col style="width: 120px;"/>
            <col style="width: *"/>
          </colgroup>
          <thead>
            <tr>
              <th>일시</th>
              <th>객실명</th>
              <th>구분</th>
              <th>숙박형태</th>
              <th>근무자</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>자동</span></td>
              <td><span>대실</span></td>
              <td><span>auto</span></td>
              <td><span class="color-green">숙박상태</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>자동</span></td>
              <td><span>숙박</span></td>
              <td><span>admin</span></td>
              <td><span>문[열림]</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td></td>
              <td><span>auto</span></td>
              <td><span class="color-secondary">퇴실</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td><span>대실</span></td>
              <td><span>auto</span></td>
              <td><span class="color-aqua">청소완료</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td><span>대실</span></td>
              <td><span>auto</span></td>
              <td><span class="color-primary">입실</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td></td>
              <td><span>auto</span></td>
              <td><span class="color-secondary">전원차단</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>자동</span></td>
              <td></td>
              <td><span>admin</span></td>
              <td><span>프론트판매</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td><span>대실</span></td>
              <td><span>auto</span></td>
              <td><span class="color-yellow">청소요청</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>IDM</span></td>
              <td><span>숙박</span></td>
              <td><span>admin</span></td>
              <td><span>외출복귀</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>자동</span></td>
              <td><span>대실</span></td>
              <td><span>auto</span></td>
              <td><span class="color-green">숙박상태</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>자동</span></td>
              <td><span>숙박</span></td>
              <td><span>admin</span></td>
              <td><span>문[열림]</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td></td>
              <td><span>auto</span></td>
              <td><span class="color-secondary">퇴실</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td><span>대실</span></td>
              <td><span>auto</span></td>
              <td><span class="color-aqua">청소완료</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td><span>대실</span></td>
              <td><span>auto</span></td>
              <td><span class="color-primary">입실</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td></td>
              <td><span>auto</span></td>
              <td><span class="color-secondary">전원차단</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>자동</span></td>
              <td></td>
              <td><span>admin</span></td>
              <td><span>프론트판매</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>프론트</span></td>
              <td><span>대실</span></td>
              <td><span>auto</span></td>
              <td><span class="color-yellow">청소요청</span></td>
            </tr>
            <tr>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>302호</span></td>
              <td><span>IDM</span></td>
              <td><span>숙박</span></td>
              <td><span>admin</span></td>
              <td><span>외출복귀</span></td>
            </tr>
          </tbody>
        </v-table>
        <!-- //table -->

      </div>
      <!-- //popup-contents -->
      <!-- pagination -->
      <div class="text-center page-navigation">
        <v-pagination v-model="page" :length="4" rounded="circle"></v-pagination>
      </div>
      <!-- /pagination -->
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
  name: "room_inquiry",
  components: {
    Popup, VueDatePicker
  },
  data: () => ({
    popup: {
      title: "객실 이력 조회",
      theme: "theme-popup-dark",
      size: "size-lg",
      align: "mx-auto",
    },
    date: null,
    page:1,
  }),
};
</script>
