import 'antd/dist/antd.min.css'
import { HomeOutlined,LineChartOutlined,DesktopOutlined,FileOutlined,RadarChartOutlined } from '@ant-design/icons';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Nav from './component/nav/index'

export default function App() {
    const element = useRoutes(routes);
    return (
        <>
            <Nav 
                home={<><HomeOutlined/>Home</>} 
                alpre={<><LineChartOutlined />Algorithm Presentation</>}
                alexe={<><DesktopOutlined />Execute The Algorithm</>}
                thesis={<><FileOutlined />Thesis</>}
                datapre={<><RadarChartOutlined />Dataset Presentation</>}
            />
            <div style={{ height: '64px', width: '100vw' }}></div>
            {element}
        </>
    )
}
