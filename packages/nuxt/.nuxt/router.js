import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0cfe0b1c = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages_Category" */))
const _3c7c3925 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages_Login" */))
const _b400eaaa = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages_Product" */))
const _093b13a4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _0cfe0b1c,
    name: "Category"
  }, {
    path: "/Login",
    component: _3c7c3925,
    name: "Login"
  }, {
    path: "/Product",
    component: _b400eaaa,
    name: "Product"
  }, {
    path: "/",
    component: _093b13a4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
