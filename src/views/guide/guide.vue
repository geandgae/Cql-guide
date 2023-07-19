<template>
  <!-- v-container -->
  <v-container fluid class="theme-cqi pa-10">
    <h1 class="mb-10">guide</h1>

    <v-tabs v-model="tab" color="primary" align-tabs="start" style="border-bottom: 1px solid #ddd">
      <v-tab v-for="item in tabsItem" :key="item" :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <!-- grid -->
    <div v-if="tab === 'grid'" class="py-10">
      <Grid></Grid>
    </div>

    <!-- popup -->
    <div v-if="tab === 'popup'" class="py-10">
      <Gpopup></Gpopup>
    </div>

    <!-- color -->
    <div v-if="tab === 'color'" class="py-10">
      <Color></Color>
    </div>

    <!-- font -->
    <div v-if="tab === 'font'" class="py-10">
      <Font></Font>
    </div>

    <!-- icon -->
    <div v-if="tab === 'icon'" class="py-10">
      <Icon></Icon>
    </div>

    <!-- buttons -->
    <div v-if="tab === 'buttons'" class="py-10">
      <Buttons></Buttons>
    </div>

    <!-- form -->
    <div v-if="tab === 'form'" class="py-10">
      <Form></Form>
    </div>

    <!-- table -->
    <div v-if="tab === 'table'" class="py-10">
      <gTable></gTable>
    </div>

    <!-- chart -->
    <div v-if="tab === 'chart'" class="py-10">
      <Chart></Chart>
    </div>
  </v-container>
</template>

<script>
import Grid from "./grid.vue";
import Buttons from "./buttons.vue";
import Gpopup from "./gpopup.vue";
import Form from "./form.vue";
import Font from "./font.vue";
import Chart from "./gchart.vue";
import Icon from "./icon.vue";
import Color from "./color.vue";
import gTable from "./guidetable.vue";

export default {
  name: "guideList",
  components: {
    Grid,
    Buttons,
    Gpopup,
    Form,
    Font,
    Chart,
    Icon,
    Color,
    gTable,
  },
  data() {
    return {
      // tab
      tab: "grid",
      tabsItem: [
        'grid', 
        'popup', 
        'color',
        'font', 
        'icon', 
        'buttons', 
        'form', 
        'table', 
        'chart',
      ]
    };
  },
  methods: {
    toggle(val) {
      this.setting = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>
