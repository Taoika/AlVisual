import React from 'react'
import { useEffect, useState, useRef } from 'react';
import './index.css'
import Car from '../../assets/images/car.png'
// 这个组件就是一整个可以跟随鼠标移动的元素 还需要根据实际情况限制图像的距离
//sleep
const sleep = (delay) => {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}
export default function RouteAndMove(props) {
    const [scrCoor, setScrCoor] = useState([{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 5, y: 8 }, { x: 12, y: 10 }, { x: 14, y: 12 }, { x: 15, y: 15 }]);
    // 图像位置状态
    const [xyz, setXyz] = useState({ x: 200, y: 120 });
    const [trixyz, setTrixyz] = useState({ x: 200, y: 120 });

    // 图像旋转状态
    const [angle, setAngle] = useState(0);
    const [i, setI] = useState(0)
    const mother = 100
    // 盒子元素
    const car1 = useRef(null);
    //小三角
    const triangle = useRef(null);
    //半径R
    const R = 70
    useEffect(() => {

        // if (i < 100000) {
        //     setXyz({ x: (i + 1) / mother, y: 10 })
        //     setI(i + 1)
        //     // sleep(10000)
        // }
        // else if (i < 2000) {
        //     setXyz({ x: 2000 - i, y: 2000 - i })
        //     setI(i + 1)
        // }
        // console.log('开始');
        // setXyz({ x: 293, y: 59 })
        // sleep(3000)
    }, [i])
    //处理鼠标旋转图像
    const rotate = (obj, set) => {
        obj.onmousedown = (event) => {
            event = event || window.event;
            // 阻止默认事件
            event.preventDefault();

            // 鼠标手
            obj.style.cursor = "grabbing";

            // 计算鼠标当前坐标 = 鼠标按下坐标 - 元素当前坐标(距离父元素距离)
            // div的水平偏移量  鼠标.clentX - 元素.offsetLeft
            // div的垂直偏移量  鼠标.clentY - 元素.offsetTop
            var ol = event.clientX - obj.offsetLeft;
            var ot = event.clientY - obj.offsetTop;
            // 绑定鼠标移动事件
            document.onmousemove = (event2) => {
                event2 = event2 || window.event;
                // 计算移动距离 = 当前鼠标坐标 - 鼠标按下坐标
                var left = event2.clientX - ol;
                var top = event2.clientY - ot;
                var car = car1.current
                let o = toCenter({ x: car.offsetLeft, y: car.offsetTop })
                if ((left - o.x) !== 0) {
                    let angle = Math.atan((top - o.y) / (left - o.x))
                    angle = angle > 90 ? -angle : angle
                    let tempY = R * Math.sin(angle)
                    let tempX = R * Math.cos(angle)
                    let x, y
                    if (left < o.x) {
                        x = o.x - tempX;
                        y = o.y - tempY;
                    } else {
                        x = o.x + tempX;
                        y = o.y + tempY;
                    }
                    set({ x, y });
                    angle = angle * 57
                    console.log(angle);
                    left < o.x ? setAngle(180 + angle) : setAngle(angle)

                }

            }

            // 绑定一个鼠标松开事件
            document.onmouseup = (e) => {
                // 取消鼠标移动事件
                document.onmousemove = null;
                document.onmouseup = null;
                // 还原鼠标手
                obj.style.cursor = "grab";
            }
        }
    }
    // 处理鼠标拖曳图像
    const drag = (obj, set) => {
        // 鼠标被按下
        obj.onmousedown = (event) => {
            event = event || window.event;
            // 阻止默认事件
            event.preventDefault();

            // 鼠标手
            obj.style.cursor = "grabbing";

            // clintWidth是元素的实际宽度 包括padding
            var maxMoveX = window.innerWidth - obj.clientWidth;
            var maxMoveY = window.innerHeight - obj.clientHeight;

            // 计算鼠标当前坐标 = 鼠标按下坐标 - 元素当前坐标(距离父元素距离)
            // div的水平偏移量  鼠标.clentX - 元素.offsetLeft
            // div的垂直偏移量  鼠标.clentY - 元素.offsetTop
            var ol = event.clientX - obj.offsetLeft;
            var ot = event.clientY - obj.offsetTop;
            var lastTop, lastLeft
            // 绑定鼠标移动事件
            document.onmousemove = (event2) => {
                event2 = event2 || window.event;
                // 计算移动距离 = 当前鼠标坐标 - 鼠标按下坐标
                var left = event2.clientX - ol;
                var top = event2.clientY - ot;

                // 判断左右移动距离
                if (left >= maxMoveX) {
                    left = maxMoveX;
                } else if (left <= 0) {
                    left = 0;
                }
                // 判断上下移动距离
                if (top >= maxMoveY) {
                    top = maxMoveY;
                } else if (top <= 0) {
                    top = 0;
                }
                lastTop = top;
                lastLeft = left;

                set({ x: left, y: top });
            }

            // 绑定一个鼠标松开事件
            document.onmouseup = (e) => {
                // 取消鼠标移动事件
                if (lastLeft) {
                    coorTransform(lastLeft, lastTop, setXyz)

                }
                document.onmousemove = null;
                document.onmouseup = null;
                // 还原鼠标手
                obj.style.cursor = "grab";
            }
        }
    }
    //拖曳后吸附坐标转换
    //处理拖曳 屏幕坐标转换坐标系坐标
    const coorTransform = (x, targetY, set) => {
        // obj长度
        var lis = document.querySelector('.cavClassic-right-lane').children
        let min = 100000;
        let last = 0;
        for (let i = 0; i < lis.length; i++) {
            let center = lis[i].offsetTop + lis[i].clientHeight / 2
            let y = targetY + 25
            if (Math.abs(center - y) < min) {
                min = Math.abs(center - y)
                last = center;
            }
        }
        set({ x, y: last - 25 })
    }
    useEffect(() => {
        // const x = props.scrCoor[0].x + 'px';
        // const y = props.scrCoor[0].y - 28 + 'px';
        // setXyz({ x, y })
        // if (i < 100000) {
        //     setXyz({ x: (i + 1) / mother, y: 10 })
        //     setI(i + 1)
        //     // sleep(10000)
        // }
        // else if (i < 2000) {
        //     setXyz({ x: 2000 - i, y: 2000 - i })
        //     setI(i + 1)
        // }
        // console.log('开始');
        // setXyz({ x: 293, y: 59 })
        // sleep(3000)
    }, [props.scrCoor])
    // 拖曳功能
    useEffect(() => {
        if (car1) drag(car1.current, setXyz);
        if (triangle) rotate(triangle.current, setTrixyz);
    }, []);

    // 将x，y形式的速度转换成角度形式的速度 Promise
    function speedTransform(xy, speed) {
        return new Promise((resolve, reject) => {
            const x = xy?.x;
            const y = xy?.y;
            const n = x >= 0 ? Math.asin(y / speed) / (Math.PI / 180) :
                y >= 0 ? Math.asin(-y / speed) / (Math.PI / 180) + 180 :
                    Math.asin(-y / speed) / (Math.PI / 180) - 180;
            resolve(-n);
        })

    }

    // 旋转功能
    useEffect(() => {
        // asin的返回值在 -2/pi ~ 2/pi 这个范围内
        const x = props?.angle.x;
        const y = props?.angle.y
        let speed = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        speedTransform({ x: x, y: y }, speed).then((value) => {
            setAngle(value)
        })
    }, [props.angle]);
    //让小三角跟着小车移动
    useEffect(() => {
        let temp = toCenter(xyz)
        temp.x += R
        setAngle(0)
        setTrixyz(temp)
    }, [xyz]);
    //坐标转换，从左上角转换到车的正中间
    const toCenter = (xyz) => {
        let toCenterX = 57
        let toCenterY = 12
        let x = xyz.x + toCenterX
        let y = xyz.y + toCenterY
        return { x, y }
    }
    return (
        <>
            <img className='car' src={Car} ref={car1} style={{ left: xyz.x, top: xyz.y, transform: `rotate(${angle}deg)` }} width="10%" alt="myCar" />
            {/* 鼠标拖动前面的小三角进行旋转 */}
            <div className='triangle' ref={triangle} style={{ left: trixyz.x, top: trixyz.y }}></div>
        </>
    )
}
