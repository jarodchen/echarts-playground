/**
 * 箱线图 - 统计分析
 */
export default {
  title: {
    text: '各城市房价分布分析',
    subtext: '单位: 万元/平方米',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'cross'
    },
    formatter: function(param) {
      const data = param.data;
      return `${param.name}<br/>
        最大值: ${data[5]}<br/>
        上四分位: ${data[4]}<br/>
        中位数: ${data[3]}<br/>
        下四分位: ${data[2]}<br/>
        最小值: ${data[1]}`;
    }
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    data: ['北京', '上海', '深圳', '广州', '杭州', '成都', '武汉', '南京'],
    boundaryGap: true,
    axisTick: {
      show: true
    },
    axisLine: {
      show: true
    },
    axisLabel: {
      fontSize: 14,
      fontWeight: 'bold'
    }
  },
  yAxis: {
    type: 'value',
    name: '房价 (万元/㎡)',
    splitArea: {
      show: true
    }
  },
  series: [
    {
      name: '房价分布',
      type: 'boxplot',
      data: [
        [3.5, 5.2, 6.8, 8.5, 10.2, 12.5],   // 北京
        [3.2, 4.8, 6.2, 7.8, 9.5, 11.8],    // 上海
        [2.8, 4.2, 5.5, 7.2, 8.8, 10.5],    // 深圳
        [1.8, 2.8, 3.5, 4.5, 5.8, 7.2],     // 广州
        [2.2, 3.5, 4.5, 5.8, 7.2, 8.8],     // 杭州
        [1.2, 1.8, 2.5, 3.2, 4.2, 5.5],     // 成都
        [1.0, 1.6, 2.2, 2.8, 3.8, 5.0],     // 武汉
        [1.5, 2.2, 3.0, 3.8, 5.0, 6.5]      // 南京
      ],
      itemStyle: {
        borderColor: '#667eea',
        borderWidth: 2
      },
      emphasis: {
        itemStyle: {
          color: '#667eea',
          borderColor: '#764ba2',
          borderWidth: 3
        }
      }
    }
  ]
}
