# site

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
路由守卫

前置
  依赖中间件
    在nuxt.config中配置全局守卫 指向middleware （在router里配置middleware）
    layouts定义中间件
  
  组件独享
    middleware 生命周期

  插件形式的全局后置守卫

后置
  使用vue的beforeRouteLeave钩子
  插件全局后置守卫

