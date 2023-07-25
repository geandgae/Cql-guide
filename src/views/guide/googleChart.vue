<template>
  <!-- <highcharts :options="chartOptions" /> -->
  <VueGoogleCharts
    type="ColumnChart"
    :resizeDebounce =" 500 "
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script>
export default {
  
  data() {
    return {
      name: "GuideChart2",
      // googleCharts
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },
    };
  },
  
};
</script>

<style lang="scss" scoped>
</style>
