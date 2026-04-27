<template>
  <div class="app-container">
    <!-- 顶部工具栏 -->
    <header class="toolbar">
      <div class="toolbar-left">
        <h1 class="title">📊 ECharts 在线演示平台</h1>
      </div>
      
      <div class="toolbar-center">
        <!-- 布局切换按钮 -->
        <button 
          class="layout-btn" 
          @click="toggleLayout"
          :title="isHorizontal ? '切换到左右布局' : '切换到上下布局'"
        >
          <span v-if="isHorizontal">↕️ 上下布局</span>
          <span v-else>↔️ 左右布局</span>
        </button>
      </div>
      
      <div class="toolbar-right">
        <!-- 渲染器选择 -->
        <select class="renderer-select" v-model="renderer" @change="rerenderChart">
          <option value="canvas">🎨 Canvas 渲染</option>
          <option value="svg">✨ SVG 渲染</option>
        </select>
        
        <!-- 示例加载 -->
        <select class="example-select" @change="loadExample($event)">
          <option value="">📋 加载示例...</option>
          <optgroup v-for="category in exampleMeta.categories" :key="category.label" :label="category.label">
            <option v-for="item in category.items" :key="item.key" :value="item.key">
              {{ item.label }}
            </option>
          </optgroup>
        </select>
        
        <!-- 渲染按钮 -->
        <button class="render-btn" @click="renderChart" :disabled="hasError">
          ▶️ 渲染
        </button>
        
        <!-- 重置按钮 -->
        <button class="reset-btn" @click="resetConfig">
          🔄 重置
        </button>
      </div>
    </header>

    <!-- 主内容区 -->
    <main :class="['main-content', { horizontal: isHorizontal }]">
      <!-- 左侧/上侧: 配置编辑器 -->
      <section class="editor-panel" :style="editorPanelStyle">
        <div class="panel-header">
          <h2>⚙️ JSON 配置</h2>
          <span class="hint">实时编辑 · 即时预览</span>
        </div>
        <div class="editor-wrapper">
          <textarea
            ref="editorRef"
            v-model="configText"
            class="code-editor"
            placeholder="在此输入 ECharts 配置..."
            spellcheck="false"
          ></textarea>
        </div>
      </section>

      <!-- 拖动分割线 -->
      <div 
        class="resizer" 
        :class="{ horizontal: isHorizontal }"
        @mousedown="startResize"
        title="拖动调整面板比例"
      >
        <div class="resizer-handle"></div>
        <div class="resize-tooltip" v-if="isResizing">
          {{ splitRatio.toFixed(1) }}%
        </div>
      </div>

      <!-- 右侧/下侧: 图表预览 -->
      <section class="preview-panel" :style="previewPanelStyle">
        <div class="panel-header">
          <h2>📈 图表预览</h2>
          <div class="status-group">
            <!-- 缩放控制按钮 -->
            <div class="zoom-controls">
              <button 
                class="zoom-btn" 
                @click="zoomOut"
                :disabled="currentZoom <= 0.5"
                title="缩小 (-)"
              >
                ➖
              </button>
              <span class="zoom-level">{{ Math.round(currentZoom * 100) }}%</span>
              <button 
                class="zoom-btn" 
                @click="zoomIn"
                :disabled="currentZoom >= 3"
                title="放大 (+)"
              >
                ➕
              </button>
              <button 
                class="zoom-btn zoom-reset" 
                @click="resetZoom"
                title="重置 (100%)"
              >
                🔄
              </button>
            </div>
            
            <span class="renderer-badge" :class="renderer">
              {{ renderer === 'canvas' ? '🎨 Canvas' : '✨ SVG' }}
            </span>
            <span class="status" :class="{ error: hasError }">
              {{ hasError ? '❌ 错误' : '✅ 就绪' }}
            </span>
          </div>
        </div>
        <div class="chart-wrapper">
          <div class="chart-container" ref="chartRef"></div>
        </div>
        <transition name="error">
          <div v-if="errorMessage" class="error-message">
            <span class="error-icon">⚠️</span>
            {{ errorMessage }}
          </div>
        </transition>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import * as echarts from 'echarts'
import 'echarts-wordcloud' // 引入词云图扩展
import 'echarts-liquidfill' // 引入水球图扩展
import { examples, exampleMeta } from './examples/index.js'

