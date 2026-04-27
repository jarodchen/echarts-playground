/**
 * 关系图 - 人物关系网络
 */
export default {
  title: {
    text: '《红楼梦》人物关系图',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    formatter: '{b}: {c}'
  },
  legend: {
    data: ['贾家', '王家', '薛家', '史家'],
    bottom: 10
  },
  series: [
    {
      type: 'graph',
      layout: 'force',
      animation: true,
      force: {
        repulsion: 200,
        gravity: 0.1,
        edgeLength: 100,
        friction: 0.6
      },
      categories: [
        { name: '贾家' },
        { name: '王家' },
        { name: '薛家' },
        { name: '史家' }
      ],
      nodes: [
        { name: '贾宝玉', category: 0, symbolSize: 60, value: '主角' },
        { name: '林黛玉', category: 0, symbolSize: 55, value: '女主角' },
        { name: '薛宝钗', category: 2, symbolSize: 55, value: '女主角' },
        { name: '王熙凤', category: 1, symbolSize: 50, value: '管家' },
        { name: '贾母', category: 0, symbolSize: 65, value: '老祖宗' },
        { name: '贾政', category: 0, symbolSize: 45, value: '父亲' },
        { name: '王夫人', category: 1, symbolSize: 45, value: '母亲' },
        { name: '薛姨妈', category: 2, symbolSize: 40, value: '姨妈' },
        { name: '史湘云', category: 3, symbolSize: 45, value: '表妹' },
        { name: '探春', category: 0, symbolSize: 40, value: '妹妹' }
      ],
      links: [
        { source: '贾宝玉', target: '林黛玉', value: '恋人', lineStyle: { color: '#ff69b4', width: 3 } },
        { source: '贾宝玉', target: '薛宝钗', value: '夫妻', lineStyle: { color: '#ff69b4', width: 3 } },
        { source: '贾宝玉', target: '贾母', value: '祖母', lineStyle: { color: '#ff6347', width: 2 } },
        { source: '贾宝玉', target: '贾政', value: '父子', lineStyle: { color: '#ff6347', width: 2 } },
        { source: '贾宝玉', target: '王夫人', value: '母子', lineStyle: { color: '#ff6347', width: 2 } },
        { source: '林黛玉', target: '贾母', value: '外孙女', lineStyle: { color: '#ff6347', width: 2 } },
        { source: '薛宝钗', target: '薛姨妈', value: '母女', lineStyle: { color: '#ff6347', width: 2 } },
        { source: '王熙凤', target: '王夫人', value: '侄女', lineStyle: { color: '#ff6347', width: 2 } },
        { source: '史湘云', target: '贾母', value: '孙女', lineStyle: { color: '#ff6347', width: 2 } },
        { source: '探春', target: '贾政', value: '父女', lineStyle: { color: '#ff6347', width: 2 } },
        { source: '贾母', target: '贾政', value: '母子', lineStyle: { color: '#ff6347', width: 2 } }
      ],
      lineStyle: {
        opacity: 0.9,
        curveness: 0.3
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 5
        }
      },
      label: {
        show: true,
        position: 'inside',
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold'
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 2,
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)'
      }
    }
  ]
}
