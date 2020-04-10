import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b8f92826 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _3d6acf96 = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _48532ca9 = () => interopDefault(import('../pages/Error.vue' /* webpackChunkName: "pages/Error" */))
const _63969cec = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _f9ba96fc = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _a9090460 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))
const _5c992f1d = () => interopDefault(import('../pages/Static.vue' /* webpackChunkName: "pages/Static" */))
const _4065447f = () => interopDefault(import('../pages/Storybook.vue' /* webpackChunkName: "pages/Storybook" */))
const _5be98044 = () => interopDefault(import('../pages/ThankYou.vue' /* webpackChunkName: "pages/ThankYou" */))
const _e5ca22da = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _b8f92826,
    name: "Category"
  }, {
    path: "/Checkout",
    component: _3d6acf96,
    name: "Checkout"
  }, {
    path: "/Error",
    component: _48532ca9,
    name: "Error"
  }, {
    path: "/Login",
    component: _63969cec,
    name: "Login"
  }, {
    path: "/MyAccount",
    component: _f9ba96fc,
    name: "MyAccount"
  }, {
    path: "/Product",
    component: _a9090460,
    name: "Product"
  }, {
    path: "/Static",
    component: _5c992f1d,
    name: "Static"
  }, {
    path: "/Storybook",
    component: _4065447f,
    name: "Storybook"
  }, {
    path: "/ThankYou",
    component: _5be98044,
    name: "ThankYou"
  }, {
    path: "/",
    component: _e5ca22da,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
