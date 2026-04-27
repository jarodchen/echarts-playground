// 基础图表 - 折线图
export default {
  title: { text: '销售趋势分析', left: 'center' },
  tooltip: { trigger: 'axis' },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: { type: 'value' },
  series: [{
    name: '销售额',
    type: 'line',
    smooth: true,
    data: [150, 230, 224, 218, 135, 147, 260],
    itemStyle: { color: '#5470c6' },
    areaStyle: { opacity: 0.3 }
  }]
}
