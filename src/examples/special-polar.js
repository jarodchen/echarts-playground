// 特殊图表 - 极坐标柱状图
export default {
  title: { text: '极坐标分析', left: 'center' },
  angleAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    z: 10
  },
  radiusAxis: {},
  polar: {},
  series: [{
    type: 'bar',
    data: [1, 2, 3, 4, 3, 5, 4],
    coordinateSystem: 'polar',
    name: '数据A',
    stack: 'a',
    emphasis: { focus: 'series' },
    itemStyle: { color: '#5470c6' }
  }, {
    type: 'bar',
    data: [2, 3, 4, 5, 4, 6, 5],
    coordinateSystem: 'polar',
    name: '数据B',
    stack: 'a',
    emphasis: { focus: 'series' },
    itemStyle: { color: '#91cc75' }
  }]
}
