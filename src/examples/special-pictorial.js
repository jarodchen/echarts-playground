// 特殊图表 - 象形柱图
export default {
  title: { text: '象形柱图示例', left: 'center' },
  xAxis: {
    type: 'category',
    data: ['苹果', '香蕉', '橙子', '葡萄']
  },
  yAxis: { type: 'value' },
  series: [{
    type: 'pictorialBar',
    symbol: 'circle',
    symbolRepeat: true,
    symbolSize: [30, 15],
    symbolMargin: 2,
    data: [
      { value: 100, symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 10,5 L10,0 L0,0 L0,10 Z' },
      { value: 80, symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 10,5 L10,0 L0,0 L0,10 Z' },
      { value: 60, symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 10,5 L10,0 L0,0 L0,10 Z' },
      { value: 90, symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 10,5 L10,0 L0,0 L0,10 Z' }
    ],
    itemStyle: {
      color: function(params) {
        const colors = ['#ff6b6b', '#feca57', '#ff9ff3', '#54a0ff']
        return colors[params.dataIndex]
      }
    }
  }]
}
