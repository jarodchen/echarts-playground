/**
 * 雷达图 - 多维度能力评估
 */
export default {
  title: {
    text: '游戏角色能力评估',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    data: ['战士', '法师', '刺客'],
    bottom: 10
  },
  radar: {
    indicator: [
      { name: '攻击力', max: 100 },
      { name: '防御力', max: 100 },
      { name: '生命值', max: 100 },
      { name: '速度', max: 100 },
      { name: '技能强度', max: 100 },
      { name: '控制力', max: 100 }
    ],
    radius: '65%',
    center: ['50%', '50%'],
    axisName: {
      color: '#333',
      fontSize: 14,
      fontWeight: 'bold'
    },
    splitArea: {
      areaStyle: {
        color: ['#f8f9fa', '#e9ecef']
      }
    }
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [90, 75, 85, 60, 70, 65],
          name: '战士',
          itemStyle: {
            color: '#ff4d4f'
          },
          lineStyle: {
            width: 3
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(255, 77, 79, 0.6)' },
                { offset: 1, color: 'rgba(255, 77, 79, 0.1)' }
              ]
            }
          }
        },
        {
          value: [65, 45, 60, 70, 95, 85],
          name: '法师',
          itemStyle: {
            color: '#1890ff'
          },
          lineStyle: {
            width: 3
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(24, 144, 255, 0.6)' },
                { offset: 1, color: 'rgba(24, 144, 255, 0.1)' }
              ]
            }
          }
        },
        {
          value: [80, 40, 50, 95, 75, 70],
          name: '刺客',
          itemStyle: {
            color: '#52c41a'
          },
          lineStyle: {
            width: 3
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(82, 196, 26, 0.6)' },
                { offset: 1, color: 'rgba(82, 196, 26, 0.1)' }
              ]
            }
          }
        }
      ]
    }
  ]
}
