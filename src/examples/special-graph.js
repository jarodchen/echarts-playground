// 特殊图表 - 关系图
export default {
  title: { text: '关系图 - 知识图谱', left: 'center' },
  tooltip: {},
  series: [{
    type: 'graph',
    layout: 'force',
    roam: true,
    label: { show: true },
    force: {
      repulsion: 100,
      edgeLength: 80
    },
    data: [
      { name: 'Vue', category: 0 },
      { name: 'React', category: 0 },
      { name: 'Angular', category: 0 },
      { name: 'TypeScript', category: 1 },
      { name: 'JavaScript', category: 1 },
      { name: 'Node.js', category: 2 }
    ],
    links: [
      { source: 'Vue', target: 'JavaScript' },
      { source: 'React', target: 'JavaScript' },
      { source: 'Angular', target: 'TypeScript' },
      { source: 'TypeScript', target: 'JavaScript' },
      { source: 'Node.js', target: 'JavaScript' }
    ],
    categories: [
      { name: '框架' },
      { name: '语言' },
      { name: '运行时' }
    ]
  }]
}
