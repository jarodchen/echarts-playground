/**
 * 象形柱图 - 创意可视化
 */
export default {
  title: {
    text: '奥运会奖牌榜',
    subtext: '使用象形图形展示',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['金牌', '银牌', '铜牌'],
    bottom: 10
  },
  xAxis: {
    data: ['美国', '中国', '英国', '俄罗斯', '德国', '法国', '日本', '澳大利亚'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      fontSize: 14,
      fontWeight: 'bold'
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  grid: {
    left: '3%',
    right: '3%',
    bottom: '10%',
    containLabel: true
  },
  series: [
    {
      name: '金牌',
      type: 'pictorialBar',
      symbol: 'circle',
      symbolSize: [30, 20],
      symbolRepeat: true,
      symbolMargin: 2,
      itemStyle: {
        color: '#FFD700'
      },
      data: [39, 38, 22, 20, 10, 10, 27, 17],
      z: 10
    },
    {
      name: '银牌',
      type: 'pictorialBar',
      symbol: 'circle',
      symbolSize: [30, 20],
      symbolRepeat: true,
      symbolMargin: 2,
      itemStyle: {
        color: '#C0C0C0'
      },
      data: [41, 32, 21, 28, 11, 12, 14, 7],
      z: 9
    },
    {
      name: '铜牌',
      type: 'pictorialBar',
      symbol: 'circle',
      symbolSize: [30, 20],
      symbolRepeat: true,
      symbolMargin: 2,
      itemStyle: {
        color: '#CD7F32'
      },
      data: [33, 18, 22, 23, 16, 11, 17, 22],
      z: 8
    }
  ]
}
