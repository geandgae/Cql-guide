<template>
  <!-- popup -->
  <Popup :popup="popup" style="width:480px; min-height:490px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents">
        <!-- field-set -->
        <fieldset class="field-set">
          <div class="field-box" style="border:0;background-color:#3c4d60">
            <v-checkbox hide-details density="compact" color="secondary" label="객실상태" class="light" style="color:#fff;"></v-checkbox>
            <v-checkbox hide-details density="compact" color="secondary" label="출입문" class="light" style="color:#fff;"></v-checkbox>
            <v-checkbox hide-details density="compact" color="secondary" label="대실" class="light" style="color:#fff;"></v-checkbox>
            <v-checkbox hide-details density="compact" color="secondary" label="숙박" class="light" style="color:#fff;"></v-checkbox>
            <v-checkbox hide-details density="compact" color="secondary" label="장기" class="light" style="color:#fff;"></v-checkbox>
            <v-checkbox hide-details density="compact" color="secondary" label="키" class="light" style="color:#fff;"></v-checkbox>
          </div>
          <div class="field-box" style="margin-top:-1px">
            <v-select 
            :items="['1층', '2층', '3층', '4층', '4층']" 
            value="층선택" 
            density="compact" 
            hide-details 
            style="width: 90px;margin-right:6px">
            </v-select>
            <v-select 
            :items="['101호 스위트룸', '2층', '3층', '4층', '4층']" 
            value="객실선택" 
            density="compact" 
            hide-details 
            style="width: 130px;margin-right:6px">
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
      title: "객실이력",
      theme: "theme-popup-light",
      size: "size-auto",
      align: "mx-auto",
      pin: true,
    },
  }),
};
</script>
