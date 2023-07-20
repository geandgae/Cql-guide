<template>
  <!-- popup -->
  <Popup :popup="popup7" style="width: 800px; height: 300px;">
    <!-- slot -->
    <template v-slot:body> slot </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->

  <v-spacer class="my-5"></v-spacer>

  <!-- popup -->
  <Popup :popup="popup">
    <!-- slot -->
    <template v-slot:body> slot </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->

  <v-spacer class="my-5"></v-spacer>

  <!-- popup -->
  <Popup :popup="popup2">
    <!-- slot -->
    <template v-slot:body> slot </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->

  <v-spacer class="my-5"></v-spacer>

  <!-- popup -->
  <Popup :popup="popup3">
    <!-- slot -->
    <template v-slot:body> slot </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->

  <v-spacer class="my-5"></v-spacer>

  <!-- popup -->
  <Popup :popup="popup4">
    <!-- slot -->
    <template v-slot:body> slot </template>
    <!-- //slot -->
  </Popup>

  <!-- //popup -->
  <v-spacer class="my-5"></v-spacer>

  <!-- popup -->
  <Popup :popup="popup5">
    <!-- slot -->
    <template v-slot:body> slot </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->

  <v-spacer class="my-5"></v-spacer>

  <!-- popup -->
  <Popup :popup="popup6">
    <!-- slot -->
    <template v-slot:body> slot </template>
    <!-- //slot -->
  </Popup>
  <!-- //popup -->

 
</template>

<script>
import Popup from "@/components/popup/popup.vue";

export default {
  name: "GuidePopup",
  components: {
    Popup,
  },
  data() {
    return {
      popup: {
        title: "theme-popup-dark / size-sm",
        theme: "theme-popup-dark",
        size: "size-sm",
        align: "mx-auto",
        pin: false,
      },
      popup2: {
        title: "theme-popup-light / size-sm",
        theme: "theme-popup-light",
        size: "size-sm",
        align: "mx-auto",
        pin: true,
      },
      popup3: {
        title: "theme-popup-dark / size-md",
        theme: "theme-popup-dark",
        size: "size-md",
        align: "mx-auto",
        pin: true,
      },
      popup4: {
        title: "theme-popup-light / size-md",
        theme: "theme-popup-light",
        size: "size-md",
        align: "mx-auto",
        pin: true,
      },
      popup5: {
        title: "theme-popup-dark / size-lg",
        theme: "theme-popup-dark",
        size: "size-lg",
        align: "mx-auto",
      },
      popup6: {
        title: "theme-popup-dark / size-xlg",
        theme: "theme-popup-dark",
        size: "size-xlg",
        align: "mx-auto",
      },
      popup7: {
        title: "theme-popup-dark / size-auto",
        theme: "theme-popup-dark",
        size: "size-auto",
        align: "mx-auto",
        pin: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
