<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <v-container fluid style="padding: 0 12px;">
            <v-row>
              <VueDatePicker v-model="date" style="width:140px;border-radius: 0;"></VueDatePicker>
              <VueDatePicker v-model="date" style="width:140px;border-radius: 0;margin-left: -1px;"></VueDatePicker>
              <v-select 
                :items="['공지', '업데이트', '중요']" 
                value="구분선택" 
                density="compact" 
                class="board" 
                hide-details
                style="margin-left: -1px;">
              </v-select>
              <div class="input-search board" style="margin-left: -1px;">
                <input type="text" value="여기 어때" />
                <v-btn density="compact" size="small" icon="mdi-magnify"></v-btn>
              </div>
            </v-row>
          </v-container>
        </fieldset>
        <!-- //field-set -->
        <!-- tabs -->
        <v-item-group v-model="setting" class="board_tabs two">
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
        <div class="pop-contents" v-if="setting === '공지'">
          <!-- v-container -->
          <v-container fluid class="board_panel">
            <v-row no-gutters>
              <!-- table -->
              <v-table fixed-header height="480" class="overflow-y-auto no-border">
              <colgroup>
                <col style="width: 100px;"/>
                <col />
                <col style="width: 100px;"/>
              </colgroup>
              <tbody>
                <tr>
                  <td><span>[종합]</span></td>
                  <td><div class="">여기어때, 대한민국광고대상 수상<span class="new">N</span></div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[숙박뉴스]</span></td>
                  <td><div class="">강원도 삼척시, 겨울철 야영장 안전관리 실태 점검<span class="new">N</span></div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-secondary">[호텔,모텔]</span></td>
                  <td><div class="">여기어때, 총 72명에게 '괌' 여행티켓 쏜다</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
              </tbody>
              </v-table>
              <!--// table -->
            </v-row>
          </v-container>
          <!--// v-container -->
        </div>
        <div class="pop-contents" v-if="setting === 'TODO-미션'">
          <!-- v-container -->
          <v-container fluid class="board_panel">
            <v-row no-gutters>
              <!-- table -->
              <v-table fixed-header height="480" class="overflow-y-auto no-border">
              <colgroup>
                <col style="width: 100px;"/>
                <col />
                <col style="width: 100px;"/>
              </colgroup>
              <tbody>
                <tr>
                  <td><span>[종합]</span></td>
                  <td><div class="">여기어때, 대한민국광고대상 수상<span class="new">N</span></div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[숙박뉴스]</span></td>
                  <td><div class="">강원도 삼척시, 겨울철 야영장 안전관리 실태 점검<span class="new">N</span></div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-secondary">[호텔,모텔]</span></td>
                  <td><div class="">여기어때, 총 72명에게 '괌' 여행티켓 쏜다</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
              </tbody>
              </v-table>
              <!--// table -->
            </v-row>
          </v-container>
          <!--// v-container -->
        </div>

        
        <!-- pagination -->
        <div class="text-center">
            <v-pagination v-model="page" :length="4" rounded="circle"></v-pagination>
          </div>
          <!-- /pagination -->
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
  name: "notice_news",
  components: {
    Popup, VueDatePicker
  },
  data: () => ({
    popup: {
      title: "공지사항",
      theme: "theme-popup-light",
      size: "size-smd",
      align: "mx-auto",
    },
    date: null,
    page: 1,
    tabsItem: [
        "공지",
        "TODO-미션",
    ],
    model: true,
  }),
};
</script>
