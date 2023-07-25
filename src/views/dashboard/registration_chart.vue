<template>
  <highcharts :options="chartOptions" />
</template>

<script>
export default {
  name: "GuideChart",
  data() {
    return {
      // highcharts
      chartOptions: {
        colors: ['#fc6060', '#33b0df'],
        chart: {
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "",
          },
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        series: [
          {
            name: "오늘",
            data: [0, 10, 26, 20, 20, 14, 16],
          },
          {
            name: "어제",
            data: [-5, 15, 17, 15, 16, 25, 12],
          },
        ],
        accessibility: {
          enabled: false,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
