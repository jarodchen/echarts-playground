/**
 * 主题河流图 - 多变量时间序列
 */
export default {
  title: {
    text: '一周应用使用时长分析',
    subtext: '按应用类别统计',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    formatter: function(params) {
      let result = params[0].axisValue + '<br/>';
      params.forEach(param => {
        result += `${param.marker} ${param.seriesName}: ${param.value} 小时<br/>`;
      });
      return result;
    }
  },
  legend: {
    data: ['社交', '游戏', '视频', '音乐', '阅读', '工具'],
    bottom: 10
  },
  grid: {
    left: '5%',
    right: '5%',
    top: '15%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLabel: {
      fontSize: 14,
      fontWeight: 'bold'
    }
  },
  yAxis: {
    type: 'value',
    name: '使用时长 (小时)',
    axisLabel: {
      formatter: '{value}h'
    }
  },
  series: [
    {
      name: '社交',
      type: 'themeRiver',
      stack: '总量',
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      data: [
        ['周一', 2.5, '社交'],
        ['周二', 2.8, '社交'],
        ['周三', 3.2, '社交'],
        ['周四', 3.0, '社交'],
        ['周五', 3.5, '社交'],
        ['周六', 4.2, '社交'],
        ['周日', 4.5, '社交']
      ]
    },
    {
      name: '游戏',
      type: 'themeRiver',
      stack: '总量',
      data: [
        ['周一', 1.2, '游戏'],
        ['周二', 1.5, '游戏'],
        ['周三', 1.8, '游戏'],
        ['周四', 1.6, '游戏'],
        ['周五', 2.5, '游戏'],
        ['周六', 3.8, '游戏'],
        ['周日', 4.0, '游戏']
      ]
    },
    {
      name: '视频',
      type: 'themeRiver',
      stack: '总量',
      data: [
        ['周一', 1.8, '视频'],
        ['周二', 2.0, '视频'],
        ['周三', 2.2, '视频'],
        ['周四', 2.5, '视频'],
        ['周五', 3.0, '视频'],
        ['周六', 3.5, '视频'],
        ['周日', 3.8, '视频']
      ]
    },
    {
      name: '音乐',
      type: 'themeRiver',
      stack: '总量',
      data: [
        ['周一', 1.5, '音乐'],
        ['周二', 1.6, '音乐'],
        ['周三', 1.8, '音乐'],
        ['周四', 1.7, '音乐'],
        ['周五', 2.0, '音乐'],
        ['周六', 2.5, '音乐'],
        ['周日', 2.8, '音乐']
      ]
    },
    {
      name: '阅读',
      type: 'themeRiver',
      stack: '总量',
      data: [
        ['周一', 1.0, '阅读'],
        ['周二', 1.2, '阅读'],
        ['周三', 1.5, '阅读'],
        ['周四', 1.3, '阅读'],
        ['周五', 1.8, '阅读'],
        ['周六', 2.2, '阅读'],
        ['周日', 2.5, '阅读']
      ]
    },
    {
      name: '工具',
      type: 'themeRiver',
      stack: '总量',
      data: [
        ['周一', 0.8, '工具'],
        ['周二', 0.9, '工具'],
        ['周三', 1.0, '工具'],
        ['周四', 1.1, '工具'],
        ['周五', 1.2, '工具'],
        ['周六', 1.5, '工具'],
        ['周日', 1.6, '工具']
      ]
    }
  ]
}
