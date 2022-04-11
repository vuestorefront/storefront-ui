<template>
  <div>
    Hello nuxt
    <SfDivider />
    <SfButton />
  </div>
</template>

<script>
import SfButton from '../components/SfButton/SfButton.vue';
import SfDivider from '../components/SfDivider/SfDivider.vue';
export default {
  name: 'IndexPage',
  components: {
    SfDivider,
    SfButton
  },
  setup () {
    return {
      SfButton
    }
  }
}
</script>
