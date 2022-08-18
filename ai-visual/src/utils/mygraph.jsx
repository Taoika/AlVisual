import React,{ useEffect,useState } from 'react'
import EChartsReact from 'echarts-for-react'
import { axiosGet } from './request'

// 封装关系图 传参为url（请求路径） data（请求参数）
export default function MyGraph(props) {

    // 用于倒数
    const [count,setCount]=useState(-1);
    // 记录时间段的段数
    const [len,setLen]=useState(1);
    // 记录每一个时间段的关系
    const [link,setLink]=useState([]);
    // 记录每一个时间段的点数据
    const [data,setData]=useState([]);
    // 记录全部关系
    const [allLink,setAllLink]=useState([]);
    // 记录全部点
    const [allData,setAllData]=useState([]);
    // 固定点
    const fixedPoint=[
      {
        id:'a',
        x: 4,
        y: 4,
        lineStyle: {
          opacity: 0,
        },
        // itemStyle: {
        //   color:'white',
        // }
      },
      {
        id:'b',
        x: 4,
        y: -4,
        lineStyle: {
          opacity: 0,
        },
        // itemStyle: {
        //   color:'white',
        // }
      },
      {
        id:'c',
        x: -4,
        y: 4,
        lineStyle: {
          opacity: 0,
        },
        // itemStyle: {
        //   color:'white',
        // }
      },
      {
        id:'d',
        x: -4,
        y: -4,
        lineStyle: {
          opacity: 0,
        },
        // itemStyle: {
        //   color:'white',
        // }
      },
    ];
    // 记录请求路径
    const [url,setUrl]=useState({pointUrl:'',linkUrl:''});

    useEffect(()=>{
      setUrl(props);
    },[props.pointUrl])
  
    // 请求数据
    useEffect(()=>{
      if(url.pointUrl){
        console.log('2d url.pointUrl ->',url.pointUrl);
      // 请求点数据
      axiosGet(url.pointUrl)
      .then(
          response=>{
            // // 设置数据
            setAllData(response.data.data);
            setLen(response.data.data.length-1);
            setCount(response.data.data.length-1);
            // 请求点关系数据
            axiosGet(url.linkUrl)
            .then(
              response=>{
                let pointArr=[];
                let timeArr=response.data.data.map((x)=>{
                  // 每次进来都要初始化pointArr数组
                  pointArr=[];
                  for(const v of x.list){
                    for(const k of v.end){
                      pointArr.push({
                        source:v.id,
                        target:k,
                      })
                    }
                  }
                  return pointArr;
                })
                setAllLink(timeArr);
              },
              error=>{
                console.log(error);
              }
            )
          },
          error=>{
              console.log(error);
          }
      )
      }
    },[url])

      // 定时更新数据
      useEffect(() => {
        let timerId = null;
        const run = () => {
          // console.log("count -> ", count);
          if (count < 0) {
            return () => {
              timerId && clearTimeout(timerId);
            };
          }
          setCount(count - 1);
          timerId = setTimeout(run, 10);
          // 这下面为相关的业务代码
          if(len>-1){
            // setData(v=>[...v,...allData[len - count].list]);
            setLink(allLink[len - count]);
            setData([...fixedPoint,...allData[len - count].list])
            // setLink(v=>[...v,...allLink[len - count]]);
          }
        };                                                                         
        timerId = setTimeout(run, 10);
        return () => {
          timerId && clearTimeout(timerId);
        };
      }, [allLink,link]);
  
      // 数据配置
      const getOption=()=>{
          // console.log(links);
          const option = {
              tooltip: {},
              series: [
                {
                  name: '2D Live',
                  type: 'graph',
                  layout: 'none',
                  symbolSize: 2,
                  roam: true,
                  edgeSymbol: ['circle', 'circle'],
                  edgeSymbolSize: [1, 1],
                  links: link,
                  data: data,
                  lineStyle: {
                    opacity: 1,
                    width: 1,
                    curveness: 0,
                    color:'#aaa',
                  },
                  itemStyle: {
                    color:'red',
                  }
                }
              ]       
            };
          return option;
      }
  
    return (
      <div>
          {/* notMerge 参数 更新数据时不合并 必须设置此参数才可以实时更新数据 盒子大小随时间段变化而变化=>解决echarts自适应带来的问题 */}
          {/* <EChartsReact option={getOption()} style={{height:`calc(100% - ${(len - count)} * 1%)`,width:`calc(100% - ${len - count} * 1%)`}} notMerge={false}/> */}
          <EChartsReact option={getOption()} style={{height:`400px`,width:`400px`}} notMerge={true}/>
          {/* <EChartsReact option={getOption()} style={{height:'400px'}} notMerge={false}/> */}
      </div>
    )
}
