import { DeleteFilled, EditOutlined } from '@ant-design/icons';
import { InputNumber, Button, Space, Popover } from 'antd'
import React, { useState, useEffect, useRef, createContext } from 'react'
import './index.css'
import CavSider from '../../component/cavSider';
import Car from '../../component/routeAndMove';
import Lane from '../../component/Lane';
import { axiosJSONPost, axiosGet } from '../../utils/request';
import axios from 'axios';
import loading from '../../assets/videos/loading.mp4'
import Line from '../../component/Line'

const sleep = (delay) => {
	var start = (new Date()).getTime();
	while ((new Date()).getTime() - start < delay) {
		continue;
	}
}
// export const Context = createContext()

export default function CavClassic() {
	const [Ncar, setNcar] = useState([1,1,1])
	const [Nlane, setNlane] = useState([1,1,1])
	const [Sdistance, setSdistance] = useState(0)
	const [Speedx, setSpeedx] = useState(0)
	const [Speedy, setSpeedy] = useState(0)
	const [angle, setAngle] = useState({ x: 0, y: 0 });
	// 收敛线的屏幕坐标
	const [line, setLine] = useState([{ x: 0, y: 155 }]);
	// 收敛线的坐标轴坐标
	const [sysLine, setSysLine] = useState([{ x: 0, y: 0 }]);
	//最左边车辆的坐标
	const Leftest = 400
	//屏幕坐标
	const [scrCoor, setScrCoor] = useState([{ x: 0, y: 0 }])
	//坐标系坐标
	const [coor, setCoor] = useState([{ x: 0, y: 0 }])
	//loading
	const [Loading, setLoading] = useState(false)
	// run
	const [run,setRun] = useState(0);

	//设置阀门，只有当move为true时小车才能动
	const [move, setMove] = useState(false)
	useEffect(() => {
		if (Ncar.length > 0 && Nlane.length > 0 && Nlane[0] === 0 && Nlane[0] === 0) {
			setMove(false)
			setCoor([{ x: 0, y: 0 }])
			setScrCoor([{ x: 0, y: 0 }])
			setLoading(true)
			axiosGet('http://qgailab.com/algorithmVisualization/api/car?tableName=cavtest&polishId=true&amount=300&pieces=15').
				then(response => { 
					// console.log(response.data.data);
					setCoor(response.data.data);
					setLoading(false); 
					setMove(true) 
				})
		}
	}, [run])

	// useEffect(() => {
	// 	let data = {
	// 		"cav_y": 65,
	// 		"cav_x_x_list": [
	// 			6,
	// 			10,
	// 			16,
	// 			22
	// 		],
	// 		"cav_x_y_list": [
	// 			60,
	// 			40,
	// 			70,
	// 			90
	// 		],
	// 		"cav_v_x_list": [
	// 			10,
	// 			8,
	// 			9,
	// 			4
	// 		],
	// 		"cav_v_y_list": [
	// 			5,
	// 			4,
	// 			3,
	// 			1
	// 		],
	// 		"cav_r_x": 5,
	// 		"cav_r_v": 6
	// 	}
	// 	let url = 'http://10.21.71.79:8000/model/1/easy-task';
	// 	if (Ncar.length > 0 && Nlane.length > 0 && Nlane[0] === 0 && Nlane[0] === 0) {
	// 		setMove(false)
	// 		setCoor([{ x: 0, y: 0 }])
	// 		setScrCoor([{ x: 0, y: 0 }])
	// 		// setLoading(true)
	// 		axiosJSONPost(url,data).
	// 			then(response => { 
	// 				console.log(response.data.data.location);
	// 				// setCoor(response.data.data.location); 
	// 				// setLoading(false); 
	// 				// setMove(true) 
	// 			})
	// 	}
	// }, [run])

	useEffect(() => {
		setAngle({ x: Speedx, y: Speedy })
	}, [Speedx, Speedy])

	useEffect(()=>{
		// console.log('sysLine',sysLine[0].x,sysLine[0].y);
	},[sysLine]);


	return (
		<div className="cavClassic">
			{/* <Context.Provider value={{ Ncar, Nlane }}> */}
				{Loading ? <div className='video'> <video src={loading} autoPlay muted={true} loop={true}></video> </div> : ''}
				<CavSider setRun={setRun} run={run} setMove={setMove} setNcar={setNcar} setNlane={setNlane} setSdistance={setSdistance} setSpeedx={setSpeedx} setSpeedy={setSpeedy} />
				<div className="cavClassic-right">
					<div className="cavClassic-right-head">
							<Button><Space>Del <DeleteFilled /></Space></Button>
					</div>
					<div className='cavClassic-right-main'>
						{Ncar.map((value, index) => (<Car module='cavClassic' index={index} move={move} setMove={setMove} scrCoor={scrCoor.length > 10 ?
							scrCoor.map((v, i) => ({ y: v.list[index].y, x: v.list[index].x === Math.min(...v.list.map((vv, ii) => (vv.x))) ? Leftest : Leftest + (v.list[index].x - Math.min(...v.list.map((vv, ii) => (vv.x)))) }))
							: ''} angle={angle} key={index} />))}
						<Lane move={move} setScrCoor={setScrCoor} coor={coor} Nlane={Nlane} setSysLine={setSysLine} line={line}/>
						<Line setLine={setLine}/>
					</div>
				</div>
			{/* </Context.Provider> */}
		</div>
	)
}
