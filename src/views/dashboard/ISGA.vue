<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- tabs -->
      <v-item-group v-model="setting" class="board_tabs">
        <div v-for="item in tabsItem" :key="item" :value="item" class="item">
          <v-btn 
          style="height: 36px !important;padding: 8px 16px;" 
          @click="toggle(item)" 
          :class="setting === item ? 'active' : ''">
            {{ item }}
          </v-btn>
        </div>
      </v-item-group>
      <!-- //tabs -->
      <!-- popup-contents -->
      <div class="pop-contents" v-if="setting === '무인판매1'">
        <!-- v-container -->
        <v-container fluid class="board_panel">
          <v-row no-gutters>
            <!-- field-set //판매현황-->
            <fieldset class="field-set">
              <div class="field-title-area">
                <h3 class="field-title2 mb-2">판매현황</h3>
              </div>
              <v-table
              style="width: 872px;"
              >
                <colgroup>
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th class="text-center">숙박(총 건수)</th>
                    <td>
                      <div class="input-color-counter blue" style="width: 120px">
                        6
                      </div>
                    </td>
                    <th class="text-center">대실(총 건수)</th>
                    <td>
                      <div class="input-color-counter purple" style="width: 120px">
                        15
                      </div>
                    </td>
                    <th class="text-center">판매상태</th>
                    <td style="position: relative;">
                      <v-switch 
                        v-model="model"
                        hide-details
                        inset
                        style="width: 64px;"
                      >
                      </v-switch>
                      <div class="switch-label">
                        <div class="item">
                          ON
                        </div>
                        <div class="item">
                          OFF
                        </div>
                      </div>
                    </td>
                    <th class="text-center">성인인증</th>
                    <td style="position: relative;">
                      <v-switch
                        v-model="model"
                        hide-details
                        inset
                        style="width: 64px;"
                      ></v-switch>
                      <div class="switch-label">
                        <div class="item">
                          ON
                        </div>
                        <div class="item">
                          OFF
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </fieldset>
            <!-- //field-set -->
          </v-row>
          <v-row no-gutters>
            <div class="d-flex justify-space-between">
              <div class="mr-6" style="width:424px">
                <!-- field-set //전체 판매이력-->
                <fieldset class="field-set mt-4">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-4">전체 판매이력</h3>
                      <div class="" style="display: flex;text-align: justify;">
                        <v-checkbox hide-details density="compact" color="secondary" label="숙박" class="mr-3"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="대실" class="mr-3"></v-checkbox>
                        <v-select 
                         :items="['1층', '2층', '3층', '4층', '5층', '6층']"
                          value="객실선택"
                          density="compact"
                          style="width: 100px; height: 28px;"
                        >
                        </v-select>
                      </div>
                    </div>
                </fieldset>
                <!-- //field-set -->
                <!-- table -->
                <v-table fixed-header height="492" class="overflow-y-auto text-center dense-dark">
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>호실</th>
                      <th>객실명</th>
                      <th>결제</th>
                      <th>시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in 30" :key="item">
                      <td>101호</td>
                      <td>스위트룸</td>
                      <td>카드</td>
                      <td>10:36</td>
                    </tr>
                  </tbody>
                </v-table>
                <!-- //table -->
              </div>
              <div class="" style="width:424px">
                <!-- field-set //객실정보-->
                <fieldset class="field-set mt-4">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-4">객실정보</h3>
                      <div class="" style="display: flex;text-align: justify;">
                        <v-select 
                        :items="['일반룸', 'VIP룸', '스위트룸']"
                          value="층선택"
                          density="compact"
                          style="width: 100px;height: 28px;"
                        >
                        </v-select>
                      </div>
                    </div>
                    <div style="background-color: #f2f5f8; border: 1px solid #d6dbe2;padding: 8px;">
                      <div class="d-flex flex-row justify-space-between">
                        <v-sheet class="ma-1 pa-1 align-center" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">호실</span><span class="font18">360호</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 125px;">
                          <span class="mr-2">객실</span><span class="font18">스위트룸</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">유형</span><span class="room-type purple">대실</span>
                        </v-sheet>
                      </div>
                      <div class="d-flex flex-row justify-space-between">
                        <v-sheet class="ma-1 pa-1 align-center" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">입실</span><span class="room-time">17:30</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">퇴실</span><span class="room-time">17:30</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 130px;">
                          <span class="mr-2">추가시간</span><span class="room-time add">00:00</span>
                        </v-sheet>
                      </div>
                    </div>
                </fieldset>
                <!-- //field-set -->
                <!-- field-set //카드데크-->
                <fieldset class="field-set mt-2">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-2">카드데크</h3>
                    </div>
                    <v-table class="sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col style="width: 120px"/>
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>카드키/(좌)</th>
                          <td><span class="color-secondary">사용중</span></td>
                          <th>카드키/(우)</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th>통신</th>
                          <td><span class="color-secondary">단절</span></td>
                          <th>전원</th>
                          <td>키에 연동</td>
                        </tr>
                        <tr>
                          <th>바코드</th>
                          <td>미등록</td>
                          <th>전원</th>
                          <td>키에 연동</td>
                        </tr>
                      </tbody>
                    </v-table>
                </fieldset>
                <!-- //field-set -->
                <!-- field-set //객실상세-->
                <fieldset class="field-set mt-2">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-2">객실상세</h3>
                    </div>
                    <v-table class="sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col />
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>판매건수</th>
                          <td><span class="color-secondary">총2건</span></td>
                          <th>기본요금</th>
                          <td>50,000원</td>
                        </tr>
                        <tr>
                          <th>현금</th>
                          <td><span>50,000원</span><span class="color-primary">(1건)</span></td>
                          <th>카드</th>
                          <td><span>50,000원</span><span class="color-primary">(1건)</span></td>
                        </tr>
                      </tbody>
                    </v-table>
                    <v-table class="mt-2 sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col />
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>추가금액</th>
                          <td>0원</td>
                          <th>예약할인</th>
                          <td>0원</td>
                        </tr>
                        <tr>
                          <th>미수금</th>
                          <td>0원</td>
                          <th>반환금</th>
                          <td>0원</td>
                        </tr>
                      </tbody>
                    </v-table>
                    <v-table class="mt-2 sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col />
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>OTA</th>
                          <td>-</td>
                          <th>포인트</th>
                          <td>0</td>
                        </tr>
                        <tr>
                          <th>합계</th>
                          <td><span class="color-secondary">50,000원</span></td>
                          <th>차량번호</th>
                          <td><v-checkbox hide-details density="compact" color="secondary" label="26가 1234"></v-checkbox></td>
                        </tr>
                      </tbody>
                    </v-table>
                </fieldset>
                <!-- //field-set -->
              </div>
            </div>
          </v-row>
        </v-container>
         <!--// v-container -->

      </div>
      <div class="pop-contents" v-if="setting === '무인판매2'">
        <!-- v-container -->
        <v-container fluid class="board_panel">
          <v-row no-gutters>
            <!-- field-set //판매현황-->
            <fieldset class="field-set">
              <div class="field-title-area">
                <h3 class="field-title2 mb-2">판매현황</h3>
              </div>
              <v-table
              style="width: 872px;"
              >
                <colgroup>
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th class="text-center">숙박(총 건수)</th>
                    <td>
                      <div class="input-color-counter blue" style="width: 120px">
                        6
                      </div>
                    </td>
                    <th class="text-center">대실(총 건수)</th>
                    <td>
                      <div class="input-color-counter purple" style="width: 120px">
                        15
                      </div>
                    </td>
                    <th class="text-center">판매상태</th>
                    <td style="position: relative;">
                      <v-switch 
                        v-model="model"
                        hide-details
                        inset
                        style="width: 64px;"
                      >
                      </v-switch>
                      <div class="switch-label">
                        <div class="item">
                          ON
                        </div>
                        <div class="item">
                          OFF
                        </div>
                      </div>
                    </td>
                    <th class="text-center">성인인증</th>
                    <td style="position: relative;">
                      <v-switch
                        v-model="model"
                        hide-details
                        inset
                        style="width: 64px;"
                      ></v-switch>
                      <div class="switch-label">
                        <div class="item">
                          ON
                        </div>
                        <div class="item">
                          OFF
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </fieldset>
            <!-- //field-set -->
          </v-row>
          <v-row no-gutters>
            <div class="d-flex justify-space-between">
              <div class="mr-6" style="width:424px">
                <!-- field-set //전체 판매이력-->
                <fieldset class="field-set mt-4">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-4">전체 판매이력</h3>
                      <div class="" style="display: flex;text-align: justify;">
                        <v-checkbox hide-details density="compact" color="secondary" label="숙박" class="mr-3"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="대실" class="mr-3"></v-checkbox>
                        <v-select 
                         :items="['1층', '2층', '3층', '4층', '5층', '6층']"
                          value="객실선택"
                          density="compact"
                          style="width: 100px; height: 28px;"
                        >
                        </v-select>
                      </div>
                    </div>
                </fieldset>
                <!-- //field-set -->
                <!-- table -->
                <v-table fixed-header height="492" class="overflow-y-auto text-center dense-dark">
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>호실</th>
                      <th>객실명</th>
                      <th>결제</th>
                      <th>시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in 30" :key="item">
                      <td>101호</td>
                      <td>스위트룸</td>
                      <td>카드</td>
                      <td>10:36</td>
                    </tr>
                  </tbody>
                </v-table>
                <!-- //table -->
              </div>
              <div class="" style="width:424px">
                <!-- field-set //객실정보-->
                <fieldset class="field-set mt-4">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-4">객실정보</h3>
                      <div class="" style="display: flex;text-align: justify;">
                        <v-select 
                        :items="['일반룸', 'VIP룸', '스위트룸']"
                          value="층선택"
                          density="compact"
                          style="width: 100px;height: 28px;"
                        >
                        </v-select>
                      </div>
                    </div>
                    <div style="background-color: #f2f5f8; border: 1px solid #d6dbe2;padding: 8px;">
                      <div class="d-flex flex-row justify-space-between">
                        <v-sheet class="ma-1 pa-1 align-center" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">호실</span><span class="font18">360호</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 125px;">
                          <span class="mr-2">객실</span><span class="font18">스위트룸</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">유형</span><span class="room-type purple">대실</span>
                        </v-sheet>
                      </div>
                      <div class="d-flex flex-row justify-space-between">
                        <v-sheet class="ma-1 pa-1 align-center" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">입실</span><span class="room-time">17:30</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">퇴실</span><span class="room-time">17:30</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 130px;">
                          <span class="mr-2">추가시간</span><span class="room-time add">00:00</span>
                        </v-sheet>
                      </div>
                    </div>
                </fieldset>
                <!-- //field-set -->
                <!-- field-set //카드데크-->
                <fieldset class="field-set mt-2">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-2">카드데크</h3>
                    </div>
                    <v-table class="sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col style="width: 120px"/>
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>카드키/(좌)</th>
                          <td><span class="color-secondary">사용중</span></td>
                          <th>카드키/(우)</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th>통신</th>
                          <td><span class="color-secondary">단절</span></td>
                          <th>전원</th>
                          <td>키에 연동</td>
                        </tr>
                        <tr>
                          <th>바코드</th>
                          <td>미등록</td>
                          <th>전원</th>
                          <td>키에 연동</td>
                        </tr>
                      </tbody>
                    </v-table>
                </fieldset>
                <!-- //field-set -->
                <!-- field-set //객실상세-->
                <fieldset class="field-set mt-2">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-2">객실상세</h3>
                    </div>
                    <v-table class="sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col />
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>판매건수</th>
                          <td><span class="color-secondary">총2건</span></td>
                          <th>기본요금</th>
                          <td>50,000원</td>
                        </tr>
                        <tr>
                          <th>현금</th>
                          <td><span>50,000원</span><span class="color-primary">(1건)</span></td>
                          <th>카드</th>
                          <td><span>50,000원</span><span class="color-primary">(1건)</span></td>
                        </tr>
                      </tbody>
                    </v-table>
                    <v-table class="mt-2 sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col />
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>추가금액</th>
                          <td>0원</td>
                          <th>예약할인</th>
                          <td>0원</td>
                        </tr>
                        <tr>
                          <th>미수금</th>
                          <td>0원</td>
                          <th>반환금</th>
                          <td>0원</td>
                        </tr>
                      </tbody>
                    </v-table>
                    <v-table class="mt-2 sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col />
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>OTA</th>
                          <td>-</td>
                          <th>포인트</th>
                          <td>0</td>
                        </tr>
                        <tr>
                          <th>합계</th>
                          <td><span class="color-secondary">50,000원</span></td>
                          <th>차량번호</th>
                          <td><v-checkbox hide-details density="compact" color="secondary" label="26가 1234"></v-checkbox></td>
                        </tr>
                      </tbody>
                    </v-table>
                </fieldset>
                <!-- //field-set -->
              </div>
            </div>
          </v-row>
        </v-container>
         <!--// v-container -->
      </div>
      <div class="pop-contents" v-if="setting === '무인판매3'">
        <!-- v-container -->
        <v-container fluid class="board_panel">
          <v-row no-gutters>
            <!-- field-set //판매현황-->
            <fieldset class="field-set">
              <div class="field-title-area">
                <h3 class="field-title2 mb-2">판매현황</h3>
              </div>
              <v-table
              style="width: 872px;"
              >
                <colgroup>
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                  <col style="width: 100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th class="text-center">숙박(총 건수)</th>
                    <td>
                      <div class="input-color-counter blue" style="width: 120px">
                        6
                      </div>
                    </td>
                    <th class="text-center">대실(총 건수)</th>
                    <td>
                      <div class="input-color-counter purple" style="width: 120px">
                        15
                      </div>
                    </td>
                    <th class="text-center">판매상태</th>
                    <td style="position: relative;">
                      <v-switch 
                        v-model="model"
                        hide-details
                        inset
                        style="width: 64px;"
                      >
                      </v-switch>
                      <div class="switch-label">
                        <div class="item">
                          ON
                        </div>
                        <div class="item">
                          OFF
                        </div>
                      </div>
                    </td>
                    <th class="text-center">성인인증</th>
                    <td style="position: relative;">
                      <v-switch
                        v-model="model"
                        hide-details
                        inset
                        style="width: 64px;"
                      ></v-switch>
                      <div class="switch-label">
                        <div class="item">
                          ON
                        </div>
                        <div class="item">
                          OFF
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </fieldset>
            <!-- //field-set -->
          </v-row>
          <v-row no-gutters>
            <div class="d-flex justify-space-between">
              <div class="mr-6" style="width:424px">
                <!-- field-set //전체 판매이력-->
                <fieldset class="field-set mt-4">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-4">전체 판매이력</h3>
                      <div class="" style="display: flex;text-align: justify;">
                        <v-checkbox hide-details density="compact" color="secondary" label="숙박" class="mr-3"></v-checkbox>
                        <v-checkbox hide-details density="compact" color="secondary" label="대실" class="mr-3"></v-checkbox>
                        <v-select 
                         :items="['1층', '2층', '3층', '4층', '5층', '6층']"
                          value="객실선택"
                          density="compact"
                          style="width: 100px; height: 28px;"
                        >
                        </v-select>
                      </div>
                    </div>
                </fieldset>
                <!-- //field-set -->
                <!-- table -->
                <v-table fixed-header height="492" class="overflow-y-auto text-center dense-dark">
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>호실</th>
                      <th>객실명</th>
                      <th>결제</th>
                      <th>시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in 30" :key="item">
                      <td>101호</td>
                      <td>스위트룸</td>
                      <td>카드</td>
                      <td>10:36</td>
                    </tr>
                  </tbody>
                </v-table>
                <!-- //table -->
              </div>
              <div class="" style="width:424px">
                <!-- field-set //객실정보-->
                <fieldset class="field-set mt-4">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-4">객실정보</h3>
                      <div class="" style="display: flex;text-align: justify;">
                        <v-select 
                        :items="['일반룸', 'VIP룸', '스위트룸']"
                          value="층선택"
                          density="compact"
                          style="width: 100px;height: 28px;"
                        >
                        </v-select>
                      </div>
                    </div>
                    <div style="background-color: #f2f5f8; border: 1px solid #d6dbe2;padding: 8px;">
                      <div class="d-flex flex-row justify-space-between">
                        <v-sheet class="ma-1 pa-1 align-center" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">호실</span><span class="font18">360호</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 125px;">
                          <span class="mr-2">객실</span><span class="font18">스위트룸</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">유형</span><span class="room-type purple">대실</span>
                        </v-sheet>
                      </div>
                      <div class="d-flex flex-row justify-space-between">
                        <v-sheet class="ma-1 pa-1 align-center" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">입실</span><span class="room-time">17:30</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 110px;">
                          <span class="mr-2">퇴실</span><span class="room-time">17:30</span>
                        </v-sheet>
                        <v-sheet class="ma-1 pa-1" style="background-color: #f2f5f8;width: 130px;">
                          <span class="mr-2">추가시간</span><span class="room-time add">00:00</span>
                        </v-sheet>
                      </div>
                    </div>
                </fieldset>
                <!-- //field-set -->
                <!-- field-set //카드데크-->
                <fieldset class="field-set mt-2">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-2">카드데크</h3>
                    </div>
                    <v-table class="sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col style="width: 120px"/>
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>카드키/(좌)</th>
                          <td><span class="color-secondary">사용중</span></td>
                          <th>카드키/(우)</th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th>통신</th>
                          <td><span class="color-secondary">단절</span></td>
                          <th>전원</th>
                          <td>키에 연동</td>
                        </tr>
                        <tr>
                          <th>바코드</th>
                          <td>미등록</td>
                          <th>전원</th>
                          <td>키에 연동</td>
                        </tr>
                      </tbody>
                    </v-table>
                </fieldset>
                <!-- //field-set -->
                <!-- field-set //객실상세-->
                <fieldset class="field-set mt-2">
                    <div class="field-title-area">
                      <h3 class="field-title2 mb-2">객실상세</h3>
                    </div>
                    <v-table class="sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col />
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>판매건수</th>
                          <td><span class="color-secondary">총2건</span></td>
                          <th>기본요금</th>
                          <td>50,000원</td>
                        </tr>
                        <tr>
                          <th>현금</th>
                          <td><span>50,000원</span><span class="color-primary">(1건)</span></td>
                          <th>카드</th>
                          <td><span>50,000원</span><span class="color-primary">(1건)</span></td>
                        </tr>
                      </tbody>
                    </v-table>
                    <v-table class="mt-2 sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col />
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>추가금액</th>
                          <td>0원</td>
                          <th>예약할인</th>
                          <td>0원</td>
                        </tr>
                        <tr>
                          <th>미수금</th>
                          <td>0원</td>
                          <th>반환금</th>
                          <td>0원</td>
                        </tr>
                      </tbody>
                    </v-table>
                    <v-table class="mt-2 sm">
                      <colgroup>
                        <col style="width: 90px" />
                        <col />
                        <col style="width: 90px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>OTA</th>
                          <td>-</td>
                          <th>포인트</th>
                          <td>0</td>
                        </tr>
                        <tr>
                          <th>합계</th>
                          <td><span class="color-secondary">50,000원</span></td>
                          <th>차량번호</th>
                          <td><v-checkbox hide-details density="compact" color="secondary" label="26가 1234"></v-checkbox></td>
                        </tr>
                      </tbody>
                    </v-table>
                </fieldset>
                <!-- //field-set -->
              </div>
            </div>
          </v-row>
        </v-container>
         <!--// v-container -->
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "settingEnv",
  components: {
    Popup,
  },
  data() {
    return {
      popup: {
        title: "ISGA",
        theme: "theme-popup-light",
        size: "size-md",
        align: "mx-auto",
      },
      setting: "무인판매1",
      tabsItem: [
        "무인판매1",
        "무인판매2",
        "무인판매3",
      ],
      model: true,
    };
  },
  methods: {
    toggle(val) {
      this.setting = val;
    },
  },
};
</script>
