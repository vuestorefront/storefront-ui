<template>
  <div>
    Hello nuxt
    <SfDivider />
    <SfCheckbox name="checkbox" />
    <SfCheckboxRight name="checkbox" />
  </div>
</template>

<script>
import SfDivider from '../components/SfDivider/SfDivider.vue'
import SfCheckbox from '../components/SfCheckbox/SfCheckbox.vue'
import SfCheckboxRight from '../components/SfCheckbox/SfCheckboxRight.vue'

export default {
  name: 'IndexPage',
  components: {
    SfDivider,
    SfCheckbox,
    SfCheckboxRight
  }
}
</script>
