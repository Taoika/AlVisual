import { Children } from "react";
import { Navigate } from "react-router-dom";
import Thesis from "../pages/thesis";
import ThesisDSG from "../pages/thesisdsg";
import ThesisHSB from "../pages/thesishsb";
import ThesisRSRSP from "../pages/thesisrsrsp";
import ThesisMWMS from "../pages/thesismwms";
import AlExe from "../pages/alexe";

const routes=[
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
        path:'/alexe',
        element:<AlExe/>,
    }
];

export default routes;