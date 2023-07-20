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
              <div class="input-search board" style="margin-left: -1px;width: 214px;">
                <input type="text" value="여기 어때" />
                <v-btn density="compact" size="small" icon="mdi-magnify"></v-btn>
              </div>
              <v-btn color="secondary ml-2" style="min-width: 86px;">나의구독채널</v-btn>
            </v-row>
          </v-container>
        </fieldset>
        <!-- //field-set -->
        <!-- tabs -->
        <v-item-group v-model="setting" class="board_tabs two mt-6" style="padding: 0;">
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
        <div class="pop-contents" v-if="setting === '구독중'" style="padding: 0;">
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
                  <td><span class="text-secondary point">추천</span></td>
                  <td><div>추천 구독은 상단에 [추천] 아이콘으로 표시됩니다.<span class="new">N</span></div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-secondary point">중요</span></td>
                  <td><div>중요 구독은 상단에 [중요] 아이콘으로 표시됩니다.<span class="new">N</span></div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[신규]</span></td>
                  <td><div>신규 구독 내용이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[구독]</span></td>
                  <td><div>추천 구독일 경우 [추천]아이콘이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[채널명]</span></td>
                  <td><div>채널명인 게시글이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[신규]</span></td>
                  <td><div>신규 구독 내용이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[구독]</span></td>
                  <td><div>추천 구독일 경우 [추천]아이콘이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[채널명]</span></td>
                  <td><div>채널명인 게시글이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[신규]</span></td>
                  <td><div>신규 구독 내용이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[구독]</span></td>
                  <td><div>추천 구독일 경우 [추천]아이콘이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[채널명]</span></td>
                  <td><div>채널명인 게시글이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[신규]</span></td>
                  <td><div>신규 구독 내용이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[구독]</span></td>
                  <td><div>추천 구독일 경우 [추천]아이콘이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[채널명]</span></td>
                  <td><div>채널명인 게시글이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[신규]</span></td>
                  <td><div>신규 구독 내용이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[구독]</span></td>
                  <td><div>추천 구독일 경우 [추천]아이콘이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[채널명]</span></td>
                  <td><div>채널명인 게시글이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[신규]</span></td>
                  <td><div>신규 구독 내용이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[구독]</span></td>
                  <td><div>추천 구독일 경우 [추천]아이콘이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[채널명]</span></td>
                  <td><div>채널명인 게시글이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[신규]</span></td>
                  <td><div>신규 구독 내용이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[구독]</span></td>
                  <td><div>추천 구독일 경우 [추천]아이콘이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[채널명]</span></td>
                  <td><div>채널명인 게시글이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[신규]</span></td>
                  <td><div>신규 구독 내용이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[구독]</span></td>
                  <td><div>추천 구독일 경우 [추천]아이콘이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[채널명]</span></td>
                  <td><div>채널명인 게시글이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[신규]</span></td>
                  <td><div>신규 구독 내용이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span>[구독]</span></td>
                  <td><div>추천 구독일 경우 [추천]아이콘이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
                <tr>
                  <td><span class="text-primary">[채널명]</span></td>
                  <td><div>채널명인 게시글이 표시됩니다.</div></td>
                  <td class="right"><span class="gray">12/24/10:36</span></td>
                </tr>
              </tbody>
              </v-table>
              <!--// table -->
            </v-row>
          </v-container>
          <!--// v-container -->
        </div>
        <div class="pop-contents" v-if="setting === '신규 및 추천'" style="padding: 0;">
          <!-- v-container -->
          <v-container fluid class="board_panel" style="max-height: 512px;overflow-y: scroll;">
            <v-row no-gutters>
              <!-- d-flex -->
              <div class="d-flex justify-space-between mb-3" style="width: 100%;">
                <v-sheet class="subscribe-card">
                  <div class="title-area mb-2">
                    <h3 class="title">제목이 표시됩니다.</h3>
                    <div class="btn-area">
                      <span class="sub-title mr-2">구독 채널명</span>
                      <v-btn class="btn" color="secondary" size="small" >+ 구독</v-btn>
                    </div>
                  </div>
                  <div class="img-area">
                    이미지 및 상세내용<br>(가격안내)
                  </div>
                </v-sheet>
                <v-sheet class="subscribe-card mb-3">
                  <div class="title-area mb-2">
                    <h3 class="title">제목이 표시됩니다.</h3>
                    <div class="btn-area">
                      <span class="sub-title mr-2">구독 채널명</span>
                      <v-btn class="btn" color="secondary" size="small" >+ 구독</v-btn>
                    </div>
                  </div>
                  <div class="img-area">
                    이미지 및 상세내용<br>(가격안내)
                  </div>
                </v-sheet>
              </div>
              <!--// d-flex -->
            </v-row>
            <v-row no-gutters>
              <!-- d-flex -->
              <div class="d-flex justify-space-between mb-3" style="width: 100%;">
                <v-sheet class="subscribe-card">
                  <div class="title-area mb-2">
                    <h3 class="title">제목이 표시됩니다.</h3>
                    <div class="btn-area">
                      <span class="sub-title mr-2">구독 채널명</span>
                      <v-btn class="btn" color="secondary" size="small" >+ 구독</v-btn>
                    </div>
                  </div>
                  <div class="img-area">
                    이미지 및 상세내용<br>(가격안내)
                  </div>
                </v-sheet>
                <v-sheet class="subscribe-card mb-3">
                  <div class="title-area mb-2">
                    <h3 class="title">제목이 표시됩니다.</h3>
                    <div class="btn-area">
                      <span class="sub-title mr-2">구독 채널명</span>
                      <v-btn class="btn" color="secondary" size="small" >+ 구독</v-btn>
                    </div>
                  </div>
                  <div class="img-area">
                    이미지 및 상세내용<br>(가격안내)
                  </div>
                </v-sheet>
              </div>
              <!--// d-flex -->
            </v-row>

          </v-container>
          <!--// v-container -->
        </div>
        <!-- pagination -->
        <div class="text-center page-navigation">
            <v-pagination v-model="page" :length="5" rounded="circle"></v-pagination>
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
      title: "구독현황",
      theme: "theme-popup-light",
      size: "size-smd",
      align: "mx-auto",
    },
    date: null,
    page: 1,
    setting: "신규 및 추천",
    tabsItem: [
        "구독중",
        "신규 및 추천",
    ],
    model: true,
  }),
  methods: {
    toggle(val) {
      this.setting = val;
    },
  },
};
</script>
