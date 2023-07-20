<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <div class="bbs-title d-flex align-center mb-2">
          <span class="text">체큐인 매니저 2.01 업데이트 안내입니다.</span>
          <span class="date">12/24/10:36</span>
        </div>
        <div class="bbs-contents mb-2" style="height: 480px;">
          <p>
            체규인 매니저 2.00에서 2.01로 업데이트 되었습니다.<br>
            업데이트 미적용 시 체규인매너저 프로그램을 재 실행해 주시면 신규 버전으로 자동 업데이트 됩니다.<br><br>

            * 업데이트 상세내용<br>
            - 도어키 오류 수정<br>
            - 문 열림,닫힘 딜레이 수정<br>
            - 기타 보안 업데이트 및 버그 수정
          </p>
        </div>
        <v-table class="sm">
          <colgroup>
            <col style="width: 80px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>이전글</th>
              <td>
                <div class="d-flex justify-space-between">
                  <a href="#" class="link-text">구독중인 게시글이 표시됩니다.</a>
                  <p class="sm-font12">12/24/10:36</p>
                </div>
              </td>
            </tr>
            <tr>
              <th>이전글</th>
              <td>
                <div class="d-flex justify-space-between">
                  <a href="#" class="link-text">구독중인 게시글이 표시됩니다.</a>
                  <p class="sm-font12">12/24/10:36</p>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>


      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <!-- slot -->
    <template v-slot:footer>
        <div class="btns">
          <v-btn color="secondary" size="large" style="min-width: 150px">목록</v-btn>
          <v-btn color="darkgrey" size="large" style="min-width: 150px" @click="dialog = !dialog">닫기</v-btn>
        </div>
      </template>
      <!-- //slot -->
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "notice_news_view",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "구독현황 보기",
      theme: "theme-popup-light",
      size: "size-smd",
      align: "mx-auto",
    },
  }),
};
</script>
