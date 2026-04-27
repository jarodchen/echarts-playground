// 组合图表 - 多Y轴图表
export default {
  title: { text: '多维度数据分析', left: 'center' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['温度', '湿度', '气压'], top: '10%' },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月']
  },
  yAxis: [
    {
      type: 'value',
      name: '温度(°C)',
      position: 'left',
      axisLine: { show: true, lineStyle: { color: '#ff6b6b' } }
    },
    {
      type: 'value',
      name: '湿度(%)',
      position: 'right',
      axisLine: { show: true, lineStyle: { color: '#4ecdc4' } }
    },
    {
      type: 'value',
      name: '气压(hPa)',
      position: 'right',
      offset: 80,
      axisLine: { show: true, lineStyle: { color: '#95e1d3' } }
    }
  ],
  series: [
    {
      name: '温度',
      type: 'line',
      data: [5, 8, 15, 20, 25, 30],
      itemStyle: { color: '#ff6b6b' }
    },
    {
      name: '湿度',
      type: 'line',
      yAxisIndex: 1,
      data: [60, 65, 70, 75, 80, 85],
      itemStyle: { color: '#4ecdc4' }
    },
    {
      name: '气压',
      type: 'line',
      yAxisIndex: 2,
      data: [1013, 1015, 1012, 1010, 1008, 1005],
      itemStyle: { color: '#95e1d3' }
    }
  ]
}
