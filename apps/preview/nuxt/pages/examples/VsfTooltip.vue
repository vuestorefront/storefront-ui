<template>
  <div class="e-page">
    <div class="e-page-component pt-12">
      <VsfTooltip label="Tooltip" type="left">
        <button class="p-4 font-semibold text-sm bg-primary-600 text-white rounded-none shadow-sm uppercase">hover me</button>
      </VsfTooltip>
    </div>
    <div class="e-page-controls"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VsfTooltip from '../../output/blocks/VsfTooltip/VsfTooltip.vue';

export default defineComponent({
  name: 'VsfTooltipExample',
  components: {
    VsfTooltip,
  },
});
</script>
