/**
 * 桑基图 - 能源流动分析
 */
export default {
  title: {
    text: '全球能源流向分析 (2023年)',
    subtext: '单位: 百万吨油当量',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
    formatter: '{b}: {c}'
  },
  series: [{
    type: 'sankey',
    layout: 'none',
    emphasis: {
      focus: 'adjacency'
    },
    nodeAlign: 'justify',
    nodeWidth: 20,
    nodeGap: 12,
    lineStyle: {
      color: 'gradient',
      curveness: 0.5
    },
    label: {
      fontSize: 13,
      fontWeight: 'bold'
    },
    data: [
      { name: '石油' },
      { name: '天然气' },
      { name: '煤炭' },
      { name: '核能' },
      { name: '可再生能源' },
      { name: '工业' },
      { name: '交通' },
      { name: '建筑' },
      { name: '发电' },
      { name: '其他' }
    ],
    links: [
      { source: '石油', target: '交通', value: 4600 },
      { source: '石油', target: '工业', value: 3200 },
      { source: '石油', target: '建筑', value: 800 },
      { source: '石油', target: '其他', value: 1400 },
      
      { source: '天然气', target: '工业', value: 2800 },
      { source: '天然气', target: '建筑', value: 1600 },
      { source: '天然气', target: '发电', value: 1400 },
      
      { source: '煤炭', target: '发电', value: 3800 },
      { source: '煤炭', target: '工业', value: 2400 },
      
      { source: '核能', target: '发电', value: 700 },
      
      { source: '可再生能源', target: '发电', value: 1200 },
      { source: '可再生能源', target: '其他', value: 300 },
      
      { source: '发电', target: '工业', value: 2200 },
      { source: '发电', target: '建筑', value: 1800 },
      { source: '发电', target: '其他', value: 500 }
    ]
  }]
}
