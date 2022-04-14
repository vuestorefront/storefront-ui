<template>
  <div>
    <SfButton />
    <SfCheckbox />
    <SfCheckboxRight />
  </div>
</template>

<script>
import SfButton from '../components/SfButton/SfButton.vue'
import SfCheckbox from '../components/SfCheckbox/SfCheckbox.vue'
import SfCheckboxRight from '../components/SfCheckbox/SfCheckboxRight.vue'

export default {
  name: 'IndexPage',
  setup () {
    return {
      SfButton,
      SfCheckbox,
      SfCheckboxRight
    }
  }
}
</script>
