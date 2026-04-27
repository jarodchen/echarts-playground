// 数据可视化 - 漏斗图
export default {
  title: { text: '漏斗图 - 转化分析', left: 'center' },
  tooltip: { trigger: 'item', formatter: '{b}: {c}%' },
  series: [{
    type: 'funnel',
    left: '10%',
    top: 60,
    bottom: 60,
    width: '80%',
    sort: 'descending',
    gap: 2,
    label: {
      show: true,
      position: 'inside'
    },
    data: [
      { value: 100, name: '访问' },
      { value: 80, name: '咨询' },
      { value: 60, name: '订单' },
      { value: 40, name: '点击' },
      { value: 20, name: '成交' }
    ]
  }]
}
