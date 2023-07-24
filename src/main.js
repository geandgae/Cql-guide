import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import highchartsVue from "highcharts-vue";
import VueGoogleCharts from 'vue-google-charts'

// 생성한 뷰 라우터 받아오기
import router from "./routes/index.js";

loadFonts()

createApp(App)
  .use(router) // 플러그인
  .use(vuetify) // 플러그인
  .use(highchartsVue) // 플러그인
  .use(VueGoogleCharts) // 플러그인
  .mount("#app");