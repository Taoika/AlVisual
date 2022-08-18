import React,{useState} from 'react'
import { InputNumber,Drawer,Input,Button } from 'antd'
import './index.css'
import MySelect from '../../utils/myselect'
import MyGraph from '../../utils/mygraph'
import MyScatter3D from '../../utils/myscatter3d'
import init1 from '../../assets/images/init_1_hop_conn 41.png'
import init2 from '../../assets/images/init_1_hop_conn 42.png'
import init3 from '../../assets/images/init_1_hop_conn 43.png'
import init4 from '../../assets/images/init_1_hop_conn 44.png'
import init5 from '../../assets/images/init_1_hop_conn 45.png'
import init6 from '../../assets/images/init_1_hop_conn 46.png'
import init7 from '../../assets/images/init_1_hop_conn 47.png'
import init8 from '../../assets/images/init_1_hop_conn 48.png'
import init9 from '../../assets/images/init_1_hop_conn 49.png'
import init10 from '../../assets/images/init_1_hop_conn 50.png'

export default function AlPre() {

    // 抽屉开关状态
    const [visible, setVisible] = useState(false);
    // 算法模型
    const [model,setModel]=useState('DSG');
    // 数据密度
    const [density,setDensity]=useState('200');
    // 初识拓扑图
    const [initState,setInitState]=useState('1');
    // 请求路径
    const [url,setUrl]=useState({
        pointUrl:'',
        linkUrl:'',
    })

    // 选择框的处理函数
    function handleSelect(value){
        setModel(value);
    }

    // 数字输入框的处理函数
    const onChange = (value) => {
        setDensity(`${value}`);
    };

    // 打开抽屉
    const showDrawer = () => {
        setVisible(true);
      };
    
    // 关闭抽屉
    const onClose = () => {
        setVisible(false);
    };

    // 点击抽屉物件
    function handleInit(e){
        setInitState(e.target.nextElementSibling.innerHTML);
    }

    function handleRun(){
        setUrl({
            pointUrl:`http://qgailab.com/algorithmVisualization/api/point?tableName=${model}_${initState}_${density}`,
            linkUrl:`http://qgailab.com/algorithmVisualization/api/adjacency?tableName=${model}_${initState}_${density}`
        })
    }

  return (
    <div className="alPre">
        <div className="alPre-sider">
            <h2 className="alPre-sider-title">Option</h2>
            <div className="alPre-model">
                <h4>Model</h4>
                <MySelect option={['DSG','HSB','RSRSP','MWMS']} handleSelect={handleSelect}/>
                <div><a href="#">Click to see original&gt;&gt;</a></div>
            </div>
            <div className="alPre-data">
                <h4>Data density</h4>
                <InputNumber min={200} max={1000} defaultValue={200} step={200} onChange={onChange} />
            </div>
            <div className="alPre-topo" onClick={showDrawer}>
                <h4>Network topology</h4>
                <Input value={initState} style={{width:'120px'}}/>
            </div>
            <Button className='alPre-run' type="primary" onClick={handleRun}>Run</Button>
            <Drawer
                title="init your topology"
                className="alPre-init-container"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">1</h4>
                    <div className="alPre-init1-img"><img src={init1}/></div>
                </div>
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">2</h4>
                    <div className="alPre-init1-img"><img src={init2}/></div>
                </div>
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">3</h4>
                    <div className="alPre-init1-img"><img src={init3}/></div>
                </div>
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">4</h4>
                    <div className="alPre-init1-img"><img src={init4}/></div>
                </div>
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">5</h4>
                    <div className="alPre-init1-img"><img src={init5}/></div>
                </div>
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">6</h4>
                    <div className="alPre-init1-img"><img src={init6}/></div>
                </div>
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">7</h4>
                    <div className="alPre-init1-img"><img src={init7}/></div>
                </div>
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">8</h4>
                    <div className="alPre-init1-img"><img src={init8}/></div>
                </div>
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">9</h4>
                    <div className="alPre-init1-img"><img src={init9}/></div>
                </div>
                <div className="alPre-init" onClick={(Event)=>handleInit(Event)}>
                    <div className="alPre-init-mask"></div>
                    <h4 className="alPre-init1-title">10</h4>
                    <div className="alPre-init1-img"><img src={init10}/></div>
                </div>
            </Drawer>
        </div>
        <div className="alPre-content">
            <div className="alPre-content-top">
                <div className="alPre-2DStatic">
                    <div className="alPre-content-title">2D Static</div>
                    <div className="alPre-content-pre"></div>
                </div>
                <div >
                    <div className="alPre-content-title">2D Live</div>
                    <div className="alPre-content-pre">
                        <MyGraph 
                            pointUrl={url.pointUrl}
                            linkUrl={url.linkUrl}>
                        </MyGraph>
                    </div>
                </div>
                <div>
                    <div className="alPre-content-title">3D Live</div>
                    <div className="alPre-content-pre">
                        <MyScatter3D 
                                pointUrl={url.pointUrl}>
                        </MyScatter3D>
                    </div>
                </div>
            </div>
            <div className="alPre-content-center">
                <InputNumber className='alPre-inputNumber' min={0} max={50} defaultValue={0} step={1} onChange={onChange} />
            </div>
            <div className="alPre-content-bottom">
                <div className="alPre-2DStatic">
                    <div className="alPre-content-title">2D Static(+dp)</div>
                    <div className="alPre-content-pre"></div>
                </div>
                <div>
                    <div className="alPre-content-title">2D Live(+dp)</div>
                    <div className="alPre-content-pre">
                        <MyGraph 
                            pointUrl={url.pointUrl}
                            linkUrl={url.linkUrl}>
                        </MyGraph>
                    </div>
                </div>
                <div>
                    <div className="alPre-content-title">3D Live(+dp)</div>
                    <div className="alPre-content-pre">
                        <MyScatter3D 
                                pointUrl={url.pointUrl}>
                        </MyScatter3D>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
