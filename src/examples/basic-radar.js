// 基础图表 - 雷达图
export default {
  title: { text: '产品能力对比', left: 'center' },
  tooltip: { trigger: 'item' },
  legend: { data: ['产品A', '产品B'], left: 'left' },
  radar: {
    indicator: [
      { name: '性能', max: 100 },
      { name: '易用性', max: 100 },
      { name: '功能', max: 100 },
      { name: '稳定性', max: 100 },
      { name: '安全性', max: 100 },
      { name: '扩展性', max: 100 }
    ]
  },
  series: [{
    type: 'radar',
    data: [
      {
        value: [85, 90, 80, 95, 88, 75],
        name: '产品A',
        itemStyle: { color: '#5470c6' },
        areaStyle: { opacity: 0.3 }
      },
      {
        value: [70, 85, 95, 80, 75, 90],
        name: '产品B',
        itemStyle: { color: '#91cc75' },
        areaStyle: { opacity: 0.3 }
      }
    ]
  }]
}
