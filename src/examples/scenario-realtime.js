/**
 * 动态数据更新 - 实时数据流模拟
 */
import * as echarts from 'echarts'

export default {
  title: {
    text: '实时数据监控',
    subtext: '每秒自动更新数据',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      params = params[0];
      return params.name + ' : ' + params.value[1];
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: true,
      lineStyle: {
        color: '#eee'
      }
    }
  },
  series: [
    {
      name: '模拟数据',
      type: 'line',
      showSymbol: false,
      smooth: true,
      lineStyle: {
        width: 2,
        color: '#5470c6'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(84, 112, 198, 0.3)'
          },
          {
            offset: 1,
            color: 'rgba(84, 112, 198, 0.05)'
          }
        ])
      },
      data: generateInitialData()
    }
  ]
}

// 生成初始数据（过去60秒）
function generateInitialData() {
  const data = [];
  const now = new Date();
  for (let i = 60; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 1000);
    data.push({
      name: time.toString(),
      value: [
        time,
        Math.round(Math.random() * 100 + 50)
      ]
    });
  }
  return data;
}
