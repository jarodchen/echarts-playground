/**
 * 时间轴柱状图 - 动态数据展示
 */
export default {
  baseOption: {
    timeline: {
      axisType: 'category',
      autoPlay: true,
      playInterval: 2000,
      data: ['2019', '2020', '2021', '2022', '2023'],
      label: {
        formatter: function(s) {
          return s + '年';
        }
      }
    },
    title: {
      text: '中国GDP增长趋势',
      subtext: '按季度统计 (万亿元)',
      left: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}<br/>{a}: {c} 万亿元'
    },
    xAxis: {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4'],
      axisLabel: {
        fontSize: 14,
        fontWeight: 'bold'
      }
    },
    yAxis: {
      type: 'value',
      name: 'GDP (万亿元)',
      min: 20,
      max: 35,
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [
      {
        name: 'GDP',
        type: 'bar',
        barWidth: '50%',
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
          },
          borderRadius: [8, 8, 0, 0]
        },
        label: {
          show: true,
          position: 'top',
          formatter: '{c}',
          fontSize: 12,
          color: '#667eea'
        },
        data: [] // 将在options中定义
      }
    ]
  },
  options: [
    {
      series: [{
        data: [21.34, 23.24, 24.69, 27.24]
      }]
    },
    {
      series: [{
        data: [19.29, 22.64, 24.93, 27.79]
      }]
    },
    {
      series: [{
        data: [24.69, 26.73, 28.49, 31.37]
      }]
    },
    {
      series: [{
        data: [27.02, 29.24, 31.18, 34.39]
      }]
    },
    {
      series: [{
        data: [28.43, 30.81, 32.68, 35.79]
      }]
    }
  ]
}
