// 实战场景 - 电商大屏看板
export default {
  backgroundColor: '#0f0f2d',
  title: {
    text: '实时销售监控',
    left: 'center',
    textStyle: { color: '#fff', fontSize: 24 }
  },
  tooltip: { trigger: 'axis' },
  legend: {
    data: ['今日销售', '昨日销售', '目标'],
    top: '40',
    textStyle: { color: '#fff' }
  },
  grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    axisLine: { lineStyle: { color: '#fff' } }
  },
  yAxis: {
    type: 'value',
    axisLine: { lineStyle: { color: '#fff' } },
    splitLine: { lineStyle: { color: '#333' } }
  },
  series: [
    {
      name: '今日销售',
      type: 'line',
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(84, 112, 198, 0.5)' },
            { offset: 1, color: 'rgba(84, 112, 198, 0.05)' }
          ]
        }
      },
      data: [120, 132, 301, 534, 690, 830, 920],
      itemStyle: { color: '#5470c6' }
    },
    {
      name: '昨日销售',
      type: 'line',
      smooth: true,
      lineStyle: { type: 'dashed' },
      data: [100, 120, 280, 480, 620, 750, 850],
      itemStyle: { color: '#91cc75' }
    },
    {
      name: '目标',
      type: 'line',
      lineStyle: { type: 'dotted' },
      data: [150, 200, 350, 600, 750, 900, 1000],
      itemStyle: { color: '#fac858' }
    }
  ]
}
