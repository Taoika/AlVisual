import React,{ useState,useEffect,useRef } from 'react'
import { InputNumber,Drawer,Input,Button,Tooltip } from 'antd'
import './index.css'
import { axiosGet } from '../../utils/request'
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

    // 静态图 焦点处理
    const blurRef=useRef();

    // 帧数
    const [allFrames,setAllFrames]=useState(1);
    // 抽屉开关状态
    const [visible, setVisible] = useState(false);
    // 算法模型
    const [model,setModel]=useState('DSG');
    // 数据密度
    const [density,setDensity]=useState('200');
    // 初始拓扑图
    const [initState,setInitState]=useState('1');
    // 第几帧
    const [frame,setFrame]=useState(0);
    // 重复播放
    const [repeat,setRepeat]=useState(0);

    // 动图请求路径
    const [url,setUrl]=useState({
        pointUrl:'',
        linkUrl:'',
    })
    // 静图请求路径
    const [frameUrl,setFrameUrl]=useState({
        framePointUrl:'',
        frameLinkUrl:'',
    })

    // 算法选择的处理函数
    function handleSelect(value){
        if(value==='MWMS-J'){
            setModel('MWMS_J');
        } else if (value==='MWMS-S'){
            setModel('MWMS_S');
        } else{
            setModel(value);
        }
    }

    // 数据密度的处理函数
    const handleDensity = (value) => {
        setDensity(value);
    };

    // 选取静态图的处理函数
    const handleFrame = (e) => {
        if(e.target.value<=allFrames){
            setFrame(e.target.value);
            setFrameUrl({
                framePointUrl:`http://qgailab.com/algorithmVisualization/api/point/timeOrder?tableName=${model}_${initState}_${density}&timeOrder=${e.target.value}&polishId=true`,
                frameLinkUrl:`http://qgailab.com/algorithmVisualization/api/adjacency/timeOrder?tableName=${model}_${initState}_${density}&timeOrder=${e.target.value}&polishId=true`,
            });
        }
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
        setVisible(false);
    }

    // 运行
    function handleRun(){
        setUrl({
            pointUrl:`http://qgailab.com/algorithmVisualization/api/point?tableName=${model}_${initState}_${density}&amount=30&polishId=true`,
            linkUrl:`http://qgailab.com/algorithmVisualization/api/adjacency?tableName=${model}_${initState}_${density}&amount=30&polishId=true`,
        });
        setFrameUrl({
            framePointUrl:`http://qgailab.com/algorithmVisualization/api/point/timeOrder?tableName=${model}_${initState}_${density}&timeOrder=${frame}&polishId=true`,
            frameLinkUrl:`http://qgailab.com/algorithmVisualization/api/adjacency/timeOrder?tableName=${model}_${initState}_${density}&timeOrder=${frame}&polishId=true`,
        })
    }

    // 跳转
    function handleJump(e){
        e.preventDefault();
        // 在react中想要跳转并且打开新页面得这样
        const w=window.open('about:blank');
        w.location.href=`http://qgailab.com/algorithmVisualization/static/${model==='MWMS_J'?'MWMS':model==='MWMS_S'?'MWMS':model}.pdf`
    }

    // 静态图选取 回车事件
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            blurRef?.current?.blur();
            e.preventDefault();
        }
    }

    // 处理重复播放
    function handleRepeat(){
        setRepeat(repeat + 1);
    }

    // 获取总帧数
    useEffect(()=>{
        axiosGet(`http://qgailab.com/algorithmVisualization/api/point/quantity?tableName=${model}_${initState}_${density}`)
        .then(
            response=>{
                if(response.data.code===200){
                    // console.log(response.data.data);
                    setAllFrames(response.data.data-1);
                }else {
                    console.log(response.data.msg);
                }
            },
            error=>{
                console.log(error);
            }
        )
    },[model,density,initState])

  return (
    <div className="alPre">
        <div className="alPre-sider">
            <h2 className="alPre-sider-title">Option</h2>
            <div className="alPre-model">
                <h4>Model</h4>
                <MySelect option={['DSG','HSB','RSRSP','MWMS-J','MWMS-S']} handleSelect={handleSelect}/>
                <div><a href="#" onClick={(Event)=>handleJump(Event)}>Click to see original&gt;&gt;</a></div>
            </div>
            <div className="alPre-data">
                <h4>Data density</h4>
                <MySelect option={['200','400','600','800','1000']} handleSelect={handleDensity}/>
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
                    <div className="alPre-content-pre">
                        <MyGraph 
                            pointUrl={frameUrl.framePointUrl}
                            linkUrl={frameUrl.frameLinkUrl}
                            repeat={0}
                        >
                        </MyGraph>
                    </div>
                </div>
                <div >
                    <div className="alPre-content-title">2D Live</div>
                    <div className="alPre-content-pre">
                        <MyGraph 
                            pointUrl={url.pointUrl}
                            linkUrl={url.linkUrl}
                            repeat={repeat}
                        >
                        </MyGraph>
                    </div>
                </div>
                <div>
                    <div className="alPre-content-title">3D Live</div>
                    <div className="alPre-content-pre">
                        <MyScatter3D 
                            pointUrl={url.pointUrl}
                        >
                        </MyScatter3D>
                    </div>
                </div>
            </div>
            <div className="alPre-content-center">
                <div>
                    <Tooltip title={`the number must be larger than 0 and less than ${allFrames}` }color='rgba(237, 90, 101, 1)' placement="rightTop">
                        <InputNumber
                            className='alPre-inputNumber' 
                            min={0} 
                            max={allFrames} 
                            defaultValue={0} 
                            step={1} 
                            onBlur={(Event)=>handleFrame(Event)} 
                            onKeyDown={(e) => handleKeyDown(e)}
                            ref={blurRef}
                        />
                    </Tooltip>
                </div>
                <div>
                    <Button onClick={handleRepeat}>again</Button>
                </div>
                <i></i>
            </div>
            <div className="alPre-content-bottom">
                <div className="alPre-2DStatic">
                    <div className="alPre-content-title">2D Static(+dp)</div>
                    <div className="alPre-content-pre">
                        <MyGraph 
                                pointUrl={frameUrl.framePointUrl}
                                linkUrl={frameUrl.frameLinkUrl}
                                repeat={0}
                        >
                        </MyGraph>
                    </div>
                </div>
                <div>
                    <div className="alPre-content-title">2D Live(+dp)</div>
                    <div className="alPre-content-pre">
                        <MyGraph 
                            pointUrl={url.pointUrl}
                            linkUrl={url.linkUrl}
                            repeat={repeat}
                        >
                        </MyGraph>
                    </div>
                </div>
                <div>
                    <div className="alPre-content-title">3D Live(+dp)</div>
                    <div className="alPre-content-pre">
                        <MyScatter3D 
                            pointUrl={url.pointUrl}
                        >
                        </MyScatter3D>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
