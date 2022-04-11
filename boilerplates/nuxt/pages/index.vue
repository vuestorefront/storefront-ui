<template>
  <div>
    <SfSpinner />
    <SfDivider />
    <SfButton />
  </div>
</template>

<script>
import SfSpinner from '../components/SfSpinner/SfSpinner.vue'
import SfButton from '../components/SfButton/SfButton.vue';
import SfDivider from '../components/SfDivider/SfDivider.vue';
export default {
  name: 'IndexPage',
  components: {
    SfDivider,
    SfButton,
    SfSpinner
  }
}
</script>
