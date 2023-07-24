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
          <div class="room-total-cost mb-2">
            <div class="total-cost">
              <p class="cost-name"> <img :src="img" alt="실시간 정산금액(합계)아이콘" />실시간 정산금액(합계)</p>
              <p class="cost-money">560,000원</p>
            </div>
          </div>
        
          <v-carousel hide-delimiters style="height:80px;">
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover>
            </v-carousel-item>

            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>

          <!-- table -->
          <v-table fixed-header height="300px" class="overflow-y-auto">
            <colgroup>
              <col style="width:42px" />
              <col style="width:*" />
              <col style="width:80px" />
            </colgroup>
            <thead>
              <th><v-checkbox color="secondary" hide-details density="compact"></v-checkbox></th>
              <th>상태</th>
              <th>일시</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="primary mr-2">mdi-alert-circle</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="yellow mr-2">mdi-alert</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="primary mr-2">mdi-alert-circle</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="yellow mr-2">mdi-alert</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="primary mr-2">mdi-alert-circle</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="yellow mr-2">mdi-alert</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="primary mr-2">mdi-alert-circle</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="yellow mr-2">mdi-alert</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="primary mr-2">mdi-alert-circle</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="yellow mr-2">mdi-alert</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="primary mr-2">mdi-alert-circle</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="yellow mr-2">mdi-alert</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="primary mr-2">mdi-alert-circle</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              <tr>
                <td>
                  <v-checkbox color="white" hide-details density="compact"></v-checkbox>
                </td>
                <td>
                    <v-icon color="yellow mr-2">mdi-alert</v-icon>
                    <span class="mr-1">[201호]</span>
                    <span class="color-secondary">전원차단</span>
                    <span> | </span>
                    <span>공실상태</span>
                    <span> | </span>
                    <span class="color-aqua">청소요청</span>
                </td>
                <td class="text-center">
                    <span>14:07:41</span>
                </td>
              </tr>
              
            </tbody>
          </v-table>
          <!-- //table -->
        </fieldset>
        <!--// field-set -->

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
  }),
};
</script>
