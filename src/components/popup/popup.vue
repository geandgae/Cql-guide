<template>
  <!-- popup -->
  <div 
    class="popup"
    :class="[popup.theme, popup.size]"
  >
    <v-card>
      <!-- header -->
      <slot name="header">
        <v-card-title class="d-flex align-center">
          <span class="chip-bi">BI</span>
          <h2 class="title" :class="popup.align" v-html="popup.title"></h2>
          <div class="btns d-flex align-center">
            <v-btn v-if="popup.pin" color="white" size="small" rounded="xl" class="pa-0 mr-2">
              <v-icon size="large" color="darkgrey">mdi-pin</v-icon>
            </v-btn>
            <v-btn color="white" size="small" rounded="xl" class="pa-0">
              <v-icon size="large" color="darkgrey">mdi-close-thick</v-icon>
            </v-btn>
          </div>
        </v-card-title>
      </slot>
      <!-- //header -->
      <!-- body -->
      <v-card-text class="pa-0">
        <slot name="body">

        </slot>
      </v-card-text>
      <!-- //body -->
      <!-- footer -->
      <div class="popup-footer">
        <slot name="footer">
          <div class="btns">
            <v-btn color="darkgrey" size="large" style="min-width: 150px">닫기</v-btn>
            <v-btn color="primary" size="large" style="min-width: 150px">저장</v-btn>
          </div>
        </slot>
      </div>
      <!-- //footer -->
    </v-card>
  </div>
  <!-- //popup -->
</template>

<script>
export default {
  name: "popupDefault",
  props: ['popup'],
  data() {
    return {
    };
  },
};
</script>

<style lang="scss"></style>