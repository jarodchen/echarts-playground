// 特殊图表 - 词云图(需要echarts-wordcloud插件)
export default {
  title: { text: '技术关键词云', left: 'center' },
  tooltip: { show: true },
  series: [{
    type: 'wordCloud',
    shape: 'circle',
    left: 'center',
    top: 'center',
    width: '80%',
    height: '80%',
    right: null,
    bottom: null,
    sizeRange: [12, 60],
    rotationRange: [-90, 90],
    rotationStep: 45,
    gridSize: 8,
    drawOutOfBound: false,
    textStyle: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color: function () {
        return 'rgb(' + [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160)
        ].join(',') + ')'
      }
    },
    emphasis: {
      textStyle: {
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    data: [
      { name: 'JavaScript', value: 100 },
      { name: 'Vue', value: 85 },
      { name: 'React', value: 80 },
      { name: 'TypeScript', value: 75 },
      { name: 'Node.js', value: 70 },
      { name: 'Python', value: 65 },
      { name: 'ECharts', value: 60 },
      { name: 'Vite', value: 55 },
      { name: 'Webpack', value: 50 },
      { name: 'CSS', value: 45 },
      { name: 'HTML', value: 40 },
      { name: 'Git', value: 35 },
      { name: 'Docker', value: 30 },
      { name: 'Linux', value: 25 }
    ]
  }]
}
