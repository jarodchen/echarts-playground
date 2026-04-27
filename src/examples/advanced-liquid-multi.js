/**
 * 水球图 - 进度指示器
 */
export default {
  title: {
    text: '服务器资源使用情况',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}%'
  },
  series: [
    {
      type: 'liquidFill',
      name: 'CPU使用率',
      data: [0.68, 0.65, 0.6],
      center: ['25%', '50%'],
      radius: '40%',
      color: ['#ff4d4f', '#ff7875', '#ffa39e'],
      backgroundStyle: {
        color: '#fff'
      },
      outline: {
        borderDistance: 8,
        itemStyle: {
          borderWidth: 3,
          borderColor: '#ff4d4f',
          shadowBlur: 20,
          shadowColor: 'rgba(255, 77, 79, 0.5)'
        }
      },
      label: {
        formatter: 'CPU\n{c}%',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bold'
        }
      }
    },
    {
      type: 'liquidFill',
      name: '内存使用率',
      data: [0.75, 0.72, 0.7],
      center: ['50%', '50%'],
      radius: '40%',
      color: ['#1890ff', '#40a9ff', '#69c0ff'],
      backgroundStyle: {
        color: '#fff'
      },
      outline: {
        borderDistance: 8,
        itemStyle: {
          borderWidth: 3,
          borderColor: '#1890ff',
          shadowBlur: 20,
          shadowColor: 'rgba(24, 144, 255, 0.5)'
        }
      },
      label: {
        formatter: '内存\n{c}%',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bold'
        }
      }
    },
    {
      type: 'liquidFill',
      name: '磁盘使用率',
      data: [0.45, 0.42, 0.4],
      center: ['75%', '50%'],
      radius: '40%',
      color: ['#52c41a', '#73d13d', '#95de64'],
      backgroundStyle: {
        color: '#fff'
      },
      outline: {
        borderDistance: 8,
        itemStyle: {
          borderWidth: 3,
          borderColor: '#52c41a',
          shadowBlur: 20,
          shadowColor: 'rgba(82, 196, 26, 0.5)'
        }
      },
      label: {
        formatter: '磁盘\n{c}%',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bold'
        }
      }
    }
  ],
  graphic: [
    {
      type: 'text',
      left: '25%',
      top: '85%',
      style: {
        text: 'CPU',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        fill: '#ff4d4f'
      }
    },
    {
      type: 'text',
      left: '50%',
      top: '85%',
      style: {
        text: '内存',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        fill: '#1890ff'
      }
    },
    {
      type: 'text',
      left: '75%',
      top: '85%',
      style: {
        text: '磁盘',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        fill: '#52c41a'
      }
    }
  ]
}
