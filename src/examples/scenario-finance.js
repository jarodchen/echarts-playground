// 实战场景 - 金融K线+成交量
export default {
  title: { text: '股票行情分析', left: 'center' },
  tooltip: { trigger: 'axis' },
  axisPointer: { link: [{ xAxisIndex: 'all' }] },
  grid: [
    { left: '10%', right: '8%', height: '50%' },
    { left: '10%', right: '8%', top: '63%', height: '25%' }
  ],
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五'],
      scale: true,
      gridIndex: 0
    },
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五'],
      gridIndex: 1
    }
  ],
  yAxis: [
    { scale: true, gridIndex: 0 },
    { scale: true, gridIndex: 1 }
  ],
  series: [
    {
      name: 'K线',
      type: 'candlestick',
      data: [
        [20, 30, 18, 35],
        [30, 35, 28, 40],
        [35, 32, 30, 38],
        [32, 40, 30, 42],
        [40, 45, 38, 48]
      ],
      xAxisIndex: 0,
      yAxisIndex: 0
    },
    {
      name: '成交量',
      type: 'bar',
      data: [1000, 1500, 1200, 1800, 2000],
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: { color: '#5470c6' }
    }
  ]
}
