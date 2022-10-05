import { InputNumber, Button, Space } from 'antd'
import React from 'react'
import './index.css'

export default function CavSider({ setMove, setNcar, setNlane, setSdistance, setSpeedx, setSpeedy }) {
        const Ncar = React.useRef()
        const Nlane = React.useRef()
        const Sdistance = React.useRef()
        const Speedx = React.useRef()
        const Speedy = React.useRef()
        const submit = () => {
                // console.log(Ncar.current.value, Nlane.current.value, Sdistance.current.value, Speedx.current.value, Speedy.current.value);
                // data.map((v, i) => {
                //         console.log(v.current);
                // })


                //数组是为了生成对应的li
                setMove(false)
                //清楚所有定时器
                for (let j = 0; j < 1000; j++) {
                        clearInterval(j)
                }
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
        return (
                <div className="cav-sider">
                        <h2 className="cav-sider-head">Option</h2>
                        <div className="cav-sider-body">
                                <div className="cav-sider-carNum">
                                        Num of Car <InputNumber ref={Ncar}></InputNumber>
                                </div>
                                <div className="cav-sider-laneNum">
                                        Num of Lane <InputNumber ref={Nlane}></InputNumber>
                                </div>
                                <div className="cav-sider-safe">
                                        Safe Distance <InputNumber ref={Sdistance}></InputNumber>
                                </div>
                                <div className="cav-sider-speed">
                                        <div className="cav-sider-speed-title">Speed</div>
                                        <div className="cav-sider-speed-input">
                                                x <InputNumber ref={Speedx}></InputNumber>
                                                y <InputNumber ref={Speedy}></InputNumber>
                                        </div>
                                </div>
                                <div className="cav-sider-button">
                                        <Space><Button onClick={submit} type='primary'>OK</Button><Button>Default</Button></Space>
                                </div>
                        </div>
                </div>
        )
}
