<template>
  <div :id="chartId" class="ct-chart"></div>
</template>

<script>
import Chartist from 'chartist';

export default {
  name: 'PieChart',
  props: {
    series: {
      type: Array,
      required: true,
      default: () => []
    },
    labels: {
      type: Array,
      required: true,
      default: () => []
    },
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    donut: {
      type: Boolean,
      default: false
    },
    showLabels: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
    if (!Chartist || typeof Chartist.Pie !== 'function') {
      console.error('Chartist library or Pie function is not available.');
      return;
    }
    new Chartist.Pie('.ct-chart', {
  series: [20, 10, 30, 40]
}, {
  donut: true,
  donutWidth: 60,
  startAngle: 270,
  total: 200,
  showLabel: false
});
  }
  }
  //   initChart() {
  //     const options = {
  //       donut: this.donut,
  //       showLabel: this.showLabels
  //     };

  //     new Chartist.Pie(`#${this.chartId}`, {
  //       series: this.series,
  //       labels: this.labels
  //     }, options);
  //   }
  // }
};
</script>

<style>
/* Add any necessary styles here */
</style>
