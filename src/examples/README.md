# ECharts 示例配置

本目录包含所有ECharts在线演示平台的示例配置,每个文件对应一个图表类型。

## 📁 文件组织

### 基础图表 (basic-*)
- `basic-line.js` - 折线图(平滑曲线+面积填充)
- `basic-bar.js` - 柱状图(多系列对比)
- `basic-pie.js` - 饼图(环形设计)
- `basic-scatter.js` - 散点图(大数据点)
- `basic-radar.js` - 雷达图(双维度对比)

### 高级图表 (advanced-*)
- `advanced-candlestick.js` - K线图(股票行情)
- `advanced-heatmap.js` - 热力图(7×3网格)
- `advanced-gauge.js` - 仪表盘(进度指示器)
- `advanced-treemap.js` - 树图(嵌套矩形)

### 组合图表 (combo-*)
- `combo-mixed.js` - 柱线混合(双轴图表)
- `combo-stack.js` - 堆叠柱状图(3个系列)

### 数据可视化 (data-*)
- `data-funnel.js` - 漏斗图(5层转化)
- `data-sankey.js` - 桑基图(流量流向)
- `data-parallel.js` - 平行坐标(4维分析)

### 特殊图表 (special-*)
- `special-graph.js` - 关系图(力导向布局)
- `special-boxplot.js` - 箱线图(四分位数)
- `special-themeRiver.js` - 主题河流(时间序列)

## 🔧 使用方式

### 1. 导入单个示例
```javascript
import lineExample from './basic-line.js'
```

### 2. 从索引导入所有示例
```javascript
import { examples } from './index.js'

const config = examples.line
```

### 3. 获取示例元数据
```javascript
import { exampleMeta, getAllExamples } from './index.js'

// 获取分类信息
console.log(exampleMeta.categories)

// 获取所有示例的扁平列表
const allExamples = getAllExamples()
```

## 📝 添加新示例

1. **创建新文件**: 按照命名规范创建文件(如 `basic-newchart.js`)
2. **导出配置**: 
   ```javascript
   export default {
     title: { text: '新图表', left: 'center' },
     // ... 其他配置
   }
   ```
3. **更新索引**: 在 `index.js` 中导入并添加到 `examples` 对象
4. **添加元数据**: 在 `exampleMeta` 中添加对应的菜单项

## 🎨 配置规范

每个示例文件应该:
- ✅ 导出完整的ECharts option配置
- ✅ 包含标题(title)配置
- ✅ 使用合理的颜色搭配
- ✅ 添加必要的tooltip提示框
- ✅ 保持代码简洁清晰
- ❌ 不要包含与图表无关的配置
- ❌ 避免过于复杂的数据结构

## 💡 最佳实践

1. **数据量适中**: 示例数据保持在合理范围(通常<100个点)
2. **视觉美观**: 使用协调的配色方案
3. **交互友好**: 添加tooltip、legend等交互组件
4. **注释清晰**: 复杂配置添加必要注释
5. **性能考虑**: 大数据量示例标注性能提示

## 🔗 相关资源

- [ECharts官方文档](https://echarts.apache.org/zh/index.html)
- [ECharts示例Gallery](https://echarts.apache.org/examples/zh/index.html)
- [项目主文件](../App.vue)
