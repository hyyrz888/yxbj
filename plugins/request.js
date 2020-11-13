import axios from 'axios'
// axios.defaults.baseURL = 'https://api.jisuapi.com/';
axios.defaults.withCredentials = true// 跨域处理 允许携带cookie
//急速数据的接口请求
export default function ({ $axios, redirect }) {
  //正常请求返回
  $axios.onRequest(config => {
    console.log(config)
  })
  $axios.onError(err => {
    console.log(err)
  })
}
