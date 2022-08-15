// 加密函数工具包 内有RSA加解密 AES加解密 指定位数字符串生成函数
import CryptoJS from "crypto-js";
import JSEncrypt from 'jsencrypt'

/** AES加密 */
// aesPassword是用于加密的16位随机字符串(秘钥) word是公钥
export const encryptAES=(aesPassword, word)=>{ 
    // 将随机字符串从UTF8编码解析出原始字符串？？
    const key = CryptoJS.enc.Utf8.parse(aesPassword);
    // 将公钥从UTF8编码解析出原始字符串？？
    const srcs = CryptoJS.enc.Utf8.parse(word);
    // 获得已使用AES加密的公钥
    const encrypted = CryptoJS.AES.encrypt(srcs, key, { mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    // 将密文转化为字符串 并返回
    return encrypted.toString();// base64结果
    // return encrypted.ciphertext.toString()// 二进制结果
}

/** AES解密 */
// aesPassword是用于解密的字符串（秘钥） 与前文用于加密的字符串是同一个 word是密文 对方使用同样的秘钥加密过
export const decryptAES=(aesPassword, word)=>{ 
    // 将解密字符串转化为原始字符串？？
    const key = CryptoJS.enc.Utf8.parse(aesPassword);
    // 首先将密文 用秘钥进行AES解密 获得明文 此信息即为目的数据
    const decrypt = CryptoJS.AES.decrypt(word, key, { mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    // 将明文从原始字符串转化为UTF8编码格式 再转为为字符串并返回
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

/* 随机生成密钥 */
// len为目的秘钥长度
export const initKey=(len)=>{ 
    len = len || 32;
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz23456789~!@#$%^&*()_+}{":?><';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    // maxPos是$chars的长度
    let  maxPos = $chars.length;
    let pwd = '';
    let i=0;
    for (i = 0; i < len; i++) { 
        // chartAt方法通过index从字符串中获取指定字符
        // 随机数*长度向下取整作为取字符的index
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

// RSA公钥加密
export const encryptRSA=(PUBLIC_KEY,word)=>{
    // new一个JSEncrypt对象
    const encrypt = new JSEncrypt();
    // 设置公钥 
    encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
    // 公钥加密 并返回
    return encrypt.encrypt(word);
}

// RSA私钥解密
export const decryptRSA=(PRIVATE_KEY,word)=>{
    // new一个JSEncrypt对象
    const decrypt = new JSEncrypt();
    // 设置私钥
    decrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----'+PRIVATE_KEY+'-----END RSA PRIVATE KEY-----');
    // 私钥解密 并返回
    return decrypt.decrypt(word); 
}