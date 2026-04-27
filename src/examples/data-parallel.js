// 数据可视化 - 平行坐标
export default {
  title: { text: '平行坐标系 - 多维分析', left: 'center' },
  tooltip: { padding: 10 },
  parallelAxis: [
    { dim: 0, name: '价格' },
    { dim: 1, name: '数量' },
    { dim: 2, name: '金额' },
    { dim: 3, name: '评分' }
  ],
  series: [{
    type: 'parallel',
    lineStyle: { width: 2 },
    data: [
      [12, 324, 3888, 4.5],
      [25, 189, 4725, 4.8],
      [18, 267, 4806, 4.2],
      [35, 412, 14420, 4.9],
      [22, 198, 4356, 4.6]
    ]
  }]
}