// 状态
const isHorizontal = ref(true) // false=上下布局, true=左右布局
const configText = ref('')
const errorMessage = ref('')
const hasError = ref(false)
const splitRatio = ref(30) // 分割比例 (0-100)
const isResizing = ref(false)
const renderer = ref('canvas') // 渲染器类型: 'canvas' | 'svg'
const currentZoom = ref(1) // 当前缩放级别 (0.5 - 3.0)

// refs
const editorRef = ref(null)
const chartRef = ref(null)

// ECharts 实例
let chartInstance = null

// 默认配置
const defaultConfig = {
  title: {
    text: 'ECharts 入门示例',
    left: 'center'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
}

// 初始化
onMounted(() => {
  // 设置默认配置
  configText.value = JSON.stringify(defaultConfig, null, 2)
  
  // 初始化图表
  initChart()
  
  // 监听容器尺寸变化
  if (chartRef.value) {
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(() => {
        chartInstance?.resize()
      }, 100)
    })
    resizeObserver.observe(chartRef.value)
  }
  
  // 自动渲染一次
  renderChart()
})

// 重新渲染图表(切换渲染器时)
function rerenderChart() {
  if (!chartInstance) return
  
  console.log(`🔄 切换到 ${renderer.value} 渲染器`)
  
  // 获取当前配置
  const currentOption = JSON.parse(configText.value)
  
  // 销毁旧实例
  chartInstance.dispose()
  
  // 用新的渲染器重新初始化
  setTimeout(() => {
    initChart()
    renderChart()
  }, 50)
}

// 初始化图表
function initChart() {
  if (chartRef.value) {
    // 根据选择的渲染器初始化
    chartInstance = echarts.init(chartRef.value, null, {
      renderer: renderer.value
    })
    
    console.log(`✅ 图表初始化完成 (${renderer.value})`)
    
    // 响应式调整
    window.addEventListener('resize', () => {
      chartInstance?.resize()
    })
  }
}

// 渲染图表
function renderChart() {
  try {
    errorMessage.value = ''
    hasError.value = false
    
    // 解析配置
    const option = JSON.parse(configText.value)
    
    // 自动添加 dataZoom 配置(如果适用)
    enhanceWithZoom(option)
    
    // 渲染图表
    if (chartInstance) {
      // 先重置尺寸,确保容器正确
      setTimeout(() => {
        chartInstance.resize()
        chartInstance.setOption(option, true)
        // 应用缩放
        applyZoom()
        // 再次resize确保适配
        setTimeout(() => {
          chartInstance.resize()
        }, 100)
      }, 50)
      
      console.log('✅ 图表渲染成功', {
        containerSize: {
          width: chartRef.value?.offsetWidth,
          height: chartRef.value?.offsetHeight
        },
        layout: isHorizontal.value ? 'horizontal' : 'vertical',
        zoomEnabled: !!option.dataZoom,
        currentZoom: currentZoom.value
      })
    }
  } catch (error) {
    hasError.value = true
    errorMessage.value = `配置错误: ${error.message}`
    console.error('❌ 渲染失败:', error)
  }
}

// 自动为适用的图表添加缩放功能
function enhanceWithZoom(option) {
  // 检查是否需要添加 dataZoom
  const needsZoom = option.xAxis && (
    Array.isArray(option.series) && 
    option.series.some(s => ['line', 'bar', 'scatter', 'candlestick'].includes(s.type))
  )
  
  if (needsZoom && !option.dataZoom) {
    // 添加 dataZoom 配置
    option.dataZoom = [
      {
        type: 'inside',     // 内置型(鼠标滚轮)
        xAxisIndex: 0,
        start: 0,           // 默认显示范围起始百分比
        end: 100,           // 默认显示范围结束百分比
        zoomOnMouseWheel: true,  // 启用滚轮缩放
        moveOnMouseMove: true,   // 启用鼠标拖拽移动
        moveOnMouseWheel: false  // 滚轮不移动,只缩放
      },
      {
        type: 'slider',     // 滑动条型
        xAxisIndex: 0,
        start: 0,
        end: 100,
        bottom: 10,         // 位置
        height: 20,         // 高度
        handleSize: '80%',  // 手柄大小
        showDetail: false,  // 不显示详细数值
        fillerColor: 'rgba(102, 126, 234, 0.2)',  // 填充颜色
        borderColor: 'transparent',
        handleStyle: {
          color: '#667eea',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)'
        }
      }
    ]
    
    console.log('✨ 已自动添加缩放功能')
  }
}

