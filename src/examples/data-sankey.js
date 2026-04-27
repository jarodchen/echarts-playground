// 数据可视化 - 桑基图
export default {
  title: { text: '桑基图 - 流量分析', left: 'center' },
  tooltip: { trigger: 'item' },
  series: [{
    type: 'sankey',
    layout: 'none',
    emphasis: {
      focus: 'adjacency'
    },
    data: [
      { name: '搜索引擎' },
      { name: '直接访问' },
      { name: '外部链接' },
      { name: '首页' },
      { name: '产品页' },
      { name: '详情页' }
    ],
    links: [
      { source: '搜索引擎', target: '首页', value: 1000 },
      { source: '搜索引擎', target: '产品页', value: 800 },
      { source: '直接访问', target: '首页', value: 600 },
      { source: '外部链接', target: '产品页', value: 400 },
      { source: '首页', target: '产品页', value: 1200 },
      { source: '首页', target: '详情页', value: 500 },
      { source: '产品页', target: '详情页', value: 900 }
    ]
  }]
}
