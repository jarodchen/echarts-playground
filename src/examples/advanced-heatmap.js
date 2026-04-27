// 高级图表 - 热力图
export default {
  title: { text: '热力图 - 销售分布', left: 'center' },
  tooltip: { position: 'top' },
  grid: { height: '50%', top: '10%' },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    splitArea: { show: true }
  },
  yAxis: {
    type: 'category',
    data: ['上午', '下午', '晚上'],
    splitArea: { show: true }
  },
  visualMap: {
    min: 0,
    max: 100,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '15%'
  },
  series: [{
    type: 'heatmap',
    data: [
      [0, 0, 45], [0, 1, 68], [0, 2, 32],
      [1, 0, 52], [1, 1, 78], [1, 2, 41],
      [2, 0, 38], [2, 1, 55], [2, 2, 29],
      [3, 0, 61], [3, 1, 82], [3, 2, 48],
      [4, 0, 47], [4, 1, 71], [4, 2, 35],
      [5, 0, 73], [5, 1, 91], [5, 2, 62],
      [6, 0, 68], [6, 1, 85], [6, 2, 54]
    ],
    label: { show: true }
  }]
}
