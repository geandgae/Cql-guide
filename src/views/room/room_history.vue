<template>
  <!-- popup -->
  <Popup :popup="popup" style="width:520px; min-height:688px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <div class="d-flex align-center">
            <v-select 
            :items="['1층', '2층', '3층', '4층', '4층']" 
            value="층선택" 
            density="compact" 
            hide-details 
            style="width: 90px;margin-right:6px;background-color:#fff;">
            </v-select>
            <v-select 
            :items="['101호 스위트룸', '2층', '3층', '4층', '4층']" 
            value="객실선택" 
            density="compact" 
            hide-details 
            style="width: 130px;margin-right:6px;background-color:#fff;">
            </v-select>
            <div class="input-search">
              <input type="text" placeholder="검색어를 입력하세요" />
              <v-btn density="compact" size="small" icon="mdi-magnify"></v-btn>
            </div>
          </div>
        </fieldset>
        <!-- //field-set -->
        <!-- field-set -->
        <fieldset class="field-set mt-2">
          <div class="room-total-cost">
            <div class="total-cost">
              <p class="cost-name"> <img :src="img" alt="실시간 정산금액(합계)아이콘" />실시간 정산금액(합계)</p>
              <p class="cost-money">560,000원</p>
            </div>
          </div>
          <div class="room-form mt-2">
            <span class="form-box">예약 2건</span>
            <div class="carousel">
              <div class="carousel-item">
                <p class="case-box type1">대실</p>
                <p class="check-in">입실<span class="ml-2">12-24 / 15:00</span></p>
                <p class="check-out">퇴실<span class="ml-2">12-24 / 18:00</span></p>
                <v-btn size="sm" class="check-cancel">최소</v-btn>
              </div>
              <div class="carousel-control">
                <v-btn color="secondary" size="medium" rounded="xl" class="pa-0 left" style="min-width: auto; width: 16px; height: 16px">
                  <v-icon color="white" size="medium">mdi-menu-left</v-icon>
                </v-btn>
                <v-btn color="secondary" size="medium" rounded="xl" class="pa-0 right" style="min-width: auto; width: 16px; height: 16px">
                  <v-icon color="white" size="medium">mdi-menu-right</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="check-form mt-2">
            <span class="form-box">점검 2건</span>
            <span class="form-text">없음</span>
          </div>
          <v-table class="mt-2 sm">
            <colgroup>
              <col style="width: 80px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">객실선택</th>
                <td>
                  <div class="d-flex justify-space-between align-center">
                    <span class="color-primary">침대 커버 교체 바랍니다.</span>
                    <div style="width: 82px;">
                      <v-switch v-model="model" true-value="ON" false-value="OFF" :label="`${model}`" color="secondary" inset hide-details></v-switch>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>

          <v-table class="mt-2 sm">
            <colgroup>
              <col style="width: 80px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">고객메모</th>
                <td>
                    <span class="color-primary">샴푸가 너무 오래된듯 합니다. 교체 좀 하세요.</span>
                </td>
              </tr>
            </tbody>
          </v-table>

          <v-table class="mt-2 sm">
            <colgroup>
              <col style="width: 80px" />
              <col />
              <col style="width: 80px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">객실상태</th>
                <td class="text-right">
                    <span>숙박</span>
                </td>
                <th class="text-center">총건수</th>
                <td class="text-right">
                    <span>4건</span>
                </td>
              </tr>
              <tr>
                <th class="text-center">기본요금</th>
                <td class="text-right">
                    <span>50,000원</span>
                </td>
                <th class="text-center">현금결제</th>
                <td class="text-right">
                    <span>160,000원</span>
                </td>
              </tr>
              <tr>
                <th class="text-center">추가요금</th>
                <td class="text-right">
                    <span>0원</span>
                </td>
                <th class="text-center">카드결제</th>
                <td class="text-right">
                    <span>400,000원</span>
                </td>
              </tr>
              <tr>
                <th class="text-center">할인요금</th>
                <td class="text-right">
                    <span>0원</span>
                </td>
                <th class="text-center">OTA결제</th>
                <td class="text-right">
                    <span>0원</span>
                </td>
              </tr>
              <tr>
                <th class="text-center">미수금</th>
                <td class="text-right">
                    <span>0원</span>
                </td>
                <th class="text-center">포인트</th>
                <td class="text-right">
                    <span>0원</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <td colspan="4" style="border-top:1px solid #d6dbe2">
                <div class="d-flex justify-space-between">
                  <p>총 이용시간<span class="color-secondary ml-2">13시간 25분</span></p>
                  <div class="total-box">
                    <p class="mr-2">숙박<span class="box-type1">1건</span></p>
                    <p class="mr-2">대상<span class="box-type2">1건</span></p>
                    <p class="mr-2">장기<span class="box-type3">1건</span></p>
                  </div>
                </div>
              </td>
            </tfoot>
          </v-table>
        </fieldset>
        <!--// field-set -->
        <field-set>
          <div class="check-form mt-2">
            <span class="form-title">청소내역</span>
            <span class="form-text">3건</span>
          </div>
          <!-- v-container -->
          <v-container fluid class="board_panel" style="padding:10px 20px">
            <v-row no-gutters>
              <!-- table -->
              <v-table fixed-header height="110" class="overflow-y-auto no-border">
              <colgroup>
                <col />
                <col style="width: 80px;"/>
              </colgroup>
              <tbody>
                <tr>
                  <td><span>[시작] 09:00  /  [완료] 09:00  /  [내용] 객실 전체 청소</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="color-secondary mr-2">[긴급요청]</span><span>[시작] 09:00  /  [완료] 09:00  /  [내용] 객실 전체 청소</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[시작 13:00  /  [완료] 13:30  /  [내용] 매트리스 및 침구류 교체</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="color-secondary mr-2">[긴급요청]</span><span>[시작] 09:00  /  [완료] 09:00  /  [내용] 객실 전체 청소</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                </tr>
                
              </tbody>
              </v-table>
              <!--// table -->
            </v-row>
          </v-container>
          <!--// v-container -->
        </field-set>

      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <template v-slot:footer>
      <div style="height: 20px;"></div>
    </template>
  </Popup>
  <!-- //popup -->

</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "room_setting",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "203호 VIP룸 객실내역",
      theme: "theme-popup-light",
      size: "size-auto",
      align: "mx-auto",
      pin: true,
    },
    img: require('@/assets/images/img-money.png'),
    model: 'OFF',
  }),
};
</script>
