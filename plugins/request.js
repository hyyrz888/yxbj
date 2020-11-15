//急速数据的接口请求
export default function ({ $axios, redirect }) {
  //基本配置
  $axios.defaults.timeout = 1000

  //正常请求返回
  $axios.onRequest(config => {
    console.log("请求拦截", config)
  })

  //响应拦截
  $axios.onResponse(res => {
    console.log('响应拦截')
  })
  //错误拦截
  $axios.onError(err => {
    console.log(err)
  })
}
