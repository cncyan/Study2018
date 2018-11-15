import fetch from '../../axios/fetch'

//接口尝试
export const infos = () => fetch('/api/test','', 'get');
// 登录相关
export const login = (userInfo) => fetch('/api/user/login', userInfo, 'post');
// 手机快速登录相关
export const tellogin = (teluserInfo) => fetch('/api/user/sms/login', teluserInfo, 'post');
//获取手机验证码
export const getcode = (telInfo) => fetch('/api/user/sms', telInfo, 'post');
//验证手机验证码
export const checkcode = (telcheckInfo) => fetch('/api/user/sms/check', telcheckInfo, 'post');
//注册
