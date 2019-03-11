import Banner from './components/Banner/Banner.vue'
import BottomNavigation from './components/BottomNavigation/BottomNavigation.vue'
import Button from './components/Button/Button.vue'
import CallToAction from './components/CallToAction/CallToAction'

export default (StorefrontUI.install = function(Vue, options) {
  Vue.component('Banner', Banner)
  Vue.component('BottomNavigation', BottomNavigation)
  Vue.component('Button', Button)
  Vue.component('CallToAction', CallToAction)
})

export {
  Banner,
  BottomNavigation,
  Button,
  CallToAction
}