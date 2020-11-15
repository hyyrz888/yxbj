export default ({ app, redirect }) => {

  //全局前置守卫，插件形式
  app.router.beforeEach((to, from, next) => {
    console.log("插件形式的全局守卫", to)
    //next(true),next(false) 不能使用next('/yemian') 应该使用redirect
    if (to.name == "login" || to.name == "reg") {
      next()
    } else {
      // redirect('/login')
      //redirect({ name: 'login' })
      next()
    }
  })

  //后置守卫
  app.router.afterEach((to, from) => {
    console.log("插件全局后置守卫")   //退出页面时
  })

}