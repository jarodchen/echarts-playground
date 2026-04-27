// 高级图表 - K线图
export default {
  title: { text: '股票K线图', left: 'center' },
  tooltip: { trigger: 'axis' },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五']
  },
  yAxis: { type: 'value' },
  series: [{
    type: 'candlestick',
    data: [
      [20, 34, 10, 38],   // [开, 收, 低, 高]
      [40, 35, 30, 50],
      [31, 38, 33, 44],
      [38, 55, 35, 60],
      [55, 56, 48, 62]
    ]
  }]
}
