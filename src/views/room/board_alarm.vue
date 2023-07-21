<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <v-container fluid style="padding: 10px 12px 0;">
            <v-row>
              <VueDatePicker v-model="date" style="width:140px;border-radius: 0;"></VueDatePicker>
              <VueDatePicker v-model="date" style="width:140px;border-radius: 0;margin-left: -1px;"></VueDatePicker>
              <v-select 
                :items="['타입1', '타입2', '타입3']" 
                value="타입선택" 
                density="compact" 
                class="board" 
                hide-details
                style="margin-left: -1px;">
              </v-select>
              <v-select 
                :items="['등록', '확인', '취소', '처리중', '완료' ]" 
                value="진행상태" 
                density="compact" 
                class="board" 
                hide-details
                style="margin-left: -1px;">
              </v-select>
              <div class="input-search board" style="margin-left: -1px;width: 351px;">
                <input type="text" value="진행중" />
                <v-btn density="compact" size="small" icon="mdi-magnify"></v-btn>
              </div>
            </v-row>
          </v-container>
        </fieldset>
        <!-- //field-set -->
        <!-- v-container -->
        <v-container fluid class="board_panel add-table mt-6">
          <v-row no-gutters>
            <!-- table -->
            <v-table height="540px" class="no-border">
            <colgroup>
              <col style="width: 62px;"/>
              <col style="width: 64px;"/>
              <col />
              <col style="width: 80px;"/>
              <col style="width: 80px;"/>
              <col style="width: 70px;"/>
            </colgroup>
            <thead>
              <th>타입</th>
              <th>상태</th>
              <th>제목</th>
              <th>등록일</th>
              <th>수정일</th>
              <th>작성자</th>
            </thead>
            <tbody class="type2">
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type01">확인</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span class="text-primary">[메모]</span></td>
                  <td><span class="icon-type02">등록</span></td>
                  <td><div>체규인 매니저 2.01 업데이트 안내입니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">매니져</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type03">취소</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type04">처리중</span></td>
                  <td><div>공지 내용 어쩌구 저쩌구 공지사항 제목이 표시됩니다.</div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                <td><span class="text-primary">[메모]</span></td>
                <td><span class="icon-type05">완료</span></td>
                <td>
                  <div>공지 내용 어쩌구 저쩌구 공지사항 제목이 표시됩니다.</div>
                  <div><span>└</span><span class="text-secondary ml-2">댓글: 처리하였습니다. 점검 부탁드립니다.</span></div>
                </td>
                <td><span class="gray">12/24/10:36</span></td>
                <td><span class="gray">12/24/10:36</span></td>
                <td><span class="gray">매니져</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type01">확인</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span class="text-primary">[메모]</span></td>
                  <td><span class="icon-type02">등록</span></td>
                  <td><div>체규인 매니저 2.01 업데이트 안내입니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">매니져</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type03">취소</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type04">처리중</span></td>
                  <td><div>공지 내용 어쩌구 저쩌구 공지사항 제목이 표시됩니다.</div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type01">확인</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span class="text-primary">[메모]</span></td>
                  <td><span class="icon-type02">등록</span></td>
                  <td><div>체규인 매니저 2.01 업데이트 안내입니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">매니져</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type03">취소</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type04">처리중</span></td>
                  <td><div>공지 내용 어쩌구 저쩌구 공지사항 제목이 표시됩니다.</div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type01">확인</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span class="text-primary">[메모]</span></td>
                  <td><span class="icon-type02">등록</span></td>
                  <td><div>체규인 매니저 2.01 업데이트 안내입니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">매니져</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type03">취소</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type04">처리중</span></td>
                  <td><div>공지 내용 어쩌구 저쩌구 공지사항 제목이 표시됩니다.</div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type01">확인</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span class="text-primary">[메모]</span></td>
                  <td><span class="icon-type02">등록</span></td>
                  <td><div>체규인 매니저 2.01 업데이트 안내입니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">매니져</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type03">취소</span></td>
                  <td><div>공지사항입니다. 공지 제목이 표시 됩니다.<span class="new">N</span></div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
              <tr>
                  <td><span>[알림]</span></td>
                  <td><span class="icon-type04">처리중</span></td>
                  <td><div>공지 내용 어쩌구 저쩌구 공지사항 제목이 표시됩니다.</div></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">12/24/10:36</span></td>
                  <td><span class="gray">관리자</span></td>
              </tr>
            </tbody>
            </v-table>
            <!--// table -->
          </v-row>
        </v-container>
        <!--// v-container -->
        <!-- pagination -->
        <div class="text-center page-navigation">
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
            <v-btn color="primary" size="large" style="min-width: 150px">알람등록</v-btn>
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
  name: "board_alarm",
  components: {
    Popup, VueDatePicker
  },
  data: () => ({
    popup: {
      title: "업소 게시판-알림목록",
      theme: "theme-popup-light",
      size: "size-md",
      align: "mx-auto",
    },
    date: null,
    page: 1,
  }),
};
</script>