// 重置配置
function resetConfig() {
  configText.value = JSON.stringify(defaultConfig, null, 2)
  renderChart()
}

// 加载示例
function loadExample(event) {
  const exampleName = event.target.value
  if (!exampleName) return
  
  const example = examples[exampleName]
  if (example) {
    configText.value = JSON.stringify(example, null, 2)
    renderChart()
    event.target.value = '' // 重置选择
  }
}

// 计算面板样式
const editorPanelStyle = computed(() => {
  if (isHorizontal.value) {
    return { width: `${splitRatio.value}%` }
  } else {
    return { height: `${splitRatio.value}%` }
  }
})

const previewPanelStyle = computed(() => {
  if (isHorizontal.value) {
    return { width: `${100 - splitRatio.value}%` }
  } else {
    return { height: `${100 - splitRatio.value}%` }
  }
})

// 开始拖动
function startResize(e) {
  e.preventDefault()
  isResizing.value = true
  
  console.log('🖱️ 开始拖动', {
    layout: isHorizontal.value ? 'horizontal' : 'vertical',
    startPos: isHorizontal.value ? e.clientX : e.clientY,
    startRatio: splitRatio.value
  })
  
  const mainContent = document.querySelector('.main-content')
  const rect = mainContent.getBoundingClientRect()
  const startPos = isHorizontal.value ? e.clientX : e.clientY
  const startSize = isHorizontal.value ? rect.width : rect.height
  const startOffset = isHorizontal.value ? rect.left : rect.top
  const startRatio = splitRatio.value
  
  function handleMouseMove(e) {
    if (!isResizing.value) return
    
    const currentPos = isHorizontal.value ? e.clientX : e.clientY
    // 计算相对于容器起始位置的偏移量
    const currentOffset = currentPos - startOffset
    // 直接计算新的百分比
    let newRatio = (currentOffset / startSize) * 100
    
    console.log('👆 拖动中...', {
      currentPos,
      startOffset,
      currentOffset,
      startSize,
      calculatedRatio: newRatio,
      clampedRatio: Math.max(20, Math.min(80, newRatio))
    })
    
    // 限制范围 20% - 80%
    newRatio = Math.max(20, Math.min(80, newRatio))
    
    splitRatio.value = newRatio
  }
  
  function handleMouseUp() {
    console.log('✅ 拖动结束, 最终比例:', splitRatio.value)
    isResizing.value = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    document.body.style.cursor = ''
    document.body.style.userSelect = ''
    
    // 调整完成后重新渲染图表
    setTimeout(() => {
      if (chartInstance) {
        chartInstance.resize()
        setTimeout(() => chartInstance.resize(), 100)
      }
    }, 50)
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  document.body.style.cursor = isHorizontal.value ? 'col-resize' : 'row-resize'
  document.body.style.userSelect = 'none'
}

// 切换布局
function toggleLayout() {
  isHorizontal.value = !isHorizontal.value
  
  // 重置分割比例为50%
  splitRatio.value = 30
  
  // 布局切换后重新调整图表(多次resize确保正确)
  setTimeout(() => {
    if (chartInstance) {
      chartInstance.resize()
      setTimeout(() => {
        chartInstance.resize()
      }, 150)
    }
  }, 350)  // 等待CSS过渡完成
}

// 监听配置变化(可选: 实时渲染)
// watch(configText, () => {
//   renderChart()
// })

// 监听布局变化,确保图表正确显示
watch(isHorizontal, () => {
  setTimeout(() => {
    if (chartInstance) {
      chartInstance.resize()
      // 多次resize确保完全适配
      setTimeout(() => chartInstance.resize(), 200)
      setTimeout(() => chartInstance.resize(), 400)
    }
  }, 100)
})

// 缩放功能
function zoomIn() {
  if (currentZoom.value < 3) {
    currentZoom.value = Math.min(3, currentZoom.value + 0.25)
    applyZoom()
  }
}

function zoomOut() {
  if (currentZoom.value > 0.5) {
    currentZoom.value = Math.max(0.5, currentZoom.value - 0.25)
    applyZoom()
  }
}

function resetZoom() {
  currentZoom.value = 1
  applyZoom()
}

function applyZoom() {
  if (!chartInstance || !chartRef.value) return
  
  // 使用 CSS transform 进行缩放
  const container = chartRef.value
  container.style.transform = `scale(${currentZoom.value})`
  container.style.transformOrigin = 'center center'
  
  // 调整容器大小以容纳缩放后的内容
  const baseWidth = container.parentElement.offsetWidth
  const baseHeight = container.parentElement.offsetHeight
  
  if (currentZoom.value > 1) {
    container.style.width = `${baseWidth * currentZoom.value}px`
    container.style.height = `${baseHeight * currentZoom.value}px`
  } else {
    container.style.width = '100%'
    container.style.height = '100%'
  }
  
  // 触发 ECharts 重新计算
  setTimeout(() => {
    chartInstance.resize()
  }, 50)
  
  console.log(`🔍 缩放级别: ${Math.round(currentZoom.value * 100)}%`)
}
</script>

<style lang="scss">
// 全局样式 - 去除页面滚动条
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow: hidden;
  height: 100vh;
}

