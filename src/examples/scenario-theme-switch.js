/**
 * 主题切换演示 - 深色/浅色主题
 */
export default {
  backgroundColor: '#fff',
  title: {
    text: '主题切换演示',
    subtext: '点击配置中的"切换主题"按钮查看效果',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    top: 40
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      smooth: true,
      areaStyle: {
        opacity: 0.3
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320],
      itemStyle: {
        color: '#5470c6'
      }
    },
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      smooth: true,
      areaStyle: {
        opacity: 0.3
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210],
      itemStyle: {
        color: '#91cc75'
      }
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      smooth: true,
      areaStyle: {
        opacity: 0.3
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310],
      itemStyle: {
        color: '#fac858'
      }
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      smooth: true,
      areaStyle: {
        opacity: 0.3
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410],
      itemStyle: {
        color: '#ee6666'
      }
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      smooth: true,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.3
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      itemStyle: {
        color: '#73c0de'
      }
    }
  ]
}
