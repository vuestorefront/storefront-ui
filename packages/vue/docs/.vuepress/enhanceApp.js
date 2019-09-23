
import { SfArrow, SfButton, SfPagination } from '../../index'
export default ({
  Vue,
  options, 
  router, 
  siteData 
}) => {
  Vue.component('SfArrow', SfArrow)
  Vue.component('SfButton', SfButton)
  Vue.component('SfPagination', SfPagination)
}