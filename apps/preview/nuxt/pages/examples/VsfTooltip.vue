<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfTooltip />
    </div>
    <div class="e-page-controls"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VsfTooltip from "../../output/blocks/VsfTooltip/VsfTooltip.vue";

export default defineComponent({
  name: 'VsfTooltipExample',
  components: {
    VsfTooltip
  },
});
</script>
