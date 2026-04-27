// 组合图表 - 堆叠柱状图
export default {
  title: { text: '堆叠柱状图', left: 'center' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['邮件营销', '联盟广告', '视频广告'], top: '10%' },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: '邮件营销',
      type: 'bar',
      stack: 'total',
      data: [120, 132, 101, 134, 90, 230, 210],
      itemStyle: { color: '#5470c6' }
    },
    {
      name: '联盟广告',
      type: 'bar',
      stack: 'total',
      data: [220, 182, 191, 234, 290, 330, 310],
      itemStyle: { color: '#91cc75' }
    },
    {
      name: '视频广告',
      type: 'bar',
      stack: 'total',
      data: [150, 232, 201, 154, 190, 330, 410],
      itemStyle: { color: '#fac858' }
    }
  ]
}
