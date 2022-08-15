import { Layout, Menu } from 'antd';
import React from 'react'
import { Link,useNavigate,Outlet } from 'react-router-dom'
import './index.css'
import logo from '../../assets/images/projectcontrol.png'

export default function Nav(props) {

    const navigate=useNavigate();
    const { Header } = Layout;

    // 点击logo
    function handleClick(){
        navigate('userproject');
    }

    // 根据props动态生成items props为对象 键值对分别对应key和展示条目
    const items=[];
    // 获取默认值
    let defaultSelectedKeys='';
    let k=1;
    for(const i in props){
        defaultSelectedKeys=(k++)===2?i:defaultSelectedKeys;
        items.push({
            key:i,
            label:<Link to={`/${i}`}>{props[i]}</Link>
        })
    }

    return (
        <div className='head'>
            <Header className="head-header" >
                <div className="head-logo" onClick={handleClick}>
                    <img src={logo} alt="算法可视化平台" />
                </div>
                <Menu className='head-menu' mode="horizontal" defaultSelectedKeys={[defaultSelectedKeys]} items={items} />
            </Header >
            <Outlet/>
        </div >
    )
}
