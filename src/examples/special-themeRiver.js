// 特殊图表 - 主题河流
export default {
  title: { text: '主题河流图', left: 'center' },
  tooltip: { trigger: 'axis' },
  singleAxis: {
    top: 50,
    bottom: 50,
    type: 'time'
  },
  series: [{
    type: 'themeRiver',
    data: [
      ['2015/11/08', 10, 'DQ'],
      ['2015/11/09', 15, 'DQ'],
      ['2015/11/10', 35, 'DQ'],
      ['2015/11/08', 20, 'TY'],
      ['2015/11/09', 25, 'TY'],
      ['2015/11/10', 30, 'TY'],
      ['2015/11/08', 30, 'SS'],
      ['2015/11/09', 35, 'SS'],
      ['2015/11/10', 40, 'SS']
    ]
  }]
}
