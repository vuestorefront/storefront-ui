<template>
  <div class="mt-12">
    <SfTooltip label="This is a tooltip!" :id="tooltipId">
      <span :aria-describedby="tooltipId"> Hover me! </span>
    </SfTooltip>
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue';
import { SfTooltip } from '@storefront-ui/vue';

const id = useId();
const tooltipId = `${id}-tooltip`;
</script>
