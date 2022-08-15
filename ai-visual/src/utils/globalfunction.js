import axios from 'axios'
import React from 'react'
// import { Alert } from 'antd';
import True from '../assets/images/true.png' 
import False from '../assets/images/false.png' 
import { encryptAES,decryptAES,encryptRSA,initKey } from './encrypt';

//读Cookie
React.getCookie=(cookieName) =>{
    const strCookie = document.cookie
    const cookieList = strCookie.split(';')
  
    for (let i = 0; i < cookieList.length; i++) {
      const arr = cookieList[i].split('=')
      if (cookieName === arr[0].trim()) {
        return arr[1]
      }
    }
    return ''
  }
//axios
  React.axios =(type,url,setLoad,setFlag,data,params,blob) => {
    return new Promise((resolve,reject)=>{
      // //公钥
      const PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDI3hf95L3aMonXCgG926Gt6nwft8RnhM+6UHVieE4N58V0swNvFVU4XRrlNn4o2vU8eZ5z1c8s2AHEl65ck5kiAPjC82nCgWd4j1sdr2Wvz18B+/DT4PLZum4QzwIAviQfafp1qVbC6fYj0BLyDXmeaO5gi3X19U0kIhUPWbzAqQIDAQAB';
      // AES秘钥
      const AESKey=initKey(16);
      axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': React.getCookie('header')
        },
        method:type.toUpperCase(),
        url,
        // data:nojson?data:JSON.stringify(data),
        data:Object.prototype.toString.call(data)==='[Object FormDta]'?data:JSON.stringify({
          // 密钥
          encryptKey:encryptRSA(PUBLIC_KEY,AESKey),
          // 密文
          encryptStr:encryptAES(AESKey,JSON.stringify(data)),
        }),
        params:params||'',
        responseType:blob?'blob':'json'  //或者是blob
      })
      .then(
        response=>{
          if(typeof setLoad ==='function'){
            setLoad(0);
          }      
          if(200===response.data.code||!response.data.code){
            //回复
            if(response.data.code){
              React.alert(response.data.msg, 1, () => {
                if(typeof setFlag ==='function'){
                  setFlag(1)
                }
              })
            }            
            //判断是否设置cookie
            if(response.headers.authorization){
                document.cookie = `header=${response.headers.authorization}`;
                document.cookie = `permission=${response.data.data.permission}`;
                document.cookie = `user=${response.data.data.user_id}`;
            }
            //判断是否是获取文件
            if(blob){
              let imageType = response.headers['content-type'];   //获取图片类型
              const blob = new Blob([response.data], { type: imageType })
              const imageUrl = (window.URL || window.webkitURL).createObjectURL(blob)
              resolve(imageUrl)//返回文件url
            }
            //返回数据
            if(response.data.data){
              AESKey=type.toUpperCase()==='GET'?'Z6XB<$F9fA5jRT92':AESKey;
              resolve(decryptAES(AESKey,response.data.data))//使用返回的data
            }
          }    
          //错误时
          else{
            React.alert(response.data.msg, 0, () => {
              if(typeof setFlag ==='function'){
                setFlag(1)
              }})
          }
        },
        error=>{
          if(typeof setLoad ==='function'){
          setLoad(0);
        };
        React.alert('异常错误，可能是服务器问题', 0, () => {if(typeof setFlag ==='function'){
          setFlag(1)
        }})}
      )
    })
  };
//alert
React.alert=(data,type, callback)=> { //回调函数
    if(document.querySelector('.alertbox')){
        return;
    }
    var time1, time2;
    var
    alert_box = document.createElement('div'),
    alert_text = document.createElement('div'),
    alert_img = document.createElement('img'),
    textNode = document.createTextNode(data ? data : '');
    // btnText = document.createTextNode('');
  
    type===1?alert_img.src=True:alert_img.src=False

    // 控制样式
    //增加透明度
    css(alert_box, {//控制盒子大小、背景颜色上下边距
        'width': '20vw',
        'max-width': '90%',
        'font-size': '1.0526vw',
        'text-align': 'center',
        'background-color': type?'rgb(246, 255, 237)':'rgb(229, 197, 192)',
        // 'border-radius': '15px',
        'position': 'absolute',
        'top': '15%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'padding-left': '1.5vw',
        'z-index':'999',
        'opacity':0
      
    });

    css(alert_text, {
        'padding': '.6579vw .9868vw',
        'z-index':'999',
        // 'border-bottom': '1px solid #ddd'
    });

    css(alert_img, {
        'position':'absolute',
        'left':'.6579vw',
        'top':'.5263vw',
        
        'width':'2vw',
        'height':'2vw  ',
        'z-index':'999',
        'cursor': 'pointer'
    });

    // 内部结构套入
    alert_text.appendChild(textNode);
    // alert_img.appendChild(btnText);
    alert_box.appendChild(alert_text);
    alert_box.appendChild(alert_img);
    // alert_bg.appendChild(alert_box);
    alert_box.className='alertbox'
    // 总体显示到页面内
    document.getElementsByTagName('body')[0].appendChild(alert_box);
var opacity=0;
const addOpacity = () => {
    var target=document.querySelector('.alertbox')
        if (target.style.opacity > 1) {
            clearInterval(time1);
            time2 = setInterval(deleteOpacity, 75)
        }
        opacity+=0.1;
        target.style.opacity=opacity;
    }
    //减少透明度
    const deleteOpacity = () => {
    var target=document.querySelector('.alertbox')
        if (target.style.opacity < 0) {
            clearInterval(time2);
            alert_box.parentNode.removeChild(alert_box);
        if (typeof callback === 'function') {
            callback(); //回调
        }
        }
        target.style.opacity-=0.05
    }
    if(!time1){
        time1 = setInterval(addOpacity, 50);
    }
    // 肯定绑定点击事件删除标签
    // alert_img.onclick = function() {
    //     alert_box.parentNode.removeChild(alert_box);
    //     if (typeof callback === 'function') {
    //         callback(); //回调
    //     }
    // }
}
function css(targetObj, cssObj) {
    var str = targetObj.getAttribute("style") ? targetObj.getAttribute('style') : '';
    for (var i in cssObj) {
        str += i + ':' + cssObj[i] + ';';
    }
    targetObj.style.cssText = str;
}
//sleep
React.sleep=(delay)=> {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
      continue;
  }
}

 