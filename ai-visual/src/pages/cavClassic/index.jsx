import { DeleteFilled } from '@ant-design/icons';
import { InputNumber, Button, Space } from 'antd'
import React, { useState, useEffect } from 'react'
import './index.css'
import CavSider from '../../component/cavSider';
import Car from '../../component/routeAndMove';
import Lane from '../../component/Lane';

export default function CavClassic() {
	const [Ncar, setNcar] = useState([])
	const [Nlane, setNlane] = useState([])
	const [Sdistance, setSdistance] = useState(0)
	const [Speedx, setSpeedx] = useState(0)
	const [Speedy, setSpeedy] = useState(0)
	const [angle, setAngle] = useState({ x: 0, y: 0 });
	//屏幕坐标
	const [scrCoor, setScrCoor] = useState([{ x: 0, y: 0 }])
	//坐标系坐标
	const [coor, setCoor] = useState([{ x: 0, y: 7.5 }])
	useEffect(() => {
		setAngle({ x: Speedx, y: Speedy })
	}, [Speedx, Speedy])
	return (
		<div className="cavClassic">
			<CavSider setNcar={setNcar} setNlane={setNlane} setSdistance={setSdistance} setSpeedx={setSpeedx} setSpeedy={setSpeedy} />
			<div className="cavClassic-right">
				<div className="cavClassic-right-del">
					<Button><Space>Del <DeleteFilled /></Space></Button>
				</div>
				<div className='cavClassic-right-main'>
					{Ncar.map((value, index) => (<Car scrCoor={scrCoor} angle={angle} key={index} />))}
					<Lane setScrCoor={setScrCoor} coor={coor} Nlane={Nlane} />
				</div>
			</div>
		</div>
	)
}
