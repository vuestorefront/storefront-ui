<script>
// ugly workaround, should fix it later
import Vue from 'vue'
import SfButton from '../../../src/components/atoms/SfButton/SfButton.vue'

// load components only on csr
if (window !== 'undefined' && !window.componentsRegistered) {
  Vue.component('SfButton', SfButton)
  window.componentsRegistered = true
}

export default {
  render () {
    return null
  }
}
</script>