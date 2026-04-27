// 高级图表 - 水球图(需要echarts-liquidfill插件)
export default {
  title: { text: '任务完成进度', left: 'center' },
  series: [{
    type: 'gauge',
    radius: '90%',
    axisLine: {
      lineStyle: {
        width: 30,
        color: [
          [0.3, '#ff6e76'],
          [0.7, '#fddd60'],
          [1, '#7cdd77']
        ]
      }
    },
    pointer: {
      itemStyle: { color: 'auto' }
    },
    axisTick: {
      distance: -30,
      length: 8,
      lineStyle: { color: '#fff', width: 2 }
    },
    splitLine: {
      distance: -30,
      length: 30,
      lineStyle: { color: '#fff', width: 4 }
    },
    axisLabel: {
      color: 'inherit',
      distance: 40,
      fontSize: 14
    },
    detail: {
      valueAnimation: true,
      formatter: '{value}%',
      color: 'inherit',
      fontSize: 30
    },
    data: [{ value: 70, name: '完成率' }]
  }]
}
