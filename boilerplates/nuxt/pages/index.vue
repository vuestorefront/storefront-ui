<template>
  <div>
    <SfButton />
    <SfSpinner />
  </div>
</template>

<script>
import SfButton from '../components/SfButton/SfButton.vue'
import SfSpinner from '../components/SfSpinner/SfSpinner.vue'
export default {
  name: 'IndexPage',
  setup () {
    return {
      SfSpinner
    }
  }
}
</script>