.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

// 顶部工具栏
.toolbar {
  height: 64px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  z-index: 10;
  flex-shrink: 0;
  
  .title {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  
  .layout-btn,
  .render-btn,
  .reset-btn {
    padding: 9px 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    margin: 0 6px;
    backdrop-filter: blur(10px);
    
    &:active {
      transform: translateY(0);
    }
  }
  
  .layout-btn {
    background: rgba(255, 255, 255, 0.18);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(255, 255, 255, 0.28);
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  .render-btn {
    background: linear-gradient(135deg, #52c41a 0%, #73d13d 100%);
    color: white;
    box-shadow: 0 2px 8px rgba(82, 196, 26, 0.25);
    
    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(82, 196, 26, 0.35);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  .reset-btn {
    background: linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%);
    color: white;
    box-shadow: 0 2px 8px rgba(255, 77, 79, 0.25);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(255, 77, 79, 0.35);
    }
  }
  
  .example-select,
  .renderer-select {
    padding: 9px 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.95);
    font-size: 14px;
    cursor: pointer;
    margin-right: 8px;
    transition: all 0.25s;
    outline: none;
    
    &:hover {
      background: white;
      border-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    &:focus {
      border-color: white;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
    }
  }
}

// 主内容区
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0; // 关键: 允许flex子项正确收缩
  width: 100%;   // 确保占满宽度
  position: relative;
  
  &.horizontal {
    flex-direction: row;
  }
}

// 拖动分割线
.resizer {
  position: relative;
  z-index: 20;
  background: #d0d0d0;
  transition: background 0.2s;
  flex-shrink: 0;
  
  &:hover {
    background: #667eea;
  }
  
  &.horizontal {
    width: 8px;  // 增加宽度,更容易点击
    cursor: col-resize;
    margin: 0 -3px;  // 负边距扩大点击区域
    
    .resizer-handle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 4px;
      height: 40px;
      border-radius: 2px;
      background: rgba(102, 126, 234, 0.4);
      transition: all 0.2s;
    }
    
    .resizer-ratio {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(102, 126, 234, 0.9);
      color: white;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 10px;
      white-space: nowrap;
    }
    
    &:hover .resizer-handle {
      background: rgba(102, 126, 234, 0.8);
      width: 6px;
      height: 60px;
    }
  }
  
  &:not(.horizontal) {
    height: 8px;  // 增加高度,更容易点击
    cursor: row-resize;
    margin: -3px 0;  // 负边距扩大点击区域
    
    .resizer-handle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 4px;
      border-radius: 2px;
      background: rgba(102, 126, 234, 0.4);
      transition: all 0.2s;
    }
    
    .resizer-ratio {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(102, 126, 234, 0.9);
      color: white;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 10px;
      white-space: nowrap;
    }
    
    &:hover .resizer-handle {
      background: rgba(102, 126, 234, 0.8);
      width: 60px;
      height: 6px;
    }
  }
  
  &:active {
    background: #667eea;
  }
}

