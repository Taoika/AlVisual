import { InputNumber, Button, Space } from 'antd'
import React from 'react'
import './index.css'

export default function CavSider() {
  return (
    <div className="cav-sider">
        <h2 className="cav-sider-head">Option</h2>
        <div className="cav-sider-body">
            <div className="cav-sider-carNum">
                    Num of Car <InputNumber></InputNumber>
            </div>
            <div className="cav-sider-laneNum">
                    Num of Lane <InputNumber></InputNumber>
            </div>
            <div className="cav-sider-safe">
                    Safe Distance <InputNumber></InputNumber>
            </div>
            <div className="cav-sider-speed">
                    <div className="cav-sider-speed-title">Speed</div>
                    <div className="cav-sider-speed-input">
                        x <InputNumber></InputNumber>
                        y <InputNumber></InputNumber>
                    </div>
            </div>
            <div className="cav-sider-button">
                    <Space><Button type='primary'>OK</Button><Button>Default</Button></Space>
            </div>
        </div>
    </div>
  )
}
