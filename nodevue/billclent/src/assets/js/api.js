import fetch from '../../axios/fetch'

//接口尝试
//export const infos = () => fetch('/api/test','', 'get');
// 登录相关
export const login = (userInfo) => fetch('/api/user/login', userInfo, 'post');
