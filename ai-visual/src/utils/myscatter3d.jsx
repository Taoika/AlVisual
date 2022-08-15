import React,{useState,useEffect} from 'react'
import EChartsReact from 'echarts-for-react'
import "echarts-gl"
import { axiosJSONPost } from './request'

// 封装3D散点图 参数为url（路径） data（请求体)
export default function MyScatter3D(props) {
    
    // 此状态保存数据
    const [allData,setAllData]=useState([]);
    const [data,setData]=useState([]);
    const [count,setCount]=useState(1);

    // 发送请求获取数据
    useEffect(()=>{
      axiosJSONPost(props.url,props.data)
      .then(
        response=>{
          setAllData(response.data.data);
          setCount(response.data.data.length);
        },
        error=>{
          console.log(error);
        }
      )
    },[]);

    // 散点图配置
    const getOption=()=>{
        const option = {
            grid3D: {},
            xAxis3D: {
              min:0,
              max:50,
            },
            yAxis3D: {
              min:0,
              max:50,
            },
            zAxis3D: {
              min:0,
              max:6,
            },
            roam:true,
            dataset: {
              dimensions: [
                'Time',
                'x',
                'y',
              ],
              source: data
            },
            series: [
              {
                type: 'scatter3D',
                symbolSize: 5,
                encode: {
                  x: 'x',
                  y: 'y',
                  z: 'Time',
                  tooltip: [0, 1, 2, 3, 4]
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
        timerId = setTimeout(run, 1000);
        // 这下面为相关的业务代码
        setData(v=>[...v,...allData[count-1]]);
      };                                                                         
      timerId = setTimeout(run, 1000);
      return () => {
        timerId && clearTimeout(timerId);
      };
    }, [count]);

  return (
    <EChartsReact option={getOption()} style={{width:'400px'}} notMerge={false}></EChartsReact>
  )
}
