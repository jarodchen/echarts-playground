/**
 * 缩放功能演示 - 大数据量时间序列
 */
import * as echarts from 'echarts'

export default {
  title: {
    text: '全年销售数据趋势',
    subtext: '使用鼠标滚轮或底部滑动条进行缩放',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['销售额', '利润', '订单量'],
    top: 40
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '15%',  // 为滑动条留出空间
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: generateDateData()
  },
  yAxis: [
    {
      type: 'value',
      name: '金额(万元)',
      position: 'left'
    },
    {
      type: 'value',
      name: '订单量',
      position: 'right'
    }
  ],
  series: [
    {
      name: '销售额',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#667eea'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(102, 126, 234, 0.5)' },
          { offset: 1, color: 'rgba(102, 126, 234, 0.05)' }
        ])
      },
      data: generateRandomData(365, 50, 200)
    },
    {
      name: '利润',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#73d13d'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(115, 209, 61, 0.5)' },
          { offset: 1, color: 'rgba(115, 209, 61, 0.05)' }
        ])
      },
      data: generateRandomData(365, 10, 80)
    },
    {
      name: '订单量',
      type: 'bar',
      yAxisIndex: 1,
      itemStyle: {
        color: 'rgba(255, 193, 7, 0.6)'
      },
      data: generateRandomData(365, 100, 500)
    }
  ]
}

// 生成日期数据
function generateDateData() {
  const dates = []
  const start = new Date('2023-01-01')
  for (let i = 0; i < 365; i++) {
    const date = new Date(start.getTime() + i * 24 * 60 * 60 * 1000)
    dates.push(`${date.getMonth() + 1}/${date.getDate()}`)
  }
  return dates
}

// 生成随机数据
function generateRandomData(count, min, max) {
  const data = []
  for (let i = 0; i < count; i++) {
    data.push(Math.round(Math.random() * (max - min) + min))
  }
  return data
}
