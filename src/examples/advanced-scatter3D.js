/**
 * 3D散点图 - 空间数据分布
 */
export default {
  title: {
    text: '3D数据分布分析',
    subtext: '随机生成的三维坐标点',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    formatter: function(params) {
      return `X: ${params.value[0].toFixed(2)}<br/>Y: ${params.value[1].toFixed(2)}<br/>Z: ${params.value[2].toFixed(2)}`;
    }
  },
  xAxis3D: {
    name: 'X轴',
    type: 'value',
    min: 0,
    max: 100,
    axisLabel: {
      fontSize: 12
    }
  },
  yAxis3D: {
    name: 'Y轴',
    type: 'value',
    min: 0,
    max: 100,
    axisLabel: {
      fontSize: 12
    }
  },
  zAxis3D: {
    name: 'Z轴',
    type: 'value',
    min: 0,
    max: 100,
    axisLabel: {
      fontSize: 12
    }
  },
  grid3D: {
    boxWidth: 200,
    boxDepth: 150,
    boxHeight: 120,
    viewControl: {
      autoRotate: true,
      autoRotateSpeed: 10,
      distance: 250,
      alpha: 20,
      beta: 40
    },
    light: {
      main: {
        intensity: 1.2,
        shadow: true
      },
      ambient: {
        intensity: 0.3
      }
    }
  },
  series: [{
    type: 'scatter3D',
    name: '数据点',
    symbolSize: 12,
    data: Array.from({ length: 80 }, () => [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100
    ]),
    itemStyle: {
      color: '#667eea',
      opacity: 0.8,
      borderWidth: 1,
      borderColor: '#fff'
    },
    emphasis: {
      itemStyle: {
        color: '#ff6b6b',
        opacity: 1,
        borderWidth: 2
      }
    }
  }]
}
