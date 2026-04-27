// 数据可视化 - 旭日图
export default {
  title: { text: '产品销售层级分析', left: 'center' },
  series: {
    type: 'sunburst',
    data: [
      {
        name: '电子产品',
        children: [
          {
            name: '手机',
            value: 100,
            children: [
              { name: 'iPhone', value: 60 },
              { name: 'Android', value: 40 }
            ]
          },
          {
            name: '电脑',
            value: 80,
            children: [
              { name: '笔记本', value: 50 },
              { name: '台式机', value: 30 }
            ]
          }
        ]
      },
      {
        name: '服装',
        children: [
          { name: '男装', value: 50 },
          { name: '女装', value: 70 },
          { name: '童装', value: 30 }
        ]
      }
    ],
    radius: [0, '90%'],
    label: { rotate: 'radial' }
  }
}
