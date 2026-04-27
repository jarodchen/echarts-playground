// 基础图表 - 散点图
export default {
  title: { text: '身高体重关系', left: 'center' },
  tooltip: {
    trigger: 'item',
    formatter: params => `身高: ${params.data[0]}cm<br/>体重: ${params.data[1]}kg`
  },
  xAxis: { 
    type: 'value',
    name: '身高(cm)',
    min: 150,
    max: 200
  },
  yAxis: { 
    type: 'value',
    name: '体重(kg)',
    min: 40,
    max: 100
  },
  series: [{
    type: 'scatter',
    symbolSize: 15,
    data: [
      [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0],
      [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8],
      [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2],
      [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [176.5, 71.8]
    ],
    itemStyle: { color: '#5470c6', opacity: 0.8 }
  }]
}
