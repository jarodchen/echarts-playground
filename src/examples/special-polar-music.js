/**
 * 极坐标图 - 音乐节奏可视化
 */
export default {
  title: {
    text: '音乐频谱分析',
    subtext: '极坐标系下的频率分布',
    left: 'center'
  },
  polar: {
    radius: ['10%', '80%']
  },
  angleAxis: {
    type: 'category',
    data: ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'],
    startAngle: 75,
    axisLabel: {
      fontSize: 14,
      fontWeight: 'bold'
    }
  },
  radiusAxis: {
    min: 0,
    max: 100,
    axisLabel: {
      formatter: '{value} dB'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} dB'
  },
  series: [
    {
      type: 'bar',
      coordinateSystem: 'polar',
      name: '钢琴',
      data: [85, 72, 68, 75, 82, 70, 65],
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#667eea' },
            { offset: 1, color: '#764ba2' }
          ]
        }
      }
    },
    {
      type: 'bar',
      coordinateSystem: 'polar',
      name: '小提琴',
      data: [70, 65, 78, 80, 75, 82, 88],
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#f093fb' },
            { offset: 1, color: '#f5576c' }
          ]
        }
      }
    },
    {
      type: 'line',
      coordinateSystem: 'polar',
      name: '平均值',
      data: [77.5, 68.5, 73, 77.5, 78.5, 76, 76.5],
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#52c41a'
      },
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        color: '#52c41a',
        borderWidth: 2,
        borderColor: '#fff'
      }
    }
  ],
  legend: {
    data: ['钢琴', '小提琴', '平均值'],
    bottom: 10
  }
}
