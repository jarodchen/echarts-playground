/**
 * ECharts 示例配置索引
 * 按类别组织的所有示例图表配置
 */

// 基础图表
import basicLine from './basic-line.js'
import basicBar from './basic-bar.js'
import basicPie from './basic-pie.js'
import basicScatter from './basic-scatter.js'
import basicRadar from './basic-radar.js'
import basicArea from './basic-area.js'
import basicBarHorizontal from './basic-bar-horizontal.js'

// 高级图表
import advancedCandlestick from './advanced-candlestick.js'
import advancedHeatmap from './advanced-heatmap.js'
import advancedGauge from './advanced-gauge.js'
import advancedTreemap from './advanced-treemap.js'
import advancedScatter3D from './advanced-scatter3D.js'
import advancedLiquidfill from './advanced-liquidfill.js'
import advancedRadarMulti from './advanced-radar-multi.js'
import advancedGaugeDashboard from './advanced-gauge-dashboard.js'
import advancedLiquidMulti from './advanced-liquid-multi.js'
import advancedGradientArea from './advanced-gradient-area.js'
import advancedAnimation from './advanced-animation.js'

// 组合图表
import comboMixed from './combo-mixed.js'
import comboStack from './combo-stack.js'
import comboMultiYaxis from './combo-multi-yaxis.js'
import comboTimeline from './combo-timeline.js'
import comboLinkedCharts from './combo-linked-charts.js'
import comboZoomDemo from './combo-zoom-demo.js'

// 数据可视化
import dataFunnel from './data-funnel.js'
import dataSankey from './data-sankey.js'
import dataParallel from './data-parallel.js'
import dataSunburst from './data-sunburst.js'
import dataCalendar from './data-calendar.js'
import dataSankeyEnergy from './data-sankey-energy.js'
import dataCalendarReading from './data-calendar-reading.js'
import dataSunburstOrg from './data-sunburst-org.js'

// 特殊图表
import specialGraph from './special-graph.js'
import specialBoxplot from './special-boxplot.js'
import specialThemeRiver from './special-themeRiver.js'
import specialWordcloud from './special-wordcloud.js'
import specialPolar from './special-polar.js'
import specialPictorial from './special-pictorial.js'
import specialGraphRelations from './special-graph-relations.js'
import specialPictorialOlympic from './special-pictorial-olympic.js'
import specialPolarMusic from './special-polar-music.js'
import specialBoxplotHousing from './special-boxplot-housing.js'
import specialThemeRiverApp from './special-themeRiver-app.js'

// 地理信息
import geoMap from './geo-map.js'

// 实战场景
import scenarioEcommerce from './scenario-ecommerce.js'
import scenarioIot from './scenario-iot.js'
import scenarioFinance from './scenario-finance.js'
import scenarioRealtime from './scenario-realtime.js'
import scenarioThemeSwitch from './scenario-theme-switch.js'
import scenarioResponsive from './scenario-responsive.js'

/**
 * 所有示例配置
 */
export const examples = {
  // 基础图表
  line: basicLine,
  bar: basicBar,
  pie: basicPie,
  scatter: basicScatter,
  radar: basicRadar,
  area: basicArea,
  'bar-horizontal': basicBarHorizontal,
  
  // 高级图表
  candlestick: advancedCandlestick,
  heatmap: advancedHeatmap,
  gauge: advancedGauge,
  treemap: advancedTreemap,
  'scatter-3d': advancedScatter3D,
  liquidfill: advancedLiquidfill,
  'radar-multi': advancedRadarMulti,
  'gauge-dashboard': advancedGaugeDashboard,
  'liquid-multi': advancedLiquidMulti,
  'gradient-area': advancedGradientArea,
  animation: advancedAnimation,
  
  // 组合图表
  mixed: comboMixed,
  stack: comboStack,
  'multi-yaxis': comboMultiYaxis,
  timeline: comboTimeline,
  linked: comboLinkedCharts,
  zoom: comboZoomDemo,
  
  // 数据可视化
  funnel: dataFunnel,
  sankey: dataSankey,
  parallel: dataParallel,
  sunburst: dataSunburst,
  calendar: dataCalendar,
  'sankey-energy': dataSankeyEnergy,
  'calendar-reading': dataCalendarReading,
  'sunburst-org': dataSunburstOrg,
  
  // 特殊图表
  graph: specialGraph,
  boxplot: specialBoxplot,
  themeRiver: specialThemeRiver,
  wordcloud: specialWordcloud,
  polar: specialPolar,
  pictorial: specialPictorial,
  'graph-relations': specialGraphRelations,
  'pictorial-olympic': specialPictorialOlympic,
  'polar-music': specialPolarMusic,
  'boxplot-housing': specialBoxplotHousing,
  'themeRiver-app': specialThemeRiverApp,
  
  // 地理信息
  map: geoMap,
  
  // 实战场景
  ecommerce: scenarioEcommerce,
  iot: scenarioIot,
  finance: scenarioFinance,
  realtime: scenarioRealtime,
  'theme-switch': scenarioThemeSwitch,
  responsive: scenarioResponsive
}

