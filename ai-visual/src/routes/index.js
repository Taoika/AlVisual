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
import MasApp from '../pages/masapp'
import MasClassic from "../pages/masclassic";
import MasClusters from "../pages/masclusters";
import MasEvent from "../pages/masevent";
import CavCalssic from '../pages/cavClassic'
import CavClusters from '../component/cavClusters'
import CavEvent from '../component/cavEvent'

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
        path:'/masapp',
        element:<MasApp/>,
        children:[
            {
                path:'masclassic',
                element:<MasClassic/>,
            },
            {
                path:'masclusters',
                element:<MasClusters/>,
            },
            {
                path:'masevent',
                element:<MasEvent/>,
            },
            {
                path:'',
                element:<Navigate to='masclassic'/>
            }
        ]
    },
    {
        path:'cavClassic',
        element:<CavCalssic/>,
    },
    {
        path:'cavClusters',
        element:<CavClusters/>,
    },
    {
        path:'cavEvent',
        element:<CavEvent/>,
    },
    {
        path:'',
        element:<Navigate to='home'/>
    }
];

export default routes;