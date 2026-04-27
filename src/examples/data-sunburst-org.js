/**
 * 旭日图 - 多层级数据结构
 */
export default {
  title: {
    text: '公司组织架构与人员分布',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      return `${params.name}<br/>人数: ${params.value}`;
    }
  },
  series: {
    type: 'sunburst',
    data: [
      {
        name: '总公司',
        value: 1000,
        children: [
          {
            name: '技术部',
            value: 400,
            children: [
              {
                name: '前端组',
                value: 120,
                children: [
                  { name: 'React团队', value: 60 },
                  { name: 'Vue团队', value: 60 }
                ]
              },
              {
                name: '后端组',
                value: 150,
                children: [
                  { name: 'Java团队', value: 80 },
                  { name: 'Python团队', value: 70 }
                ]
              },
              {
                name: '移动端组',
                value: 80,
                children: [
                  { name: 'iOS团队', value: 40 },
                  { name: 'Android团队', value: 40 }
                ]
              },
              { name: '测试组', value: 50 }
            ]
          },
          {
            name: '产品部',
            value: 150,
            children: [
              { name: '产品设计', value: 80 },
              { name: '用户研究', value: 40 },
              { name: '数据分析', value: 30 }
            ]
          },
          {
            name: '运营部',
            value: 200,
            children: [
              { name: '内容运营', value: 80 },
              { name: '活动运营', value: 60 },
              { name: '用户运营', value: 60 }
            ]
          },
          {
            name: '市场部',
            value: 150,
            children: [
              { name: '品牌推广', value: 70 },
              { name: '渠道拓展', value: 50 },
              { name: '公关关系', value: 30 }
            ]
          },
          {
            name: '职能部',
            value: 100,
            children: [
              { name: '人力资源', value: 40 },
              { name: '财务管理', value: 35 },
              { name: '行政管理', value: 25 }
            ]
          }
        ]
      }
    ],
    radius: [0, '90%'],
    label: {
      rotate: 'radial',
      fontSize: 11,
      fontWeight: 'bold'
    },
    emphasis: {
      focus: 'ancestor',
      itemStyle: {
        shadowBlur: 20,
        shadowColor: 'rgba(0, 0, 0, 0.3)'
      }
    },
    levels: [
      {},
      {
        r0: '0%',
        r: '20%',
        label: {
          fontSize: 14,
          fontWeight: 'bold'
        },
        itemStyle: {
          color: '#667eea'
        }
      },
      {
        r0: '20%',
        r: '45%',
        label: {
          fontSize: 12
        }
      },
      {
        r0: '45%',
        r: '65%',
        label: {
          fontSize: 11
        }
      },
      {
        r0: '65%',
        r: '90%',
        label: {
          fontSize: 10
        }
      }
    ]
  }
}
