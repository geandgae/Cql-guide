<template>
  <h2 class="mb-2">color btn fill</h2>
  <v-btn v-for="item in colors" :key="item" :color="item" style="min-width: 150px; margin: 10px;">color="{{item}}"</v-btn>

  <h2 class="mb-2 mt-10">color btn outlined</h2>
  <v-btn v-for="item in colors" :key="item" :color="item" variant="outlined" style="min-width: 150px; margin: 10px;">color="{{item}}"</v-btn>

  <h2 class="mb-2 mt-10">Switch</h2>
  <div style="width: 200px;">
    <v-switch v-model="model" true-value="중지" false-value="허용" :label="`${model}`" color="secondary" inset hide-details></v-switch>
  </div>
  
  <h2 class="mt-10 mb-2">icon btn</h2>
  <div class="d-flex align-center mt-2" style="gap: 12px">
    <v-btn color="darkgrey" prepend-icon="mdi-check-circle" append-icon="mdi-account-circle">
      <template v-slot:prepend>
        <v-icon color="white"></v-icon>
      </template>
      text
      <template v-slot:append>
        <v-icon color="white"></v-icon>
      </template>
    </v-btn>

    <v-btn color="primary" append-icon="mdi-trash-can-outline" size="small" style="width: 160px" class="custom-btn-icon">
      VIP 룸
      <template v-slot:append>
        <v-icon color="white"></v-icon>
      </template>
    </v-btn>

    <v-btn color="secondary" append-icon="mdi-plus" size="small" style="width: 160px" class="custom-btn-icon">
      객실추가
      <template v-slot:append>
        <v-icon color="white"></v-icon>
      </template>
    </v-btn>

    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0" disabled>
      <v-icon size="x-small" color="white">mdi-plus</v-icon>
    </v-btn>
    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0" disabled>
      <v-icon size="x-small" color="white">mdi-minus</v-icon>
    </v-btn>
    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0" disabled>
      <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
    </v-btn>
    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0" disabled>
      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
    </v-btn>

    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
      <v-icon size="x-small" color="white">mdi-plus</v-icon>
    </v-btn>
    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
      <v-icon size="x-small" color="white">mdi-minus</v-icon>
    </v-btn>
    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
      <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
    </v-btn>
    <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px" class="pa-0">
      <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
    </v-btn>
    <v-btn color="darkgrey" size="small" rounded="xl" class="pa-0">
      <v-icon color="white">mdi-close-thick</v-icon>
    </v-btn>
    <v-btn color="darkgrey" size="small" rounded="xl" class="pa-0">
      <v-icon color="white">mdi-pin</v-icon>
    </v-btn>

    <v-btn color="grey" size="small" style="min-width: 80px">취소</v-btn>

    <v-btn color="white" class="custom-btn-icon-white" prepend-icon="mdi-plus-thick" size="small" style="min-width: 80px">
      <template v-slot:prepend>
        <v-icon size="small" color="pa-0 ma-0"></v-icon>
      </template>
      구독추가
    </v-btn>
  </div>

  <h2 class="mt-10">size primary</h2>
  <div class="d-flex align-center mt-2" style="gap: 12px">
    <v-btn color="primary" size="x-small" style="min-width: 150px">x-small 20</v-btn>
    <v-btn color="primary" size="small" style="min-width: 150px">small 28</v-btn>
    <v-btn color="primary" style="min-width: 150px">regular 36</v-btn>
    <v-btn color="primary" size="large" style="min-width: 150px">large 40</v-btn>
    <v-btn color="primary" size="x-large" style="min-width: 150px">x-large 60</v-btn>
  </div>

  <h2 class="mt-10">size secondary</h2>
  <div class="d-flex align-center mt-2" style="gap: 12px">
    <v-btn color="secondary" size="x-small" style="min-width: 150px">x-small</v-btn>
    <v-btn color="secondary" size="small" style="min-width: 150px">small</v-btn>
    <v-btn color="secondary" style="min-width: 150px">regular</v-btn>
    <v-btn color="secondary" size="large" style="min-width: 150px">large</v-btn>
    <v-btn color="secondary" size="x-large" style="min-width: 150px">x-large</v-btn>
  </div>
</template>

<script>
export default {
  name: "GuideButton",
  data() {
    return {
      model: '허용',
      colors: [
        "primary",
        "secondary",
        "black",
        "darknavy",
        "grey",
        "darkgrey",
        "deepgrey",
        "red",
        "violet",
        "pink",
        "yellow",
        "green",
        "lightblue",
        "mint",
        "aqua",
        "navy",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
