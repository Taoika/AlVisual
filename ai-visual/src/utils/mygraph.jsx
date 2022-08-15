import React,{ useEffect,useState } from 'react'
import { Card } from 'antd'
import EChartsReact from 'echarts-for-react'
import { axiosJSONPost } from './request'

// 封装关系图 传参为url（请求路径） data（请求参数）
export default function MyGraph(props) {

    const [count,setCount]=useState(1);
    const [data,setData]=useState([]);
    const [allData,setAllData]=useState({
      data:null,
      links:[],
    });
  
      // 请求数据
      useEffect(()=>{
          axiosJSONPost(props.url,props.data)
          .then(
              response=>{
                setAllData(response.data.data);
                setCount(response.data.data.data.length-1);
              },
              error=>{
                  console.log(error);
              }
          )
      },[])
  
      // 定时更新数据
      useEffect(() => {
        let timerId = null;
        const run = () => {
          console.log("count -> ", count);
          if (count <= 0) {
            return () => {
              timerId && clearTimeout(timerId);
            };
          }
          setCount(count - 1);
          timerId = setTimeout(run, 1000);
          // 这下面为相关的业务代码
          setData(allData.data[count-1]);
        };                                                                         
        timerId = setTimeout(run, 1000);
        return () => {
          timerId && clearTimeout(timerId);
        };
      }, [count]);
  
      // 数据配置
      const getOption=()=>{
          // console.log(links);
          const option = {
              title: {
                text: '复杂关系图',
              },
              // 数据更新动画的时长 只要有返回值就好 因此可以是一个函数
              animationDurationUpdate: 1500,
              // 数据更新动画的缓动效果 quinticInOut???
              animationEasingUpdate: 'quinticInOut',
              tooltip: {},
              // dataset: {
              //   dimensions: [
              //     'name',
              //     'x',
              //     'y',
              //   ],
              //   source: data
              // },
              series: [
                {
                  name: '复杂关系图',
                  // 类型 graph关系图
                  type: 'graph',
                  // 布局 none无 circular环形布局 force力引导布局
                  layout: 'none',
                  symbolSize: 50,
                  // 开启缩放和平移
                  roam: true,
                  // 是否显示标签
                  label: {
                    show: true
                  },
                  // 边两端标记类型 此处设置为一端圆点一端箭头
                  edgeSymbol: ['circle', 'arrow'],
                  // 边两端标记大小
                  edgeSymbolSize: [4, 10],
                  // 图形上的文本标签
                  edgeLabel: {
                      // 字体大小
                    fontSize: 20,
                  },
                  // 动态载入节点 关系 类目名称
                  data: data,
                  links: allData.links,
                  // categories: categories,
                  // 点关系样式
                  lineStyle: {
                    opacity: 0.9,
                    width: 2,
                    // 边的曲度 0~1
                    curveness: 0,
                  },
                }
              ]       
            };
          return option;
      }
  
    return (
        // notMerge 参数 更新数据时不合并 必须设置此参数才可以实时更新数据
        <EChartsReact option={getOption()} style={{height:'400px'}} notMerge={true}/>
    )
}
