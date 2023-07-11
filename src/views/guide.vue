<template>
  <!-- v-container -->
  <v-container fluid class="pa-10">
    <h1 class="mb-10">guide</h1>

    <v-tabs v-model="tab" color="primary" align-tabs="start" style="border-bottom: 1px solid #ddd">
      <v-tab v-for="item in ['buttons', 'popup', 'form', 'font', 'color', 'icon']" :key="item" :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <!-- buttons -->
    <div v-if="tab === 'buttons'" class="py-10">
      <h2 class="mb-2">icon btn</h2>
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

        <v-btn append-icon="mdi-trash-can-outline" size="small" style="width: 160px" class="custom-btn-icon">
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

        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px;" class="pa-0">
          <v-icon size="x-small" color="white">mdi-plus</v-icon>
        </v-btn>
        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px;" class="pa-0">
          <v-icon size="x-small" color="white">mdi-minus</v-icon>
        </v-btn>
        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px;" class="pa-0">
          <v-icon size="x-small" color="white">mdi-chevron-up</v-icon>
        </v-btn>
        <v-btn color="darkgrey" style="min-width: auto; width: 16px; height: 16px;" class="pa-0">
          <v-icon size="x-small" color="white">mdi-chevron-down</v-icon>
        </v-btn>

        <v-btn color="grey" size="small" style="min-width: 80px">취소</v-btn>

        <v-btn variant="outlined" color="secondary" prepend-icon="mdi-plus" size="small" style="min-width: 80px">
          <template v-slot:prepend>
            <v-icon></v-icon>
          </template>
          구독추가
        </v-btn>
      </div>
      <h2 class="mt-10">primary</h2>
      <div class="d-flex align-center mt-2" style="gap: 12px">
        <v-btn color="primary" size="x-small" style="min-width: 150px">x-small 20</v-btn>
        <v-btn color="primary" size="small" style="min-width: 150px">small 28</v-btn>
        <v-btn color="primary" style="min-width: 150px">regular 36</v-btn>
        <v-btn color="primary" size="large" style="min-width: 150px">large 44</v-btn>
        <v-btn color="primary" size="x-large" style="min-width: 150px">x-large 52</v-btn>
      </div>
      <h2 class="mt-10">secondary</h2>
      <div class="d-flex align-center mt-2" style="gap: 12px">
        <v-btn color="secondary" size="x-small" style="min-width: 150px">x-small</v-btn>
        <v-btn color="secondary" size="small" style="min-width: 150px">small</v-btn>
        <v-btn color="secondary" style="min-width: 150px">regular</v-btn>
        <v-btn color="secondary" size="large" style="min-width: 150px">large</v-btn>
        <v-btn color="secondary" size="x-large" style="min-width: 150px">x-large</v-btn>
      </div>
    </div>

    <!-- popup -->
    <div v-if="tab === 'popup'" class="py-10">
      <h2>popup</h2>

      <v-btn color="primary" class="mt-10" @click="dialog = true">open popup</v-btn>

      <!-- popup -->
      <v-dialog v-model="dialog" width="600">
        <v-card>
          <v-card-title>popup-title</v-card-title>
          <v-card-text>popup-content</v-card-text>
          <v-card-actions>
            <v-btn @click="dialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- //popup -->
    </div>

    <!-- form -->
    <div v-if="tab === 'form'" class="py-10">
      <h2>form</h2>
    </div>

    <!-- font -->
    <div v-if="tab === 'font'" class="py-10">
      <h2>font</h2>
    </div>

    <!-- color -->
    <div v-if="tab === 'color'" class="py-10">
      <h2>color</h2>
    </div>

    <!-- icon -->
    <div v-if="tab === 'icon'" class="py-10">
      <h2>icon</h2>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "guideList",
  data() {
    return {
      tab: "buttons",
      dialog: false,
    };
  },
};
</script>

<!-- 스타일 임시 -->
<style lang="scss">
.custom-btn-icon {
  display: flex;
  justify-content: flex-start;
  .v-btn__content {
    flex: 1;
  }
  .v-btn__append {
    flex-shrink: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 8px;
  }
}
</style>
