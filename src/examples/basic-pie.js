// 基础图表 - 饼图(环形)
export default {
  title: { text: '产品销售占比', left: 'center' },
  tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
  legend: { orient: 'vertical', left: 'left' },
  series: [{
    name: '销售占比',
    type: 'pie',
    radius: ['40%', '70%'],
    avoidLabelOverlap: false,
    data: [
      { value: 335, name: '产品A' },
      { value: 310, name: '产品B' },
      { value: 234, name: '产品C' },
      { value: 135, name: '产品D' },
      { value: 1548, name: '产品E' }
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
}
