export default ({ store, route, redirect, params, query, res, req }) => {
  //context 服务端上下文信息
  //store 状态树信息
  //route 一条目标路由信息
  //redirect 强制跳转
  //params,query 校验参数的合理性
  console.log("全局守卫前置业务")
  //redirect('/login')
}