// 数据可视化 - 日历热力图
export default {
  title: { text: '年度活动日历', left: 'center' },
  visualMap: {
    min: 0,
    max: 10,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    top: 'top'
  },
  calendar: {
    top: 80,
    left: 30,
    right: 30,
    cellSize: ['auto', 20],
    range: '2024',
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: true }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: Array.from({ length: 365 }, (_, i) => {
      const date = new Date(2024, 0, 1)
      date.setDate(date.getDate() + i)
      return [
        date.toISOString().split('T')[0],
        Math.floor(Math.random() * 10)
      ]
    })
  }
}
