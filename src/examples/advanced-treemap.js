// 高级图表 - 树图
export default {
  title: { text: '树图 - 文件结构', left: 'center' },
  series: [{
    type: 'treemap',
    data: [
      {
        name: '前端',
        value: 100,
        children: [
          { name: 'HTML', value: 30 },
          { name: 'CSS', value: 25 },
          { name: 'JavaScript', value: 45 }
        ]
      },
      {
        name: '后端',
        value: 120,
        children: [
          { name: 'Node.js', value: 40 },
          { name: 'Python', value: 35 },
          { name: 'Java', value: 45 }
        ]
      },
      {
        name: '数据库',
        value: 80,
        children: [
          { name: 'MySQL', value: 45 },
          { name: 'MongoDB', value: 35 }
        ]
      }
    ]
  }]
}
