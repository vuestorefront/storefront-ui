<template>
  <div id="playground">
    <SfButton>
      {{ 'Add to cart' }}
    </SfButton>
  </div>
</template>

<script>
import SfButton from "../src/components/atoms/SfButton/SfButton.vue"

// Use this component to play with other components
// (such as those you have generated using `yarn run create-component`).
export default {
  components: {
    SfButton
  }
};

// Note: To serve this file run `yarn run serve`
// from the `storefront-ui/packages/vue` directory.
</script>
