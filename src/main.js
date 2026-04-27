import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
// 导入 ECharts GL 扩展 (3D 图表支持)
import 'echarts-gl'

const app = createApp(App)
app.mount('#app')
