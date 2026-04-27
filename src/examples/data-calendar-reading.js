/**
 * 日历图 - 年度数据展示
 */
export default {
  title: {
    text: '2023年每日阅读记录',
    subtext: '每天阅读的页数',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      const date = params.data[0];
      const value = params.data[1];
      return `${date}<br/>阅读: ${value} 页`;
    }
  },
  visualMap: {
    min: 0,
    max: 100,
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65,
    pieces: [
      { min: 0, max: 0, label: '未阅读', color: '#f0f0f0' },
      { min: 1, max: 20, label: '1-20页', color: '#d4f1f9' },
      { min: 21, max: 40, label: '21-40页', color: '#7ec8e3' },
      { min: 41, max: 60, label: '41-60页', color: '#4aa3df' },
      { min: 61, max: 80, label: '61-80页', color: '#2c7fb8' },
      { min: 81, max: 100, label: '81-100页', color: '#08519c' }
    ]
  },
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: '2023',
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: true },
    monthLabel: {
      nameMap: 'ZH',
      fontSize: 12,
      fontWeight: 'bold'
    },
    dayLabel: {
      nameMap: 'ZH',
      fontSize: 11
    },
    splitLine: {
      lineStyle: {
        color: '#ddd',
        width: 1
      }
    }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: (function() {
      // 生成模拟数据
      const data = [];
      const start = new Date('2023-01-01');
      const end = new Date('2023-12-31');
      
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        // 周末更可能多读一些
        const isWeekend = d.getDay() === 0 || d.getDay() === 6;
        const value = isWeekend 
          ? Math.floor(Math.random() * 100)
          : Math.floor(Math.random() * 60);
        data.push([dateStr, value]);
      }
      return data;
    })()
  }
}
