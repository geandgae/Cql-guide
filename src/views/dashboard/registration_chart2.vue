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
          type: "column",
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: ["야놀자", "여기어떄", "네이버", "기타"],
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
            data: [27, 11, 18, 8],
          },
          {
            name: "어제",
            data: [22, 5, 11, 5],
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
