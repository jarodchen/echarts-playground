// 组合图表 - 柱线混合
export default {
  title: { text: '柱线混合图表', left: 'center' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['销售额', '增长率'], top: '10%' },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月']
  },
  yAxis: [
    { type: 'value', name: '销售额' },
    { type: 'value', name: '增长率', position: 'right' }
  ],
  series: [
    {
      name: '销售额',
      type: 'bar',
      data: [820, 932, 901, 934, 1290, 1330],
      itemStyle: { color: '#5470c6' }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [12, 15, 8, 18, 25, 22],
      itemStyle: { color: '#91cc75' }
    }
  ]
}
