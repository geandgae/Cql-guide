<template>
  <!-- v-container -->
  <v-container fluid class="pa-10">
    <h1 class="mb-10">IA List</h1>
    <v-table class="flex-grow-1" density="compact">
      <thead>
        <tr>
          <th v-for="item, i in th" :key="i">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, i in td.length" :key="item">
          <td v-for="x, n in td[i]" :key="n">
            <span v-if="x.link === true" style="cursor: pointer;" @click="link(x.to)">{{ x.to }}</span>
            <span v-else>{{ x }}</span>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
  <!-- //v-container -->
</template>

<script>
export default {
  name: "IA",
  data() {
    return {
      th: [
        { title: '번호', key: 'idx', },
        { title: 'depth1', key: 'depth1', },
        { title: 'depth2', key: 'depth2', },
        { title: 'depth3', key: 'depth3', },
        { title: 'url', key: 'url', },
        { title: '상태', key: 'status', },
        { title: '메모', key: 'memo', },
      ],
      td: [
        {
          idx: 1,
          depth1: 'guide',
          depth2: '-',
          depth3: '-',
          url: {
            to: '/guide',
            link: true,
          },
          status: '대기',
          memo: '-',
        },
      ],
    };
  },
  methods: {
    link(val) {
      this.$router.push({
        path: `${val}`
      });
    },
  },
};
</script>
