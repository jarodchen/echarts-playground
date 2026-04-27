// 基础图表 - 面积图
export default {
  title: { text: '访问趋势分析', left: 'center' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['访问量', '独立访客'], top: '10%' },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: '访问量',
      type: 'line',
      stack: '总量',
      areaStyle: { opacity: 0.3 },
      data: [120, 132, 101, 134, 90, 230, 210],
      itemStyle: { color: '#5470c6' }
    },
    {
      name: '独立访客',
      type: 'line',
      stack: '总量',
      areaStyle: { opacity: 0.3 },
      data: [220, 182, 191, 234, 290, 330, 310],
      itemStyle: { color: '#91cc75' }
    }
  ]
}