/**
 * 示例元数据(用于UI展示)
 */
export const exampleMeta = {
  categories: [
    {
      label: '📊 基础图表',
      items: [
        { key: 'line', label: '折线图 - 销售趋势' },
        { key: 'bar', label: '柱状图 - 季度对比' },
        { key: 'pie', label: '饼图 - 产品占比' },
        { key: 'scatter', label: '散点图 - 数据分析' },
        { key: 'radar', label: '雷达图 - 能力对比' },
        { key: 'area', label: '面积图 - 累积统计' },
        { key: 'bar-horizontal', label: '横向柱状图 - 排行榜' }
      ]
    },
    {
      label: '🎯 高级图表',
      items: [
        { key: 'candlestick', label: 'K线图 - 股票行情' },
        { key: 'heatmap', label: '热力图 - 销售分布' },
        { key: 'gauge', label: '仪表盘 - 完成率' },
        { key: 'treemap', label: '树图 - 文件结构' },
        { key: 'scatter-3d', label: '3D散点图 - 空间分析' },
        { key: 'liquidfill', label: '水球图 - 进度指示' },
        { key: 'radar-multi', label: '多维雷达图 - 角色评估' },
        { key: 'gauge-dashboard', label: '多仪表盘 - 监控面板' },
        { key: 'liquid-multi', label: '多水球图 - 资源监控' },
        { key: 'gradient-area', label: '🌈 渐变色面积图 - 渐变效果' },
        { key: 'animation', label: '✨ 动画效果 - 自定义动画' }
      ]
    },
    {
      label: '🔀 组合图表',
      items: [
        { key: 'mixed', label: '柱线混合 - 双轴图' },
        { key: 'stack', label: '堆叠柱状图 - 多维度' },
        { key: 'multi-yaxis', label: '多Y轴 - 复合指标' },
        { key: 'timeline', label: '时间轴 - GDP趋势' },
        { key: 'linked', label: '🔗 图表联动 - 多个图表交互' },
        { key: 'zoom', label: '🔍 缩放功能演示 - 大数据量' }
      ]
    },
    {
      label: '📈 数据可视化',
      items: [
        { key: 'funnel', label: '漏斗图 - 转化分析' },
        { key: 'sankey', label: '桑基图 - 流量分析' },
        { key: 'parallel', label: '平行坐标 - 多维分析' },
        { key: 'sunburst', label: '旭日图 - 层级数据' },
        { key: 'calendar', label: '日历图 - 年度数据' },
        { key: 'sankey-energy', label: '能源流向 - 桑基图' },
        { key: 'calendar-reading', label: '阅读记录 - 日历图' },
        { key: 'sunburst-org', label: '组织架构 - 旭日图' }
      ]
    },
    {
      label: '🌟 特殊图表',
      items: [
        { key: 'graph', label: '关系图 - 知识图谱' },
        { key: 'boxplot', label: '箱线图 - 数据分布' },
        { key: 'themeRiver', label: '主题河流 - 时间序列' },
        { key: 'wordcloud', label: '词云图 - 文本分析' },
        { key: 'polar', label: '极坐标 - 径向图' },
        { key: 'pictorial', label: '象形图 - 创意可视化' },
        { key: 'graph-relations', label: '人物关系 - 红楼梦' },
        { key: 'pictorial-olympic', label: '奥运奖牌 - 象形图' },
        { key: 'polar-music', label: '音乐频谱 - 极坐标' },
        { key: 'boxplot-housing', label: '房价分布 - 箱线图' },
        { key: 'themeRiver-app', label: '应用使用 - 主题河流' }
      ]
    },
    {
      label: '🗺️ 地理信息',
      items: [
        { key: 'map', label: '中国地图 - 人口分布' }
      ]
    },
    {
      label: '💼 实战场景',
      items: [
        { key: 'ecommerce', label: '电商数据看板' },
        { key: 'iot', label: 'IoT设备监控' },
        { key: 'finance', label: '金融数据分析' },
        { key: 'realtime', label: '📊 动态数据更新 - 实时数据流' },
        { key: 'theme-switch', label: '🎨 主题切换演示 - 深色/浅色' },
        { key: 'responsive', label: '📱 响应式布局 - 自适应屏幕' }
      ]
    }
  ]
}

/**
 * 获取所有示例的扁平化列表
 */
export function getAllExamples() {
  const all = []
  exampleMeta.categories.forEach(category => {
    category.items.forEach(item => {
      all.push({
        ...item,
        category: category.label,
        config: examples[item.key]
      })
    })
  })
  return all
}

export default examples
