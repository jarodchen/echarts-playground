/**
 * 动画效果 - 自定义动画配置
 */
import * as echarts from 'echarts'

export default {
  title: {
    text: '动画效果演示',
    subtext: '丰富的入场动画和过渡效果',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['预算分配', '实际开销'],
    top: 40
  },
  radar: {
    indicator: [
      { name: '销售', max: 6500 },
      { name: '管理', max: 16000 },
      { name: '信息技术', max: 30000 },
      { name: '客服', max: 38000 },
      { name: '研发', max: 52000 },
      { name: '市场', max: 25000 }
    ],
    shape: 'circle',
    splitNumber: 5,
    axisName: {
      color: 'rgb(238, 197, 102)'
    },
    splitLine: {
      lineStyle: {
        color: [
          'rgba(238, 197, 102, 0.1)',
          'rgba(238, 197, 102, 0.2)',
          'rgba(238, 197, 102, 0.4)',
          'rgba(238, 197, 102, 0.6)',
          'rgba(238, 197, 102, 0.8)',
          'rgba(238, 197, 102, 1)'
        ].reverse()
      }
    },
    splitArea: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(238, 197, 102, 0.5)'
      }
    }
  },
  series: [
    {
      name: '预算 vs 开销',
      type: 'radar',
      lineStyle: {
        width: 3,
        type: 'dashed'
      },
      symbol: 'circle',
      symbolSize: 10,
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      // 动画配置
      animation: true,
      animationDuration: 2000,
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return idx * 100;
      },
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '预算分配',
          itemStyle: {
            color: '#67F9D8'
          },
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: 'rgba(103, 249, 216, 0.1)',
                offset: 0
              },
              {
                color: 'rgba(103, 249, 216, 0.9)',
                offset: 1
              }
            ])
          }
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '实际开销',
          itemStyle: {
            color: '#FFE434'
          },
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: 'rgba(255, 228, 52, 0.1)',
                offset: 0
              },
              {
                color: 'rgba(255, 228, 52, 0.9)',
                offset: 1
              }
            ])
          }
        }
      ]
    }
  ]
}
