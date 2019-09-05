import SfArrow from '../../src/components/atoms/SfArrow/SfArrow.vue'
import SfButton from '../../src/components/atoms/SfButton/SfButton.vue'

export default ({
  Vue,
  options, 
  router, 
  siteData 
}) => {
  Vue.component('SfArrow', SfArrow)
  Vue.component('SfButton', SfButton)
}