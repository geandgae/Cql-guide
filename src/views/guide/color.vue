<template>
  <div class="d-flex">
    <div>
      <h2 v-for="item in colors" :key="item" class="mb-3" :class="item">{{ item }}</h2>
    </div>
    <div class="ml-15">
      <div v-for="item in bgs" :key="item" class="mb-3" :class="item" style="width: 100px; height: 27px;">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideColor",
  data() {
    return {
      colors: [
        "color-primary",
        "color-secondary",
        "color-black",
        "color-darknavy",
        "color-grey",
        "color-darkgrey",
        "color-deepgrey",
        "color-red",
        "color-violet",
        "color-pink",
        "color-yellow",
        "color-green",
        "color-lightblue",
        "color-mint",
        "color-aqua",
        "color-navy",
      ],
      bgs: [
        "bg-primary",
        "bg-secondary",
        "bg-black",
        "bg-darknavy",
        "bg-grey",
        "bg-darkgrey",
        "bg-deepgrey",
        "bg-red",
        "bg-violet",
        "bg-pink",
        "bg-yellow",
        "bg-green",
        "bg-lightblue",
        "bg-mint",
        "bg-aqua",
        "bg-navy",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
