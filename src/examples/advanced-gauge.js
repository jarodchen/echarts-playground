// 高级图表 - 仪表盘
export default {
  title: { text: '仪表盘 - 完成率', left: 'center' },
  series: [{
    type: 'gauge',
    progress: {
      show: true,
      width: 18
    },
    axisLine: {
      lineStyle: {
        width: 18
      }
    },
    axisTick: { show: false },
    splitLine: {
      length: 15,
      lineStyle: {
        width: 2,
        color: '#999'
      }
    },
    axisLabel: {
      distance: 25,
      color: '#999',
      fontSize: 14
    },
    anchor: {
      show: true,
      showAbove: true,
      size: 25,
      itemStyle: {
        borderWidth: 10
      }
    },
    title: { show: false },
    detail: {
      valueAnimation: true,
      fontSize: 40,
      offsetCenter: [0, '70%']
    },
    data: [{
      value: 78.5,
      name: '完成度'
    }]
  }]
}
