import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';
import { HomeOutlined,LineChartOutlined,DesktopOutlined,FileOutlined,RadarChartOutlined,AppstoreOutlined } from '@ant-design/icons';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Nav from './component/nav/index'

// 自定义主题色
ConfigProvider.config({
    theme: {
      primaryColor: '#d0021b',
      linkColor:'#d0021b',
      borderColorBase:'#d0021b',
    },
  });

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
                masapp={<><AppstoreOutlined />Mas application</>}
            />
            <div style={{ height: '64px', width: '100vw' }}></div>
            {element}
        </>
    )
}
