import axios from 'axios'

//急速数据的接口请求
function request_jisu(config) {
  //创建实例
  const instance = axios.create({
    baseURL: 'https://api.jisuapi.com',
    timeout: 5000, //请求超时时间5s
    withCredentials: true, //表示跨域请求时是否需要使用凭证
  })

  //请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  //响应reponse拦截器
  instance.interceptors.response.use(res => {
    return res.data; //获取响应的数据
  }, err => {
    console.log(err)
  })

  return instance(config);
}

export {
  request_jisu
}