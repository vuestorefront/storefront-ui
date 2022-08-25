<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfDivider />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VsfDivider from '../../output/blocks/VsfDivider/VsfDivider.vue'

export default defineComponent({
  name: 'VsfDividerExample',
  components: {
    VsfDivider
  }
});
</script>
