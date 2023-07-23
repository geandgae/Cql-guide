<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <v-table>
            <colgroup>
              <col style="width: 243px" />
              <col style="width: 110px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-center" style="gap:8px;">
                    <v-btn color="secondary" size="small" style="min-width: 70px">전체선택</v-btn>
                    <v-btn color="grey" variant="outlined" size="small" style="min-width: 70px">선택해제</v-btn>
                    <v-btn color="grey" variant="outlined" size="small" style="min-width: 70px">선택반전</v-btn>
                  </div>
                </td>
                <th class="text-center">객실타입 선택</th>
                <td>
                  <v-radio-group hide-details density="compact" inline>
                    <v-radio color="secondary" label="VIP룸" value="VIP룸"></v-radio>
                    <v-radio color="secondary" label="스위트룸" value="스위트룸" class="ml-4"></v-radio>
                    <v-radio color="secondary" label="일반실" value="일반실" class="ml-4"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!-- //field-set -->
        <v-row no-gutters class="mt-4" style="min-height: 630px">
          <!-- left-->
          <div class="flex-grow-1">
            <!-- table -->
            <v-table fixed-header height="630" class="overflow-y-auto text-center dense-dark">
              <thead>
                <tr>
                  <th>선택</th>
                  <th>객실타입</th>
                  <th>객실명</th>
                  <th>숙박현황</th>
                  <th>객실상태</th>
                  <th>키상태</th>
                  <th>출입문</th>
                  <th>사용중 &#8451;</th>
                  <th>외출 &#8451;</th>
                  <th>청소대기 &#8451;</th>
                  <th>청소중 &#8451;</th>
                  <th>공실 &#8451;</th>
                  <th>무인숙박판매</th>
                  <th>무인대실판매</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <v-checkbox hide-details density="compact" color="secondary"></v-checkbox>
                  </td>
                  <td>일반실</td>
                  <td>201호</td>
                  <td>공실</td>
                  <td>공실</td>
                  <td>NO KEY</td>
                  <td>문 <span class="color-primary">[닫힘]</span></td>
                  <td>26</td>
                  <td>26</td>
                  <td>26</td>
                  <td>26</td>
                  <td>26</td>
                  <td>허용</td>
                  <td>허용</td>
                </tr>
                <tr>
                  <td>
                    <v-checkbox hide-details density="compact" color="secondary"></v-checkbox>
                  </td>
                  <td>일반실</td>
                  <td>201호</td>
                  <td>공실</td>
                  <td>공실</td>
                  <td>
                    <div class="d-inline-flex align-center">
                      <div class="mr-1">고객키</div>
                      <v-icon color="secondary">mdi-close-thick</v-icon>
                    </div>
                  </td>
                  <td>문 <span class="color-secondary">[열림]</span></td>
                  <td>26</td>
                  <td>26</td>
                  <td>26</td>
                  <td>26</td>
                  <td>26</td>
                  <td><span class="color-secondary">중지</span></td>
                  <td><span class="color-secondary">중지</span></td>
                </tr>
                <tr>
                  <td>
                    <v-checkbox hide-details density="compact" color="secondary"></v-checkbox>
                  </td>
                  <td>일반실</td>
                  <td>201호</td>
                  <td>공실</td>
                  <td>공실</td>
                  <td>
                    <div class="d-inline-flex align-center">
                      <div class="mr-1">고객키</div>
                      <v-icon color="dark-grey" style="font-weight: bolder;">mdi-circle-outline</v-icon>
                    </div>
                  </td>
                  <td>문 <span class="color-secondary">[열림]</span></td>
                  <td>26</td>
                  <td>26</td>
                  <td>26</td>
                  <td>26</td>
                  <td>26</td>
                  <td><span class="color-secondary">중지</span></td>
                  <td><span class="color-secondary">중지</span></td>
                </tr>
                
              </tbody>
            </v-table>
            <!-- //table -->
          </div>
          <!-- //left-->

          <!-- right -->
          <div class="d-flex flex-column flex-shrink-0 ml-2" style="width: 274px">
            <v-sheet class="box-border pa-1 d-flex flex-wrap ctrl-box" style="gap: 6px;">
              <v-btn color="secondary" size="small" style="min-width: 84px">대실입실</v-btn>
              <v-btn v-for="item in btns" :key="item" color="grey" size="small" style="width: 84px">{{item}}</v-btn>
            </v-sheet>
            <div class="mt-4">
              <v-table>
                <tr>
                  <th class="text-left">객실 표시 내용 입력</th>
                </tr>
                <tr>
                  <td>
                    <textarea class="textarea" placeholder="표시할 내용을 입력하세요." style="height: 190px; margin: 6px 0;"></textarea>
                  </td>
                </tr>
              </v-table>
              <div class="d-flex align-center mt-1">
                <v-btn color="darkgrey" size="small" style="min-width: 135px">적용</v-btn>
                <v-btn color="primary" size="small" style="min-width: 135px" class="ml-auto">삭제</v-btn>
              </div>
            </div>
            <v-table class="mt-4">
              <colgroup>
                <col style="width: 120px" />
                <col />
              </colgroup>
              <tr>
                <th class="text-left">무인 숙박 판매</th>
                <td>
                  <v-switch v-model="model" true-value="중지" false-value="허용" :label="`${model}`" color="secondary" inset hide-details class="switch-custom"></v-switch>
                </td>
              </tr>
              <tr>
                <th class="text-left">무인 대실 판매</th>
                <td>
                  <v-switch v-model="model2" true-value="중지" false-value="허용" :label="`${model2}`" color="secondary" inset hide-details class="switch-custom"></v-switch>
                </td>
              </tr>
              <tr>
                <th class="text-left">무인 예약 판매</th>
                <td>
                  <v-switch v-model="model3" true-value="중지" false-value="허용" :label="`${model3}`" color="secondary" inset hide-details class="switch-custom"></v-switch>
                </td>
              </tr>
            </v-table>
          </div>
          <!-- //right -->
        </v-row>
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
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

export default {
  name: "RoomStatus",
  components: {
    Popup,
  },
  data: () => ({
    model: '허용',
    model2: '중지',
    model3: '허용',
    btns: [
      '청소지시', 
      '사용중 온도',
      '숙박 입실',
      '청소 완료',
      '외출중 온도',
      '입실 취소',
      '외출',
      '청소대기 온도',
      '퇴실',
      '외축복귀',
      '청소중 온도',
      '공실',
      '공실온도',
    ],
    popup: {
      title: "일괄 처리",
      theme: "theme-popup-dark",
      size: "size-xlg",
      align: "mx-auto",
    },
  }),
};
</script>
