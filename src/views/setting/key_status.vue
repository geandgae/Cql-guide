<template>
  <!-- popup -->
  <Popup :popup="popup" style="width: 1010px;">
    <!-- slot -->
    <template v-slot:body>
      <!-- popup-contents -->
      <div class="popup-contents overflow-y-auto" style="height: 700px;">
        <v-row no-gutters style="min-height: 630px">
          <!-- left-->
          <div style="width: 470px;">
            <div class="title-baener bg-primary">좌측 카드데크</div>
            <!-- table -->
            <v-table class="text-center dense-dark mt-1">
              <thead>
                <tr>
                  <th>카드</th>
                  <th>통신</th>
                  <th>호실</th>
                  <th>바코드</th>
                  <th>NO</th>
                  <th>카드</th>
                  <th>통신</th>
                  <th>호실</th>
                  <th>바코드</th>
                  <th>NO</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in 30" :key="item">
                  <td>
                    <v-icon color="grey">mdi-credit-card</v-icon>
                  </td>
                  <td>
                    <v-icon color="secondary">mdi-close-thick</v-icon>
                  </td>
                  <td>201</td>
                  <td>등록</td>
                  <td>{{item}}</td>
                  <td>
                    <v-icon color="grey">mdi-credit-card</v-icon>
                  </td>
                  <td>
                    <v-icon color="dark-grey">mdi-circle-outline</v-icon>
                  </td>
                  <td>201</td>
                  <td>등록</td>
                  <td>{{item}}</td>
                </tr>
              </tbody>
            </v-table>
            <!-- //table -->
          </div>
          <!-- //left-->

          <!-- right -->
          <div class="ml-auto" style="width: 470px;">
            <div class="title-baener bg-violet">우측 카드데크</div>
            <!-- table -->
            <v-table class="text-center dense-dark mt-1">
              <thead>
                <tr>
                  <th>카드</th>
                  <th>통신</th>
                  <th>호실</th>
                  <th>바코드</th>
                  <th>NO</th>
                  <th>카드</th>
                  <th>통신</th>
                  <th>호실</th>
                  <th>바코드</th>
                  <th>NO</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in 30" :key="item">
                  <td>
                    <v-icon color="grey">mdi-credit-card</v-icon>
                  </td>
                  <td>
                    <v-icon color="secondary">mdi-close-thick</v-icon>
                  </td>
                  <td>201</td>
                  <td>등록</td>
                  <td>{{item}}</td>
                  <td>
                    <v-icon color="grey">mdi-credit-card</v-icon>
                  </td>
                  <td>
                    <v-icon color="dark-grey">mdi-circle-outline</v-icon>
                  </td>
                  <td>201</td>
                  <td>등록</td>
                  <td>{{item}}</td>
                </tr>
              </tbody>
            </v-table>
            <!-- //table -->
          </div>
          <!-- //right -->
        </v-row>
        
      </div>
      <!-- //popup-contents -->
    </template>
    <!-- //slot -->
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
  name: "KeyStatus",
  components: {
    Popup,
  },
  data: () => ({
    toggle: 0,
    dates: null,
    datee: null,
    popup: {
      title: "카드데크 키 현황 보기",
      theme: "theme-popup-dark",
      size: "size-auto",
      align: "mx-auto",
    },
  }),
};
</script>
