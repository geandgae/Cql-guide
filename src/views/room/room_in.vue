<template>
  <!-- popup -->
  <Popup :popup="popup" style="width: 1000px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <div class="d-flex justify-space-between">
            <h3 class="title-sub pt-1">입실정보</h3>
            <div class="d-flex">
              <v-checkbox hide-details density="compact" color="secondary" label="무인 숙박판매" style="margin-right: 16px;"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="무인 대실판매" style="margin-right: 16px;"></v-checkbox>
              <v-checkbox hide-details density="compact" color="secondary" label="무인 예약판매"></v-checkbox>
            </div>
          </div>
          <div class="d-flex justify-space-between">
            <v-table style="width: 474px;">
              <colgroup>
                <col style="width: 90px" />
                <col />
                <col style="width: 90px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th class="text-center"><span>객실명</span></th>
                  <td>
                    <span>305호 (스위트룸)</span>
                  </td>
                  <th class="text-center">객실상태</th>
                  <td class="text-center">
                    <v-btn color="grey" size="small" style="width: 135px;">공실</v-btn>
                  </td>
                </tr>
                <tr>
                  <th class="text-center"><span>입실시간</span></th>
                  <td colspan="3">
                    <input type="text" class="input" value="2022년 / 12월 24일 / 15:35" />
                  </td>
                </tr>
                <tr>
                  <th class="text-center"><span>퇴실예정</span></th>
                  <td colspan="3">
                    <div class="d-flex">
                      <input type="text" class="input mr-2" value="2022년 / 12월 25일 / 15:30" style="width: 175px;" />
                      <div class="input-counter mr-2" style="width: 92px;">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="12시"/>
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                      <div class="input-counter" style="width: 92px;">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                        </v-btn>
                        <input type="text" value="12시" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center"><span>인원</span></th>
                  <td>
                    <div class="input-counter mr-2" style="width: 120px;">
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-minus</v-icon>
                      </v-btn>
                      <input type="text" value="12시"/>
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-plus</v-icon>
                      </v-btn>
                    </div>
                  </td>
                  <th class="text-center">차량번호</th>
                  <td class="text-center">
                    <div class="d-flex" style="align-items: center;">
                      <input type="text" class="input" value="" placeholder="차량번호" style="width: 100px;margin-right: 6px;"/>
                      <v-checkbox hide-details density="compact" color="secondary" label=""></v-checkbox>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center"><span>도어락</span></th>
                  <td colspan="3">
                    <p>도아락 ID 없음( <span class="color-secondary">도아락 ID를 등록해 주세요!</span> )</p>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <v-table style="width: 474px;">
              <colgroup>
                <col style="width: 90px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th class="text-center"><span>예약</span></th>
                  <td>
                    <div class="d-flex" style="align-items: center;">
                      <v-select 
                        :items="['타입1', '타입2', '타입3']" 
                        value="현재 입실가능 예약없음" 
                        density="compact" 
                        class="mr-2" 
                        hide-details
                        style="width:328px !important;">
                      </v-select>
                      <v-btn color="darkgrey" class="pa-0" style="min-width: auto; width: 28px; height: 28px">
                        <v-icon size="medium" color="white">mdi-format-list-bulleted</v-icon>
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center"><span>예약</span></th>
                  <td>
                    <div class="d-flex" style="align-items: center;">
                      <v-radio-group hide-details density="compact" inline>
                        <v-radio color="secondary" label="대상" value="대상"></v-radio>
                        <v-radio color="secondary" label="숙박" value="숙박" class="ml-4"></v-radio>
                        <v-radio color="secondary" label="장기" value="장기" class="ml-4"></v-radio>
                      </v-radio-group>
                      <div class="input-counter" style="width: 92px;">
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-minus</v-icon>
                        </v-btn>
                        <input type="text" value="12시" />
                        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                          <v-icon size="small" color="white">mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center"><span>입실옵션</span></th>
                  <td>
                    <div class="d-flex" style="align-items: center;">
                      <v-select 
                        :items="['타입1', '타입2', '타입3']" 
                        value="없음" 
                        density="compact" 
                        class="mr-2" 
                        hide-details
                        style="width:300px !important;">
                      </v-select>
                      <v-btn color="darkgrey" size="small" class="pa-0">
                        취소
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="text-center"><span>입실옵션</span></th>
                  <td>
                    <div class="d-flex" style="align-items: center;">
                      <textarea class="input mr-2"
                        style="width:310px;height:74px;resize: none;margin:4px 0"
                      >
                      </textarea>
                      <v-btn color="darkgrey" size="small" class="pa-0" style="max-width:56px">
                        지우기
                      </v-btn>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>            
          </div>
        </fieldset>
        <!-- //field-set -->

        <!-- field-set -->
        <fieldset class="field-set mt-2">
          <v-table>
            <colgroup>
              <col style="width: 77px" />
              <col style="width: 52px"/>
              <col style="width: 110px" />
              <col style="width: *"/>
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">알람</th>
                <td class="text-center">
                  <v-checkbox hide-details density="compact" color="secondary" label=""></v-checkbox>
                </td>
                <th class="text-center">
                  <div class="d-flex align-center">
                    <span class="mr-2">객실표시</span>
                    <span><v-checkbox hide-details density="compact" color="secondary" label=""></v-checkbox></span>
                  </div>
                </th>
                <td>
                  <div class="d-flex align-center">
                    <input type="text" class="input" placeholder="객실화면에 표시 할 메모를 입력하세요." style="width: 350px;" />
                    <v-btn color="darkgrey" class="ml-2" size="small" style="max-width: 56px">지우기</v-btn>
                    <span class="ml-4">표시 투명도</span>
                    <div class="input-counter ml-2" style="width: 80px;">
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-minus</v-icon>
                      </v-btn>
                      <input type="text" value="7"/>
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-plus</v-icon>
                      </v-btn>
                    </div>
                    <span class="ml-2">투명(0) ~ 불투명(10)</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->

        <!-- field-set -->
        <fieldset class="field-set">
          <div class="d-flex justify-space-between">
            <h3 class="title-sub pt-1">요금설정</h3>
            <div class="d-flex align-center mb-2">
              <p style="position: relative;"><i class="text-secondary" style="position: absolute;top:3px;left: -13px;">*</i> <span>포인트조회</span></p>
              <input type="text" class="input ml-2" value="010" style="width: 150px;background-color: #fff;" />
              <v-btn size="small" variant="outlined" color="secondary" class="ml-2" style="background-color: #fff;">조회</v-btn>
            </div>
          </div>
          <v-table>
            <colgroup>
              <col style="width: 78px" />
              <col />
              <col style="width: 78px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center"><span>기본요금</span></th>
                <td>
                  <div class="d-flex align-center">
                    <input type="text" class="input" value="50,000원" style="width: 130px;text-align: right;" />
                    <v-checkbox hide-details density="compact" color="secondary" label="현금" class="ml-2" style="width: 70px;"></v-checkbox>
                    <div class="input-counter ml-2" style="width: 130px;">
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-minus</v-icon>
                      </v-btn>
                      <input type="text" value="0원" style="text-align: right;"/>
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-plus</v-icon>
                      </v-btn>
                    </div>
                    <div class="room-btn-area">
                      <v-btn color="darkgrey ml-2" append-icon="mdi-plus" style="max-width: 54px;height: 28px;">
                        잔액
                        <template v-slot:append>
                          <v-icon color="white"></v-icon>
                        </template>
                      </v-btn>
                      <v-btn color="grey" class="custom-btn-icon-white ml-2" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                        1.0
                        <template v-slot:prepend>
                          <v-icon size="small" color="pa-0 ma-0"></v-icon>
                        </template>
                      </v-btn>
                      <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                        5.0
                        <template v-slot:prepend>
                          <v-icon size="small" color="pa-0 ma-0"></v-icon>
                        </template>
                      </v-btn>
                      <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                        10
                        <template v-slot:prepend>
                          <v-icon size="small" color="pa-0 ma-0"></v-icon>
                        </template>
                      </v-btn>
                    </div>
                  </div>
                </td>
                <th class="text-center">객실상태</th>
                <td class="text-center">
                  <input type="text" class="input" value="50,000원" style="text-align: right; width: 170px;" />
                </td>
              </tr>
              <tr>
                <th class="text-center"><span>추가/할인</span></th>
                <td>
                  <div class="d-flex align-center">
                    <div class="input-counter" style="width: 130px;">
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-minus</v-icon>
                      </v-btn>
                      <input type="text" value="0원" style="text-align: right;"/>
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-plus</v-icon>
                      </v-btn>
                    </div>
                    <v-checkbox hide-details density="compact" color="secondary" label="카드" class="ml-2" style="width: 70px;"></v-checkbox>
                    <div class="input-counter ml-2" style="width: 130px;">
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-minus</v-icon>
                      </v-btn>
                      <input type="text" value="50,000원" style="text-align: right;"/>
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                        <v-icon size="small" color="white">mdi-plus</v-icon>
                      </v-btn>
                    </div>
                    <div class="room-btn-area">
                      <v-btn color="darkgrey ml-2" append-icon="mdi-plus" style="max-width: 54px;height: 28px;">
                        잔액
                        <template v-slot:append>
                          <v-icon color="white"></v-icon>
                        </template>
                      </v-btn>
                      <v-btn color="grey" class="custom-btn-icon-white ml-2" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                        1.0
                        <template v-slot:prepend>
                          <v-icon size="small" color="pa-0 ma-0"></v-icon>
                        </template>
                      </v-btn>
                      <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                        5.0
                        <template v-slot:prepend>
                          <v-icon size="small" color="pa-0 ma-0"></v-icon>
                        </template>
                      </v-btn>
                      <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                        10
                        <template v-slot:prepend>
                          <v-icon size="small" color="pa-0 ma-0"></v-icon>
                        </template>
                      </v-btn>
                    </div>
                  </div>
                </td>
                <th class="text-center">미수금</th>
                <td class="text-center">
                  <input type="text" class="input" value="0원" style="text-align: right; width: 170px;" />
                </td>
              </tr>
              <tr>
                <th class="text-center"><span>보유포인트</span></th>
                <td>
                  <div class="d-flex align-center">
                    <input type="text" class="input" value="0원" style="width: 130px;text-align: right;" />
                    <v-checkbox hide-details density="compact" color="secondary" label="포인트" class="ml-2" style="width: 70px;"></v-checkbox>
                    <div class="input-counter ml-2" style="width: 130px;">
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0" disabled>
                        <v-icon size="small" color="white">mdi-minus</v-icon>
                      </v-btn>
                      <input type="text" value="0원" style="text-align: right;"/>
                      <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0" disabled>
                        <v-icon size="small" color="white">mdi-plus</v-icon>
                      </v-btn>
                    </div>
                    <div class="room-btn-area">
                      <v-btn color="secondary ml-2" append-icon="mdi-plus" style="max-width: 54px;height: 28px;">
                        잔액
                        <template v-slot:append>
                          <v-icon color="white"></v-icon>
                        </template>
                      </v-btn>
                      <v-btn color="grey" class="custom-btn-icon-white ml-2" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                        1.0
                        <template v-slot:prepend>
                          <v-icon size="small" color="pa-0 ma-0"></v-icon>
                        </template>
                      </v-btn>
                      <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                        5.0
                        <template v-slot:prepend>
                          <v-icon size="small" color="pa-0 ma-0"></v-icon>
                        </template>
                      </v-btn>
                      <v-btn color="grey" class="custom-btn-icon-white ml-1" prepend-icon="mdi-plus" size="small" style="max-width: 38px;height: 28px;">
                        10
                        <template v-slot:prepend>
                          <v-icon size="small" color="pa-0 ma-0"></v-icon>
                        </template>
                      </v-btn>
                    </div>
                  </div>
                </td>
                <th class="text-center">적립포인트</th>
                <td class="text-center">
                  <input type="text" class="input" value="0원" style="text-align: right; width: 170px;" />
                </td>
              </tr>

            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->

        <!-- field-set -->
        <fieldset class="field-set">
          <div class="d-flex justify-space-between">
            <h3 class="title-sub pt-1">난방설정</h3>
            <v-btn size="small" variant="outlined" color="secondary" class="ml-2" style="background-color: #fff;">기본값</v-btn>
          </div>
          <v-table>
            <colgroup>
              <col style="width: 78px" />
              <col />
              <col style="width: 78px" />
              <col />
              <col style="width: 94px" />
              <col />
              <col style="width: 84px" />
              <col />
              <col style="width: 78px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center"><span>현재온도</span></th>
                <td>
                  <input type="text" class="input" value="0 ℃" style="text-align: right; width: 80px;" />
                </td>
                <th class="text-center"><span>적응온도</span></th>
                <td colspan="8">
                  <div class="input-counter mr-2" style="width: 80px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="28"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
              <tr>
                <th class="text-center"><span>사용중</span></th>
                <td class="text-center">
                  <div class="input-counter mr-2" style="width: 80px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="28"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center"><span>외출</span></th>
                <td class="text-center">
                  <div class="input-counter mr-2" style="width: 80px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="25"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center"><span>청소/점검대기</span></th>
                <td class="text-center">
                  <div class="input-counter mr-2" style="width: 80px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="23"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center"><span>청소/점검중</span></th>
                <td class="text-center">
                  <div class="input-counter mr-2" style="width: 80px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="21"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
                <th class="text-center"><span>공실</span></th>
                <td class="text-center">
                  <div class="input-counter mr-2" style="width: 80px;">
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-down</v-icon>
                    </v-btn>
                    <input type="text" value="20"/>
                    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                      <v-icon size="small" color="white">mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->
        <!-- field-set -->
        <fieldset class="field-set">          
          <h3 class="title-sub pt-1">상태변경</h3>
              <v-btn-toggle
              v-model="text"
              rounded="0"
              color="g-secondary"
              class="check-btns mt-2"
            >
              <v-btn value="입실">
                입실
              </v-btn>
              <v-btn value="퇴실">
                퇴실
              </v-btn>
              <v-btn value="외출">
                외출
              </v-btn>
              <v-btn value="청소지시">
                청소지시
              </v-btn>
              <v-btn value="공실처리">
                공실처리
              </v-btn>
              <v-btn value="대실변경">
                대실변경
              </v-btn>
              <v-btn value="사용연장">
                사용연장
              </v-btn>
              <v-btn value="객실이동">
                객실이동
              </v-btn>
            </v-btn-toggle>
        </fieldset>
        <!-- //field-set -->
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <template v-slot:footer>
      <div class="btns">
        <v-btn color="darkgrey" size="large" style="min-width: 150px">취소</v-btn>
        <v-btn color="primary" size="large" style="min-width: 150px">저장</v-btn>
      </div>
    </template>
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "room_in",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "305호 [스위트룸] 입실처리",
      theme: "theme-popup-dark",
      size: "size-lg",
      align: "mx-auto",
      pin: true,
    },
    text: "입실",
  }),
};
</script>
