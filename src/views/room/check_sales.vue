<template>
  <!-- popup -->
  <Popup :popup="popup" style="width: 1600px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <div class="d-flex justify-space-between">
          <div class="" style="width: 946px;">
            <fieldset class="field-set">
              <div class="d-flex justify-space-between">
                <div class="d-flex align-center">
                  <h3 class="title-sub">검색기간</h3>
                  <span class="text-secondary bullet-text ml-6">매출 데이터 보관 일수는 8일 입니다.</span>
                </div>
                <div class="d-flex align-center">
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="어제" value="어제"></v-radio>
                    <v-radio color="secondary" label="오늘" value="오늘" class="ml-2"></v-radio>
                    <v-radio color="secondary" label="이번주" value="이번주" class="ml-2"></v-radio>
                    <v-radio color="secondary" label="이번달" value="이번달" class="ml-2"></v-radio>
                  </v-radio-group>
                </div>
              </div>
              <div class="field-box mt-2">
                <v-radio-group hide-details density="compact" inline>
                  <v-radio color="secondary" label="정산시간 기준" value="정산시간 기준"></v-radio>
                </v-radio-group>
                <div class="d-flex align-center ml-4">
                  <VueDatePicker v-model="date" style="width:202px;border-radius: 0;" class="div-daypicker"></VueDatePicker>
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
                  <VueDatePicker v-model="date" style="width:202px;border-radius: 0;" class="div-daypicker"></VueDatePicker>
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
              </div>
              <div class="field-box mt-3">
                <div class="th" style="width: 90px;background-color: #eff2f4; text-align: center;border-right: 1px solid #d6dbe2; height: 38px;padding-top: 7px;margin-left: -10px;">
                  보기옵션
                </div>
                <v-radio-group hide-details density="compact" inline class="ml-2">
                  <v-radio color="secondary" label="결제 기준 (결제별 정산)" value="결제 기준 (결제별 정산)"></v-radio>
                  <v-radio color="secondary" label="숙박 기준 (입실별 정산)" value="숙박 기준 (입실별 정산)"></v-radio>
                </v-radio-group>
              </div>
            </fieldset>
            <fieldset class="field-set mt-8">
              <div class="d-flex justify-space-between align-center mb-2">
                <h3 class="title-sub">필터옵션</h3>
                <v-btn color="secondary" class="custom-btn-icon-white ml-auto" prepend-icon="mdi-magnify" size="small" style="min-width: 80px">
                  <template v-slot:prepend>
                    <v-icon size="medium"></v-icon>
                  </template>
                  검색조회
                </v-btn>
              </div>
              <v-table>
                <colgroup>
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th class="text-center"><span>객실타입</span></th>
                    <td class="text-center">
                      <v-select 
                        :items="['타입1', '타입2', '타입3']" 
                        value="전체타입" 
                        density="compact" 
                        hide-details
                        style="width:200px !important;">
                      </v-select>
                    </td>
                    <th class="text-center"><span>객실명</span></th>
                    <td class="text-center">
                      <v-select 
                        :items="['501호', '502호', '503호']" 
                        value="501호" 
                        density="compact" 
                        hide-details
                        style="width:200px !important;">
                      </v-select>
                    </td>
                    <th class="text-center"><span>무인판매기</span></th>
                    <td class="text-center">
                      <v-select 
                        :items="['전체무인판매기', '무인판매기1', '무인판매기2']" 
                        value="전체무인판매기" 
                        density="compact" 
                        hide-details
                        style="width:200px !important;">
                      </v-select>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center">
                        <v-checkbox hide-details density="compact" color="secondary" label="전체선택" style="font-weight:bold;"></v-checkbox>                      
                    </th>
                    <td class="text-center" colspan="5">
                      <div class="table-check-group">
                        <v-checkbox hide-details density="compact" color="secondary" label="대실"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="숙박"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="장기"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="현금결제"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="카드결제"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="OTA결제"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="포인트결제"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="예약"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="유인판매"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="무인판매"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="자동입실"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="객실이동"></v-checkbox>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </fieldset>
          </div>
          <div class="" style="width: 600px;">
            <fieldset class="field-set">
              <div class="d-flex justify-space-between align-center">
                <h3 class="title-sub">숙박현황</h3>
                <span class="text-secondary bullet-text ml-6">대실/숙박 변경 시 결제 금액은 변경된 투숙형태에 합삽됩니다.</span>
              </div>
              <v-table class="mt-4">
                <colgroup>
                  <col style="width: 49px"/> 
                  <col style="width: 49px"/>
                  <col style="width: 72px" />
                  <col style="width: 72px" />
                  <col style="width: 72px" />
                  <col style="width: 72px" />
                  <col style="width: 72px" />
                  <col style="width: 72px" />
                  <col style="width: 72px" />
                </colgroup>
                <thead>
                  <th class="text-center"><span>유형</span></th>
                  <th class="text-center"><span>건수</span></th>
                  <th class="text-center"><span>현금</span></th>
                  <th class="text-center"><span>카드</span></th>
                  <th class="text-center"><span>OTA</span></th>
                  <th class="text-center"><span>포인트</span></th>
                  <th class="text-center"><span>미수금</span></th>
                  <th class="text-center"><span>반환금</span></th>
                  <th class="text-center"><span>합계</span></th>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center"><span class="color-violet">대실</span></td>
                    <td class="text-right"><span>0</span></td>
                    <td class="text-right"><span>1,000,000</span></td>
                    <td class="text-right"><span>1,000,000</span></td>
                    <td class="text-right"><span>0</span></td>
                    <td class="text-right"><span>1,000,000</span></td>
                    <td class="text-right"><span>0</span></td>
                    <td class="text-right"><span>0</span></td>
                    <td class="text-right"><span>19,000,000</span></td>
                  </tr>
                  <tr>
                    <td class="text-center"><span class="color-primary">숙박</span></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                  </tr>
                  <tr>
                    <td class="text-center"><span class="color-aqua">장기</span></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                  </tr>
                  <tr>
                    <td class="text-center"><span>합계</span></td>
                    <td class="text-right"><span>0</span></td>
                    <td class="text-right"><span>1,000,000</span></td>
                    <td class="text-right"><span>1,000,000</span></td>
                    <td class="text-right"><span>0</span></td>
                    <td class="text-right"><span>1,000,000</span></td>
                    <td class="text-right"><span>0</span></td>
                    <td class="text-right"><span>0</span></td>
                    <td class="text-right"><span>19,000,000</span></td>
                  </tr>
                </tbody>
                <tfoot>
                    <th colspan="4"><p>미수금: <span>0</span></p></th>
                    <th colspan="3"><p>반환금: <span>0</span></p></th>
                    <th colspan="2"><p class="color-secondary">총매출: <span>19,000,000</span></p></th>
                </tfoot>
              </v-table>
            </fieldset>
          
          </div>
        </div>

        <!-- //field-set -->
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
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>객실명</th>
              <th>투숙형태</th>
              <th>상태</th>
              <th>입실/퇴실(예정)일시</th>
              <th>사용시간</th>
              <th>예약</th>
              <th>판매구분</th>
              <th>기본요금</th>
              <th>추가할인</th>
              <th>판매요금</th>
              <th>현금결제<br>예약결제</th>
              <th>카드결제<br>예약결제</th>
              <th>포인트결제<br>예약결제</th>
              <th>OTA결제</th>
              <th>전화번호<br>카드승인번호</th>
              <th>미수금<br>반환금</th>
              <th>메모<br>차량번호</th>
              <th>근무자</th>
              <th>비고/사유</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>302호</span></td>
              <td><span>숙박</span></td>
              <td><span></span></td>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>17:23:02</span></td>
              <td><span></span></td>
              <td><span>프런트</span></td>
              <td class="text-right"><span>50,000</span></td>
              <td class="text-right"><span>0</span></td>
              <td class="text-right"><span>50,000</span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span>1234567890</span></td>
              <td class="text-right"><span>0</span></td>
              <td class="text-center"><span>12가2816</span></td>
              <td><span>홍길동</span></td>
              <td><span></span></td>
            </tr>
            <tr>
              <td><span>302호</span></td>
              <td><span>숙박</span></td>
              <td><span></span></td>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>17:23:02</span></td>
              <td><span></span></td>
              <td><span>프런트</span></td>
              <td class="text-right"><span>50,000</span></td>
              <td class="text-right"><span>0</span></td>
              <td class="text-right"><span>50,000</span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span>1234567890</span></td>
              <td class="text-right"><span>0</span></td>
              <td class="text-center"><span>12가2816</span></td>
              <td><span>홍길동</span></td>
              <td><span></span></td>
            </tr>
            <tr>
              <td><span>302호</span></td>
              <td><span>숙박</span></td>
              <td><span></span></td>
              <td><span>2022-12-24 17:23:02</span></td>
              <td><span>17:23:02</span></td>
              <td><span></span></td>
              <td><span>프런트</span></td>
              <td class="text-right"><span>50,000</span></td>
              <td class="text-right"><span>0</span></td>
              <td class="text-right"><span>50,000</span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span>1234567890</span></td>
              <td class="text-right"><span>0</span></td>
              <td class="text-center"><span>12가2816</span></td>
              <td><span>홍길동</span></td>
              <td><span></span></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
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
  name: "check_sales",
  components: {
    Popup, VueDatePicker
  },
  data: () => ({
    popup: {
      title: "기간별 매출 집계",
      theme: "theme-popup-dark",
      size: "size-xlg",
      align: "mx-auto",
      pin: true,
    },
    date: null,
    page:1,
  }),
};
</script>
