/**
 * 仪表盘 - 多维度监控面板
 */
export default {
  title: {
    text: '企业运营监控面板',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  series: [
    {
      type: 'gauge',
      center: ['20%', '55%'],
      radius: '70%',
      min: 0,
      max: 100,
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 12
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: true,
        offsetCenter: [0, '70%'],
        fontSize: 14,
        fontWeight: 'bold'
      },
      detail: {
        valueAnimation: true,
        fontSize: 24,
        offsetCenter: [0, '90%'],
        formatter: '{value}%'
      },
      data: [{
        value: 78.5,
        name: '客户满意度'
      }],
      itemStyle: {
        color: '#52c41a'
      }
    },
    {
      type: 'gauge',
      center: ['50%', '55%'],
      radius: '70%',
      min: 0,
      max: 1000,
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 12
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: true,
        offsetCenter: [0, '70%'],
        fontSize: 14,
        fontWeight: 'bold'
      },
      detail: {
        valueAnimation: true,
        fontSize: 24,
        offsetCenter: [0, '90%'],
        formatter: '{value}'
      },
      data: [{
        value: 658,
        name: '今日订单数'
      }],
      itemStyle: {
        color: '#1890ff'
      }
    },
    {
      type: 'gauge',
      center: ['80%', '55%'],
      radius: '70%',
      min: 0,
      max: 100,
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 12
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: true,
        offsetCenter: [0, '70%'],
        fontSize: 14,
        fontWeight: 'bold'
      },
      detail: {
        valueAnimation: true,
        fontSize: 24,
        offsetCenter: [0, '90%'],
        formatter: '{value}%'
      },
      data: [{
        value: 92.3,
        name: '系统稳定性'
      }],
      itemStyle: {
        color: '#722ed1'
      }
    }
  ]
}
