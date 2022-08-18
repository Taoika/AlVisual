import { Navigate } from "react-router-dom";
import Thesis from "../pages/thesis";
import ThesisDSG from "../pages/thesisdsg";
import ThesisHSB from "../pages/thesishsb";
import ThesisRSRSP from "../pages/thesisrsrsp";
import ThesisMWMS from "../pages/thesismwms";
import AlExe from "../pages/alexe";
import DataPre from "../pages/datapre";
import AlPre from "../pages/alpre";
import Home from "../pages/home";

const routes=[
    {
        path:'/home',
        element:<Home/>,
    },
    {
        path:'/alpre',
        element:<AlPre/>,
    },
    {
        path:'/alexe',
        element:<AlExe/>,
    },
    {
        path:'/thesis',
        element:<Thesis/>,
        children:[
            {
                path:'thesisdsg',
                element:<ThesisDSG/>,
            },
            {
                path:'thesishsb',
                element:<ThesisHSB/>,
            },
            {
                path:'thesisrsrsp',
                element:<ThesisRSRSP/>,
            },
            {
                path:'thesismwms',
                element:<ThesisMWMS/>,
            },
            {
                path:'',
                element:<Navigate to='thesisdsg'/>
            }
        ]
    },
    {
        path:'/datapre',
        element:<DataPre/>,
    },
    {
        path:'',
        element:<Navigate to='home'/>
    }
];

export default routes;