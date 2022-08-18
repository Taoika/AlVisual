import React,{useState,useEffect} from 'react'
import EChartsReact from 'echarts-for-react'
import "echarts-gl"
import { axiosGet } from './request'

// 封装3D散点图 参数为url（路径） data（请求体)
export default function MyScatter3D(props) {
    
    // 此状态保存数据
    const [allData,setAllData]=useState(null);
    const [data,setData]=useState([]);
    const [count,setCount]=useState(1);
    const [len,setLen]=useState(39);
    // 记录请求路径
    const [url,setUrl]=useState({pointUrl:''});

    useEffect(()=>{
        setUrl(props);
    },[props])

    // 发送请求获取数据
    useEffect(()=>{
      if(url.pointUrl){
        console.log('3d url.pointUrl ->',url.pointUrl);
        axiosGet(url.pointUrl)
        .then(
          response=>{
            // console.log(response.data.data);
            setAllData(response.data.data);
            setLen(response.data.data.length-1);
            setCount(response.data.data.length-1);
          },
          error=>{
            console.log(error);
          }
        )
      }
    },[]);

    // 散点图配置
    const getOption=()=>{
        const option = {
            grid3D: {},
            xAxis3D: {
              min:-5,
              max:5,
            },
            yAxis3D: {
              min:-5,
              max:5,
            },
            zAxis3D: {
              min:0,
              max:len+1,
            },
            roam:true,
            dataset: {
              dimensions: [
                'timeOrder',
                'x',
                'y',
              ],
              source: data
            },
            series: [
              {
                type: 'scatter3D',
                symbolSize: 2,
                encode: {
                  x: 'x',
                  y: 'y',
                  z: 'timeOrder',
                  tooltip: [0, 1, 2, 3, 4]
                },
                itemStyle: {
                  color:'red',
                }
              }
            ]
          };
        return option;
    }

    // 定时更新数据
    useEffect(() => {
      let timerId = null;
      const run = () => {
        // console.log("count -> ", count);
        if (count <= 0) {
          return () => {
            timerId && clearTimeout(timerId);
          };
        }
        setCount(count - 1);
        timerId = setTimeout(run, 10);
        // 这下面为相关的业务代码
        if(allData){
          // len===count是重新开始渲染 所以直接用新增数据覆盖原有数据
          if(len===count){
            setData(allData[len - count].list);
          }else{
            setData(v=>[...v,...allData[len - count].list]);
          }
        }
      };                                                                         
      timerId = setTimeout(run, 10);
      return () => {
        timerId && clearTimeout(timerId);
      };
    }, [count]);

  return (
    <div>
      {/* <EChartsReact option={getOption()} style={{width:'100%',height:'100%'}} notMerge={false}></EChartsReact> */}
      <EChartsReact option={getOption()} style={{width:'400px',height:'400px'}} notMerge={true}></EChartsReact>
    </div>
  )
}
