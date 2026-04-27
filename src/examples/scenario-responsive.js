/**
 * 响应式布局 - 自适应不同屏幕
 */
export default {
  title: {
    text: '响应式图表示例',
    subtext: '拖动窗口查看自适应效果',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['访问量', '独立访客', 'IP数'],
    top: 40,
    type: 'scroll'
  },
  grid: [
    {
      left: '5%',
      right: '5%',
      top: '15%',
      bottom: '5%',
      containLabel: true
    }
  ],
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false
      },
      data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      },
      splitLine: {
        lineStyle: {
          color: '#f0f0f0'
        }
      }
    }
  ],
  series: [
    {
      name: '访问量',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowBlur: 10,
        shadowOffsetY: 5
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320, 1400, 1450, 1500, 1380, 1200, 1000]
    },
    {
      name: '独立访客',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowBlur: 10,
        shadowOffsetY: 5
      },
      emphasis: {
        focus: 'series'
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120, 1200, 1250, 1300, 1180, 1000, 800]
    },
    {
      name: 'IP数',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowBlur: 10,
        shadowOffsetY: 5
      },
      emphasis: {
        focus: 'series'
      },
      data: [420, 532, 501, 534, 890, 930, 920, 1000, 1050, 1100, 980, 800, 600]
    }
  ]
}
