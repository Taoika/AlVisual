import { InputNumber,Button,Space } from 'antd';
import React,{useState} from 'react'
import './index.css'
import MySelect from '../../utils/myselect'
import MyUpload from '../../component/upload';
import MyGraph from '../../utils/mygraph'
import MyScatter3D from '../../utils/myscatter3d';

export default function AlExe() {

    const [file,setFile]=useState(null);

    // 文件上传的处理函数
    function handleUpload(value){
        console.log(value);
        setFile(value);
    }

    // 选择框的处理函数
    function handleSelect(value){
        console.log(value);
    }

    // 数字输入框的处理函数
    const onChange = (value) => {
        console.log('changed', value);
    };

  return (
    <div className="alExe">
        <div className="alExe-subNav">
            <div className="alExe-select">
                <div className="alExe-model">
                    <span>Model</span>
                    <MySelect option={['DSG','HSB','RSRSP','MWMS']} handleSelect={handleSelect}/>
                </div>
                <div className="alExe-dp">
                    <span>Dp</span>
                    <MySelect option={['yes','no']} handleSelect={handleSelect}/>
                </div>
                <div className="alExe-sensitive">
                    <span>Sensitive range</span>
                    <InputNumber min={0} max={1} defaultValue={0.5} step={0.1} onChange={onChange} />
                </div>
            </div>
            <div className="alExe-right">
                <div className="alExe-file">
                    <div className="alExe-upload"><MyUpload handleUpload={handleUpload}/></div>
                </div>
                <div className="alExe-btn"><Button>运行</Button></div>
            </div>
        </div>
        <div className="alExe-content">
            <div className="alExe-2DStatic">
                <div className="alExe-content-head">
                    <div className="alExe-content-head-title">2D Static</div>
                    <Space>
                        Time
                        <InputNumber min={0} max={50} defaultValue={0} step={1} onChange={onChange} />
                    </Space>
                </div>
                <div className="alExe-content-show">

                </div>
            </div>
            <div className="alExe-2DLive">
                <div className="alExe-content-head">
                    <div className="alExe-content-head-title">2D Live</div>
                </div>
                <div className="alExe-content-show">
                    <MyGraph 
                        pointUrl='http://qgailab.com/algorithmVisualization/api/point?tableName=DSG_5_800'
                        linkUrl='http://qgailab.com/algorithmVisualization/api/adjacency?tableName=DSG_5_800'>
                    </MyGraph>
                </div>
            </div>
            <div className="alExe-3D">
                <div className="alExe-content-head">
                    <div className="alExe-content-head-title">3D Live</div>
                </div>
                <div className="alExe-content-show">
                    <MyScatter3D 
                        pointUrl='http://qgailab.com/algorithmVisualization/api/point?tableName=DSG_5_800'>
                    </MyScatter3D>
                </div>
            </div>
        </div>
    </div>

  )
}
