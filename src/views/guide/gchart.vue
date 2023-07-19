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
        chart: {
          type: "column",
        },
        title: {
          text: "Weekly Average Chart",
        },
        subtitle: {
          text: "highchart sample subtitle",
        },
        xAxis: {
          categories: ["1일", "2일", "3일", "4일", "5일", "6일", "7일"],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "avarage",
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
            name: "현재상품",
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
          },
          {
            name: "유사상품",
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0],
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

<style lang="scss" scoped></style>
