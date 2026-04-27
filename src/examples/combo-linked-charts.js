/**
 * 图表联动 - 多个图表交互
 */
import * as echarts from 'echarts'

export default {
  title: {
    text: '图表联动示例',
    subtext: '鼠标悬停在一个图表上，另一个图表会同步显示',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['销售额', '订单量'],
    top: 40
  },
  grid: [
    {
      left: '10%',
      right: '8%',
      top: '15%',
      height: '35%'
    },
    {
      left: '10%',
      right: '8%',
      top: '55%',
      height: '35%'
    }
  ],
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisPointer: {
        type: 'shadow'
      },
      gridIndex: 0
    },
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisPointer: {
        type: 'shadow'
      },
      gridIndex: 1,
      position: 'top'
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '销售额(万元)',
      gridIndex: 0
    },
    {
      type: 'value',
      name: '订单量(千)',
      gridIndex: 1
    }
  ],
  series: [
    {
      name: '销售额',
      type: 'bar',
      data: [820, 932, 901, 934, 1290, 1330, 1320, 1450, 1580, 1620, 1750, 1880],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      xAxisIndex: 0,
      yAxisIndex: 0
    },
    {
      name: '订单量',
      type: 'line',
      smooth: true,
      data: [620, 732, 701, 734, 1090, 1130, 1120, 1250, 1380, 1420, 1550, 1680],
      lineStyle: {
        width: 3,
        color: '#ee6666'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(238, 102, 102, 0.3)' },
          { offset: 1, color: 'rgba(238, 102, 102, 0.05)' }
        ])
      },
      xAxisIndex: 1,
      yAxisIndex: 1
    }
  ]
}
