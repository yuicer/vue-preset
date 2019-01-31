import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**
 * 此处默认取的是在 `src/pages` 下的 vue 文件组成路由，如不需要可自行定义
 */
let modules = require.context('@/pages', true, /\.vue$/, 'lazy')
let routes = [
  {
    path: '/',
    redirect: '/home'
  }
]
modules.keys().forEach(function(v) {
  let key = v.replace(/(\.\/|\.vue)/g, '')
  routes.push({
    path: '/' + key.toLowerCase(),
    name: key,
    component: () => import(`@/pages/${key}`)
  })
})

let router = new Router({
  routes,
  mode: 'history',
  base: process.env.VUE_APP_PREFIX_PATH
})

export default router
