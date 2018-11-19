import fetch from '../../axios/fetch'


// 登录相关
export const login = (userInfo) => fetch('/api/user/login', userInfo, 'post');

//接口尝试
export const getbillinfo = () => fetch('/api/bill/info','', 'get');
