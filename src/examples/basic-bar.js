// 基础图表 - 柱状图
export default {
  title: { text: '季度销售对比', left: 'center' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['2023年', '2024年'], top: '10%' },
  xAxis: {
    type: 'category',
    data: ['Q1', 'Q2', 'Q3', 'Q4']
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: '2023年',
      type: 'bar',
      data: [120, 200, 150, 80],
      itemStyle: { color: '#91cc75' }
    },
    {
      name: '2024年',
      type: 'bar',
      data: [150, 230, 200, 120],
      itemStyle: { color: '#5470c6' }
    }
  ]
}
