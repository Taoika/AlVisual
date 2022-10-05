import { InputNumber, Button, Space } from 'antd'
import React,{ useRef, useEffect, useState } from 'react'
import './index.css'

export default function CavSider({ setNcar, setNlane, setSdistance, setSpeedx, setSpeedy }) {

        // 车辆数量
        const Ncar = React.useRef()
        // 车道数量
        const Nlane = React.useRef()
        // 安全距离
        const Sdistance = React.useRef()
        // x方向速度大小
        const Speedx = React.useRef()
        // y放行速度大小
        const Speedy = React.useRef()

        // 车量数量 状态
        const [CarNum,setCarNum] = useState(8);

        // 点击提交按钮
        const submit = () => {
                // console.log(Ncar.current, Nlane.current, Sdistance.current, Speedx.current, Speedy.current);
                // data.map((v, i) => {
                //         console.log(v.current);
                // })


                //数组是为了生成对应的li
                let arr = []
                while (Ncar.current.value--) {
                        arr.push(0)
                }
                setNcar(arr)
                let arr1 = []
                while (Nlane.current.value--) {
                        arr1.push(0)
                }
                setNlane(arr1)

                setSdistance(Sdistance.current.value)

                setSpeedx(Speedx.current.value)

                setSpeedy(Speedy.current.value)

        }

        function handleLaneNum(){
                setCarNum(Nlane.current.value);
        }

        return (
                <div className="cav-sider">
                        <h2 className="cav-sider-head">Option</h2>
                        <div className="cav-sider-body">
                                <div className="cav-sider-carNum">
                                        Num of Car <InputNumber ref={Ncar} max={CarNum * 4} min={1} defaultValue={1}></InputNumber>
                                </div>
                                <div className="cav-sider-laneNum">
                                        Num of Lane <InputNumber ref={Nlane} max={4} min={1} defaultValue={2} onBlur={handleLaneNum}></InputNumber>
                                </div>
                                <div className="cav-sider-safe">
                                        Safe Distance <InputNumber ref={Sdistance} defaultValue={10} min={10} max={20}></InputNumber>
                                </div>
                                <div className="cav-sider-speed">
                                        <div className="cav-sider-speed-title">Speed</div>
                                        <div className="cav-sider-speed-input">
                                                <Space direction="vertical">
                                                        <Space>x <InputNumber ref={Speedx} defaultValue={5} min={1}></InputNumber></Space> 
                                                        <Space>y <InputNumber ref={Speedy} defaultValue={5} min={1}></InputNumber></Space>
                                                </Space>
                                        </div>
                                </div>
                                <div className="cav-sider-button">
                                        <Button onClick={submit} type='primary'>OK</Button>
                                        <Button>Default</Button>
                                </div>
                        </div>
                </div>
        )
}