// 面板通用样式
.editor-panel,
.preview-panel {
  // 不要设置 flex: 1,让内联样式控制尺寸
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  min-width: 0; // 关键: 防止flex子项溢出
  min-height: 0;
  
  // 拖动时显示边框提示
  .panel-header {
    height: 48px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    background: linear-gradient(to bottom, #fafafa, #ffffff);
    flex-shrink: 0;
    
    h2 {
      font-size: 15px;
      font-weight: 600;
      color: #262626;
      letter-spacing: 0.3px;
    }
    
    .hint {
      font-size: 12px;
      color: #8c8c8c;
      margin-left: 12px;
    }
    
    .status-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    // 缩放控制按钮
    .zoom-controls {
      display: flex;
      align-items: center;
      gap: 4px;
      background: rgba(255, 255, 255, 0.1);
      padding: 4px 8px;
      border-radius: 8px;
      backdrop-filter: blur(10px);
    }
    
    .zoom-btn {
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.9);
      color: #333;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover:not(:disabled) {
        background: white;
        transform: translateY(-1px);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      }
      
      &:active:not(:disabled) {
        transform: translateY(0);
      }
      
      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      
      &.zoom-reset {
        font-size: 16px;
      }
    }
    
    .zoom-level {
      min-width: 45px;
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      color: white;
      padding: 2px 6px;
      background: rgba(102, 126, 234, 0.3);
      border-radius: 4px;
    }
    
    .renderer-badge {
      font-size: 11px;
      padding: 3px 10px;
      border-radius: 12px;
      font-weight: 500;
      transition: all 0.3s;
      
      &.canvas {
        background: rgba(102, 126, 234, 0.1);
        color: #667eea;
      }
      
      &.svg {
        background: rgba(115, 209, 61, 0.1);
        color: #73d13d;
      }
    }
    
    .status {
      font-size: 12px;
      color: #52c41a;
      padding: 3px 10px;
      background: rgba(82, 196, 26, 0.08);
      border-radius: 12px;
      transition: all 0.3s;
      
      &.error {
        color: #ff4d4f;
        background: rgba(255, 77, 79, 0.08);
      }
    }
  }
}

// 编辑器面板
.editor-panel {
  border-right: 1px solid #f0f0f0;
}

.editor-wrapper {
  flex: 1;
  overflow: auto;
  background: #fafafa;
  width: 100%;  // 确保宽度正确
}

.code-editor {
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.7;
  color: #262626;
  background: transparent;
  resize: none;
  outline: none;
  tab-size: 2;
  
  &::placeholder {
    color: #bfbfbf;
  }
  
  &:focus {
    background: #fff;
  }
}

// 预览面板
.preview-panel {
  .chart-wrapper {
    flex: 1;
    padding: 24px;
    overflow: auto;  // 允许滚动以查看放大后的内容
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    position: relative;
    width: 100%;   // 确保宽度
    height: 100%;  // 确保高度
  }
  
  .chart-container {
    width: 100%;
    height: 100%;
    min-height: 300px;
    max-width: 100%;
    max-height: 100%;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    padding: 20px;
    position: relative;
    display: block;  // 确保正常显示
    transition: transform 0.3s ease;  // 平滑的缩放过渡
  }
  
  .error-message {
    padding: 12px 20px;
    background: linear-gradient(to right, #fff2f0, #fff7f7);
    border-top: 1px solid #ffccc7;
    color: #ff4d4f;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;
    animation: slideDown 0.3s ease-out;
    
    .error-icon {
      flex-shrink: 0;
    }
  }
}

// 错误提示动画
.error-enter-active,
.error-leave-active {
  transition: all 0.3s ease;
}

.error-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.error-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 全局滚动条优化 - 超细隐藏式
:deep(*) {
  scrollbar-width: thin !important;
  scrollbar-color: rgba(0, 0, 0, 0.04) transparent !important;
  
  &::-webkit-scrollbar {
    width: 3px !important;
    height: 3px !important;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent !important;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.04) !important;
    border-radius: 2px !important;
    
    &:hover {
      background: rgba(0, 0, 0, 0.08) !important;
    }
  }
  
  &::-webkit-scrollbar-corner {
    background: transparent !important;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .main-content.horizontal {
    flex-direction: column;
  }
  
  .toolbar {
    padding: 0 16px;
    height: 56px;
    
    .title {
      font-size: 18px;
    }
    
    .layout-btn,
    .render-btn,
    .reset-btn {
      padding: 7px 14px;
      font-size: 13px;
      margin: 0 3px;
    }
    
    .example-select {
      padding: 7px 12px;
      font-size: 13px;
    }
  }
  
  .preview-panel .chart-wrapper {
    padding: 16px;
  }
}
</style>
