import React, { useState, useEffect, useRef } from 'react'
const sleep = (delay) => {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}
export default function Lane({ Nlane, setScrCoor, coor, }) {


    // 现有小车A B C D E F 
    // y: 0~140 x: 0~3.0

    // 屏幕坐标数组(px) x对应offsetLeft y对应offsetTop 要注意的是这里的y是向下的 而坐标系中y是向上的
    // const [scrCoor, setScrCoor] = useState([{ x: 793, y: 99 }, { x: 198, y: 495 }, { x: 793, y: 495 }, { x: 198, y: 99 }, { x: 222, y: 155 }, { x: 411, y: 166 }]);
    // 坐标系坐标数组(无单位)
    // const [coor, setCoor] = useState([]);

    // 坐标系坐标数组(无单位 后台传过来的)
    const [treCoor, setTreCoor] = useState([{ x: 0, y: 0 }, { x: 140, y: 0 }, { x: 0, y: 3 }, { x: 140, y: 3 }, { x: 123, y: 2.4 }, { x: 3, y: 1 }]);
    // 屏幕坐标数组(px 转换后用到屏幕上面)
    const [treScrCoor, setTreScrCoor] = useState([]);

    // 坐标系坐标的最大最小值(px)
    // const [extre, setExtre] = useState({ minX: 0, minY: 0, maxX: 0, maxY: 0 });
    // 最大坐标系坐标(无单位)
    const [max, setMax] = useState({ x: 100, y: 100 });

    // 坐标系所在容器
    const laneContainer = useRef(null);

    // 坐标转换 由屏幕坐标转换为无单位的坐标系坐标 参数: 坐标轴所在对象 屏幕坐标 坐标系坐标的最大值 set
    // const coorTransform = (obj, coor, max, set) => {
    //     // obj宽度
    //     const clientWidth = obj.clientWidth;
    //     // obj长度
    //     const clientHeight = obj.clientHeight;
    //     // obj左边距
    //     const offsetLeft = obj.offsetLeft;
    //     // obj上边距
    //     const offsetTop = obj.offsetTop;
    //     // 最大x
    //     const maxX = clientWidth;
    //     // 最大y
    //     const maxY = clientHeight;

    //     const sysCoor = coor.map((i) => {
    //         return { x: i.x - offsetLeft, y: offsetTop + clientHeight - i.y }
    //     })

    //     set(sysCoor.map((i) => {
    //         return { x: (max.x * i.x / maxX), y: (max.y * i.y / maxY) };
    //     }))
    // }


    // 坐标转换 由无单位的坐标系坐标转换为屏幕坐标 参数: 坐标轴所在对象 无单位的坐标系坐标 坐标系坐标的最大值 set
    const treCoorTransform = (obj, coor, max, set) => {
        // obj宽度
        const clientWidth = obj.clientWidth;
        // obj长度
        const clientHeight = obj.clientHeight;
        // obj左边距
        const offsetLeft = obj.offsetLeft;
        // obj上边距
        const offsetTop = obj.offsetTop;
        // 最大x
        const maxX = clientWidth;
        // 最大y
        const maxY = clientHeight;

        if (coor.length > 10) {
            coor.map((i) => {
                i.list.map((j) => {
                    let x = (maxX * j.x / max.x)
                    let ytemp = (maxY * j.y / max.y)
                    let MinY = 35
                    let MaxY = clientHeight - 30
                    let y = ytemp < MinY ? MinY : ytemp > MaxY ? MaxY : ytemp
                    j.x = x + offsetLeft;
                    j.y = offsetTop + clientHeight - y;
                })

            })
            set(coor)
            // set(sysCoor.map((i) => {
            //     return { x: i.x + offsetLeft, y: offsetTop + clientHeight - i.y };
            // }))
        }

    }

    // 获取可设置的x y屏幕坐标范围(px) 参数: 坐标轴所在对象 set
    // const getExtre = (obj, set) => {
    //     // obj宽度
    //     const clientWidth = obj.clientWidth;
    //     // obj长度
    //     const clientHeight = obj.clientHeight;
    //     // obj左边距
    //     const offsetLeft = obj.offsetLeft;
    //     // obj上边距
    //     const offsetTop = obj.offsetTop;

    //     set({ minX: offsetLeft, minY: 35, maxX: offsetLeft + clientWidth, maxY: clientHeight });
    // }

    useEffect(() => {
        if (laneContainer) {
            // getExtre(laneContainer.current, setExtre);
            // coorTransform(laneContainer.current, scrCoor, max, setCoor);
            // treCoorTransform(laneContainer.current, treCoor, max, setTreScrCoor);
            // coorTransform(laneContainer.current, scrCoor, max, setCoor);

            treCoorTransform(laneContainer.current, coor, max, setScrCoor);

        }
    }, [Nlane, coor]);



    return (
        <ul ref={laneContainer} className='cavClassic-right-lane'>
            {Nlane.map((v, i) =>
                (<li key={i}></li>))
            }
        </ul>
    )
}
