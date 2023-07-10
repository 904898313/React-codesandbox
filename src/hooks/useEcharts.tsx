import * as echarts from 'echarts';

interface Ioptions {
  [propname: string]: any
}

const useEcharts = (dom:HTMLDivElement, options:Ioptions) => {
  const echartsInstance = echarts.init(dom);
  echartsInstance.setOption(options);
  return echartsInstance
}

export default useEcharts