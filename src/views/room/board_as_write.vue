<template>
  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- fieldset -->
        <fieldset class="field-set mb-2">
          <v-table>
            <colgroup>
              <col style="width:90px"/>
              <col />
              <col style="width:90px"/>
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">알람타입</th>
                <td>
                  <v-select 
                  :items="['select1', 'select2', 'select3', 'select4', 'select5']" 
                  value="AS요청" 
                  density="compact" 
                  class="custom-select" 
                  hide-details>
                  </v-select>
                </td>
                <th class="text-center">예약방법</th>
                <td>
                  <v-select 
                  :items="['select1', 'select2', 'select3', 'select4', 'select5']" 
                  value="등록" 
                  density="compact" 
                  class="custom-select" 
                  hide-details>
                  </v-select>
                </td>
              </tr>
              <tr>
                <th class="text-center">제목</th>
                <td colspan="3">
                  <input type="text" class="input" />
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset>
        <!--// fieldset -->
        <!-- fieldset -->
        <fieldset class="field-set mb-2">
        <!-- 이쪽에 에디터를 넣어주세요. -->
        <div class="bbs-editor mb-2" style="height: 430px;">
          <p>
            이쪽에 에디터를 넣어주세요.
          </p>
        </div>
        <!--// 이쪽에 에디터를 넣어주세요. -->
        </fieldset>
        <!--// fieldset -->
        <!-- fieldset -->
        <!-- <fieldset class="field-set">
          <v-table>
            <colgroup>
              <col style="width:90px"/>
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="text-center">첨부파일</th>
                <td>
                  <form ref="form">
                    <input class="input" type="file" @change="previewFiles" multiple tabindex="-1">
                  </form>
                </td>
              </tr>
            </tbody>
          </v-table>
        </fieldset> -->
        <!--// fieldset -->
        <!-- fieldset -->
        <fieldset class="field-set">
          <div class="bbs-reply">
            <div class="reply-title">댓글</div>
            <textarea class="textarea reply"></textarea>
            <v-btn class="reply-btn" color="primary" size="x-large">등록</v-btn>
          </div>
        </fieldset>
        <!--// fieldset -->
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
    <!-- slot -->
    <template v-slot:footer>
        <div class="btns">
          <v-btn color="darkgrey" size="large" style="min-width: 150px" @click="dialog = !dialog">닫기</v-btn>
          <v-btn color="primary" size="large" style="min-width: 150px">등록</v-btn>
        </div>
      </template>
      <!-- //slot -->
  </Popup>
  <!-- //popup -->
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "board_as_write",
  components: {
    Popup,
  },
  data: () => ({
    popup: {
      title: "A/S 건의사항-건의등록",
      theme: "theme-popup-light",
      size: "size-md",
      align: "mx-auto",
    },
  }),
  // methods: {
  // previewFiles(event) {
  //     console.log(event.target.files);
  //     this.$refs.form.reset() 

  //   }
  // }

};
</script>
