<template>
  <!-- field-set -->
  <fieldset class="field-set">
    <h3 class="field-title mb-2">구독목록</h3>
    <!-- table -->
    <v-table fixed-header height="248" class="overflow-y-auto text-center dense-dark mt-2">
      <colgroup>
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>선택</th>
          <th>서비스명</th>
          <th>유료여부</th>
          <th>결제유형</th>
          <th>구독 시작일</th>
          <th>구독 만료일</th>
          <th>평가판 만료일</th>
          <th>신청상태</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>

        <tr class="newapp">
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>메이드 동시 접속 라이선스</td>
          <td>유료</td>
          <td>월간결제</td>
          <td>2021-12-30</td>
          <td class="color-aqua">2024-12-30</td>
          <td>2022-12-30</td>
          <td class="color-secondary">신규신청</td>
          <td>
            <v-btn color="grey" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
        <tr class="active">
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>SMS 문자 발송 서비스</td>
          <td>유료</td>
          <td>월간결제</td>
          <td>2021-12-30</td>
          <td class="color-aqua">2024-12-30</td>
          <td>2022-12-30</td>
          <td>구독완료</td>
          <td>
            <v-btn color="secondary" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
        <tr class="newapp">
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>OTA 예약 자동 등록 서비스</td>
          <td>유료</td>
          <td>월간결제</td>
          <td>2022-12-30</td>
          <td class="color-aqua">2024-12-30</td>
          <td>2022-12-30</td>
          <td class="color-secondary">신규신청</td>
          <td>
            <v-btn color="grey" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
        <tr v-for="item in 20" :key="item">
          <td>
            <v-radio-group hide-details density="compact" inline>
              <v-radio color="secondary" label="" value=""></v-radio>
            </v-radio-group>
          </td>
          <td>예약번호 QR코드 발송 서비스</td>
          <td>유료</td>
          <td>월간결제</td>
          <td>2022-12-30</td>
          <td class="color-aqua">2024-12-30</td>
          <td>2022-12-30</td>
          <td>구독완료</td>
          <td>
            <v-btn color="grey" size="small" style="min-width: 50px; height: 20px;">삭제</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <!-- //table -->
  </fieldset>

  <!-- 신규신청 -->
  <fieldset class="field-set">
    <div class="field-inner d-flex align-center justify-space-between">
      <h3 class="field-title mb-2">신규신청</h3>
      <v-btn color="white" class="custom-btn-icon-secondary mb-2 pr-3 color-secondary" prepend-icon="mdi-plus-thick"
        size="small" style="width: 80px; color:#fc6060 !important">
        <template v-slot:prepend>
          <v-icon class="pa-0 ma-0 pl-2 color-secondary"></v-icon>
        </template>
        구독추가
      </v-btn>
    </div>

    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px;">구독 서비스명</th>
          <td style="width: 240px;">
            <div class="field-content color-primary" style="font-weight: 500;">메이드 동시 접속 라이선스</div>
          </td>
          <th class="text-center" style="width: 100px;">유료여부</th>
          <td style="width: 120px;">
            <div class="field-content color-secondary" style="font-weight: 500;">유료</div>
          </td>
          <th class="text-center" style="width: 100px;">구독 신청 상태</th>
          <td>
            <div class="py-1" style="text-align: center; background-color: #fbf6c7; font-weight: 500;">메이드 동시 접속 라이선스
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 116px;">구독 신청 시작일</th>
          <td>
            <input type="text" class="input" />
          </td>
          <th class="text-center" style="width: 116px;">구독 신청 종료일</th>
          <td>
            <input type="text" class="input" />
          </td>
          <th class="text-center" style="width: 152px;">추가 신청 라이선스 Copy</th>
          <td>
            <div class="input-counter" style="width: 120px">
              <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
                <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
              </v-btn>
              <input type="text" value="0 Copy" />
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
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 124px;">구독 서비스 시작일</th>
          <td>
            <div class="field-content">2020-04-30</div>
          </td>
          <th class="text-center" style="width: 124px;">구독 서비스 만료일</th>
          <td>
            <div class="field-content">2022-04-30</div>
          </td>
          <th class="text-center" style="width: 100px;">평가판 종료일</th>
          <td>
            <div class="field-content">2022-04-30</div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px;">결제유형</th>
          <td>
            <div class="field-content">월간결제</div>
          </td>
          <th class="text-center" style="width: 130px;">라이선스별 구독요금</th>
          <td>
            <div class="field-content">10,000원</div>
          </td>
          <th class="text-center" style="width: 100px;">구독 할인 요금</th>
          <td>
            <div class="field-content">0원</div>
          </td>
          <th class="text-center" style="width: 130px;">추가 라이선스 Copy</th>
          <td>
            <div class="field-content">5 Copy</div>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="d-flex align-center justify-end my-2" style="gap: 8px;">
      <v-btn color="darkgrey" size="small" style="min-width: 80px">구독변경</v-btn>
      <v-btn color="grey" size="small" style="min-width: 80px">취소</v-btn>
    </div>
  </fieldset>
  <!-- //신규신청 -->

  <!-- 구독추가 -->
  <fieldset class="field-set">
    <div class="field-inner d-flex align-center justify-space-between">
      <h3 class="field-title mb-2">구독등록</h3>
      <v-btn color="white" class="custom-btn-icon-secondary mb-2 pr-3 color-secondary" prepend-icon="mdi-plus-thick"
        size="small" style="width: 80px; color:#fc6060 !important">
        <template v-slot:prepend>
          <v-icon class="pa-0 ma-0 pl-2 color-secondary"></v-icon>
        </template>
        구독추가
      </v-btn>
    </div>

    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px;">구독 서비스명</th>
          <td style="width: 240px;">
            <v-select :items="['구독을 선택 해주세요.', 'select2', 'select3', 'select4', 'select5']" value="구독을 선택 해주세요."
              density="compact" hide-details style="width: 219px">
            </v-select>
          </td>
          <th class="text-center" style="width: 100px;">유료여부</th>
          <td style="width: 120px;">
            <div class="field-content">유료여부</div>
          </td>
          <th class="text-center" style="width: 100px;">구독 신청 상태</th>
          <td>
            <div class="py-1" style="text-align: center; background-color: #fbf6c7; font-weight: 500;">메이드 동시 접속 라이선스
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 124px;">구독 신청 시작일</th>
          <td>
            <v-select :items="['2022-04-30', 'select2', 'select3', 'select4', 'select5']" value="2022-04-30"
              density="compact" hide-details style="width: 100%">
            </v-select>
          </td>
          <th class="text-center" style="width: 124px;">구독 신청 종료일</th>
          <td>
            <v-select :items="['2022-04-30', 'select2', 'select3', 'select4', 'select5']" value="2022-04-30"
              density="compact" hide-details style="width: 100%">
            </v-select>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px;">결제유형</th>
          <td>
            <div class="field-content">결제유형</div>
          </td>
          <th class="text-center" style="width: 100px;">구독요금</th>
          <td style="width: 180px;">
            <div class="field-content">0원</div>
          </td>
          <th class="text-center" style="width: 130px;">구독 할인 요금</th>
          <td style="width: 180px;">
            <div class="field-content">0원</div>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="d-flex align-center justify-end my-2" style="gap: 8px;">
      <v-btn color="darkgrey" size="small" style="min-width: 80px">신청</v-btn>
      <v-btn color="grey" size="small" style="min-width: 80px">취소</v-btn>
    </div>
  </fieldset>
  <!-- //구독추가 -->

  <!-- 구독정보 -->
  <fieldset class="field-set">
    <div class="field-inner d-flex align-center justify-space-between">
      <h3 class="field-title mb-2">구독정보</h3>
      <v-btn color="white" class="custom-btn-icon-secondary mb-2 pr-3 color-secondary" prepend-icon="mdi-plus-thick"
        size="small" style="width: 80px; color:#fc6060 !important">
        <template v-slot:prepend>
          <v-icon class="pa-0 ma-0 pl-2 color-secondary"></v-icon>
        </template>
        구독추가
      </v-btn>
    </div>

    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px;">구독 서비스명</th>
          <td style="width: 240px;">
            <div class="field-content color-primary" style="font-weight: 500;">OTA 예약 자동 등록 서비스</div>
          </td>
          <th class="text-center" style="width: 100px;">유료여부</th>
          <td style="width: 120px;">
            <div class="field-content color-secondary" style="font-weight: 500;">유료</div>
          </td>
          <th class="text-center" style="width: 100px;">구독 신청 상태</th>
          <td>
            <div class="color-deepgrey" style="font-weight: 500;">구독 완료
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 124px;">구독 서비스 시작일</th>
          <td>
            <div class="field-content">2020-04-30</div>
          </td>
          <th class="text-center" style="width: 124px;">구독 서비스 만료일</th>
          <td>
            <div class="field-content">2022-04-30</div>
          </td>
          <th class="text-center" style="width: 100px;">평가판 종료일</th>
          <td>
            <div class="field-content">2022-04-30</div>
          </td>

        </tr>
      </tbody>
    </v-table>
  </fieldset>

  <fieldset class="field-set">
    <v-table>
      <tbody>
        <tr>
          <th class="text-center" style="width: 100px;">결제유형</th>
          <td>
            <div class="field-content">월간결제</div>
          </td>
          <th class="text-center" style="width: 100px;">구독요금</th>
          <td style="width: 180px;">
            <div class="field-content">10,000원</div>
          </td>
          <th class="text-center" style="width: 130px;">구독 할인 요금</th>
          <td style="width: 180px;">
            <div class="field-content">0원</div>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="d-flex align-center justify-end my-2" style="gap: 8px;">
      <v-btn color="darkgrey" size="small" style="min-width: 80px">구독변경</v-btn>
      <v-btn color="grey" size="small" style="min-width: 80px">취소</v-btn>
    </div>
  </fieldset>
  <!-- //구독정보 -->
  <!-- //field-set -->
</template>


<script>
export default {
  name: "SetSubscribe",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.v-btn.custom-btn-icon-secondary {
  border: 1px solid #fc6060;

  .v-btn__content {
    margin-top: -2px;
  }
}
</style>
