/**
 * 地理可视化 - 世界人口TOP10 (使用柱状图替代地图)
 * 注: 原地图示例因需要GeoJSON数据已替换
 */
export default {
  title: {
    text: '世界人口最多的国家 TOP10',
    subtext: '数据来源: 联合国2023年统计',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b}<br/>人口: {c} 亿'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    name: '人口 (亿)',
    axisLabel: {
      formatter: '{value} 亿'
    }
  },
  yAxis: {
    type: 'category',
    data: ['尼日利亚', '巴基斯坦', '印度尼西亚', '美国', '印度', '中国'],
    axisLabel: {
      fontSize: 14,
      fontWeight: 'bold'
    }
  },
  series: [{
    name: '人口',
    type: 'bar',
    data: [
      { value: 2.23, itemStyle: { color: '#91cc75' } },
      { value: 2.40, itemStyle: { color: '#fac858' } },
      { value: 2.78, itemStyle: { color: '#ee6666' } },
      { value: 3.33, itemStyle: { color: '#73c0de' } },
      { value: 14.29, itemStyle: { color: '#3ba272' } },
      { value: 14.26, itemStyle: { 
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            { offset: 0, color: '#fc8452' },
            { offset: 1, color: '#fdcd5e' }
          ]
        }
      }}
    ],
    label: {
      show: true,
      position: 'right',
      formatter: '{c} 亿',
      fontSize: 12,
      fontWeight: 'bold',
      color: '#333'
    },
    barWidth: '60%',
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)'
      }
    }
  }]
}
