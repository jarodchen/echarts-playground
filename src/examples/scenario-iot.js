// 实战场景 - IoT物联网监控
export default {
  title: {
    text: '设备状态监控',
    left: 'center',
    textStyle: { color: '#333' }
  },
  tooltip: { trigger: 'axis' },
  legend: {
    data: ['CPU使用率', '内存使用率', '磁盘IO'],
    top: '10%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: Array.from({ length: 20 }, (_, i) => `${i}s`)
  },
  yAxis: {
    type: 'value',
    max: 100,
    axisLabel: { formatter: '{value}%' }
  },
  series: [
    {
      name: 'CPU使用率',
      type: 'line',
      smooth: true,
      showSymbol: false,
      areaStyle: { opacity: 0.2 },
      data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 40 + 30)),
      itemStyle: { color: '#ff6b6b' }
    },
    {
      name: '内存使用率',
      type: 'line',
      smooth: true,
      showSymbol: false,
      areaStyle: { opacity: 0.2 },
      data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 30 + 50)),
      itemStyle: { color: '#4ecdc4' }
    },
    {
      name: '磁盘IO',
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 20 + 10)),
      itemStyle: { color: '#95e1d3' }
    }
  ]
}
