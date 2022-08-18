/*
 * @Author: kkt 
 * @Date: 2022-08-04 10:28:56
 * @LastEditors: kkt 670335957@qq.com
 * @LastEditTime: 2022-08-05 15:24:03
 * @FilePath: \cenkuntao\代码\ResponsiveLayout\study\study\utils\request.js
 * @Description: 已封装的请求参数
 */
import axios from 'axios';
import { encryptAES,decryptAES,encryptRSA,initKey } from './encrypt';

/**
 * @description: 使用axios发送的get请求
 * @param {String} url 请求路径 必选
 * @param {Object} data 在路径中携带的参数 可选
 * @param {Object} headers 请求头 可选
 * @return {Promise} 
 */
export const axiosGet = (url,data) => {
  return new Promise((resolve,reject)=>{
    axios({
      method:'GET',
      url:url,
      params:data,
    })
    .then(
      response=>{
        resolve(response)
      },
      error=>{
        reject(error)
      }
    )
  })
};

/**
 * @description: 使用axios发送的post请求 请求体为JSON
 * @param {String} url 请求路径 必选
 * @param {Object} data 请求体 必选
 * @param {Object} headers 请求头 可选
 * @return {Promise} 
 */
export const axiosJSONPost = (url,data) => {
  return new Promise((resolve,reject)=>{
    axios({
      method:'POST',
      url,
      data:JSON.stringify(data),
    })
    .then(
      response=>resolve(response),
      error=>reject(error)
    )
  })
};

/**
 * @description: 使用axios发送的post请求 请求体为formData表单
 * @param {String} url 请求路径 必选
 * @param {formData} formData 请求体 必选 
 * @param {Object} headers 请求头 可选
 * @return {Promise} 
 */
 export const axiosFormDataPost = (url,formData) => {
  return new Promise((resolve,reject)=>{
    axios({
      method:'POST',
      url:url,
      data:formData,
    })
    .then(
      response=>resolve(response),
      error=>reject(error)
    )
  })
};

/**
 * @description: 使用axios发送的put请求 请求体为JSON
 * @param {String} url 请求路径 必选
 * @param {Object} data 请求体 必选
 * @param {Object} headers 请求头 可选
 * @return {Promise} 
 */
 export const axiosPut = (url,data) => {
  return new Promise((resolve,reject)=>{
    axios({
      method:'PUT',
      url:url,
      data:JSON.stringify(data),
    })
    .then(
      response=>resolve(response),
      error=>reject(error)
    )
  })
};

/**
 * @description: 使用axios发送的DELETE请求
 * @param {String} url 请求路径 必选
 * @param {Object} data 在路径中携带的参数 可选
 * @param {Object} headers 请求头 可选
 * @return {Promise} 
 */
 export const axiosPathDelete = (url,data) => {
  return new Promise((resolve,reject)=>{
    axios({
      method:'DELETE',
      url:url,
      params:data,
    })
    .then(
      response=>resolve(response),
      error=>reject(error)
    )
  })
};

/**
 * @description: 使用axios发送的delete请求 请求体为JSON
 * @param {String} url 请求路径 必选
 * @param {Object} data 请求体 必选
 * @param {Object} headers 请求头 可选
 * @return {Promise} 
 */
 export const axiosBodyDelete = (url,data,code) => {
  return new Promise((resolve,reject)=>{
    axios({
      method:'DELETE',
      url:url,
      data:JSON.stringify(data),
    })
    .then(
      response=>{
        if(code===response.data.code&&response.data.data){
          resolve(response.data.data)//使用返回的data
        }
      },
      error=>reject(error)
    )
  })
};

// 可发送post put delete请求
// url data PUBLIC_KEY 都是必须的 type默认为post 
export const myBodyAxios = (url,type,data,PUBLIC_KEY) => {
  return new Promise((resolve,reject)=>{
    // AES秘钥
    const AESKey=initKey(16);
    axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method:type?type.toUpperCase():'POST',
      url:url,
      // Object.prototype.toString.call(data)方法用于通用的检测数据类型 toString()对function不管用 
      data:JSON.stringify({
        // 密文
        encryptStr:encryptAES(AESKey,JSON.stringify(data)),
        // 密钥
        encryptKey:encryptRSA(PUBLIC_KEY,AESKey),
      }),
    })
    .then(
      response=>{
        console.log('AES解密前的数据:',response.data);
        response.data.data=decryptAES(AESKey,response.data.data);
        console.log('AES解密后的数据:',response.data);
        resolve(response.data)//使用返回的data
      },
      error=>reject(error)
    )
  })
};

// 可发送get delete请求
// url data PUBLIC_KEY 都是必须的 type默认为get
export const myPathAxios = (url,type,data,PUBLIC_KEY) => {
  return new Promise((resolve,reject)=>{
    axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method:type?type.toUpperCase():'GET',
      url:url,
      params:data,
    })
    .then(
      response=>{
        console.log('AES解密前的数据:',response.data);
        response.data.data=decryptAES('Z6XB<$F9fA5jRT92',response.data.data);
        console.log('AES解密后的数据:',response.data);
        resolve(response.data)//使用返回的data
      },
      error=>reject(error)
    )
  })
};

// 表单数据 怎么加密传输
// const formData=new FormData();
// formData.append('name','kkt');
// formData.append('age',18);
// Object.prototype.toString.call(data)!=='[Object FormDta]'方法用于通用的检测数据类型 toString()对function不管用 
// // FormData数据不可以直接打印 可用entries枚举对象 得到键值对
// for (var key of formData.entries()) {
    // console.log(key);
// }

// 通用的加密请求方式 不传参的地方记得占位
// 参数 请求地址 类型 路径参数 请求体 公钥
export const myAxios = (url,type,params,data,PUBLIC_KEY) => {
  return new Promise((resolve,reject)=>{
    // AES秘钥
    const AESKey=initKey(16);
    axios({
      method:type?type.toUpperCase():'POST',
      url:url,
      // 路径参数
      params:params?params:'',
      // 请求体
      data:data?JSON.stringify({
        // 密钥
        encryptKey:encryptRSA(PUBLIC_KEY,AESKey),
        // 密文
        encryptStr:encryptAES(AESKey,JSON.stringify(data)),
      }):'',
    })
    .then(
      response=>{
        console.log('AES解密前的数据:',response.data);
        response.data.data=decryptAES(AESKey,response.data.data);
        console.log('AES解密后的数据:',response.data);
        resolve(response.data)//使用返回的data
      },
      error=>reject(error)
    )
  })
};
