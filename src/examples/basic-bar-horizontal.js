// 基础图表 - 横向柱状图
export default {
  title: { text: '城市人口排名', left: 'center' },
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
  xAxis: { type: 'value' },
  yAxis: {
    type: 'category',
    data: ['北京', '上海', '广州', '深圳', '成都', '杭州']
  },
  series: [{
    name: '人口(万)',
    type: 'bar',
    data: [2171, 2428, 1530, 1344, 1633, 1036],
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ]
      }
    },
    label: { show: true, position: 'right' }
  }]
}
