<template>
  <div class="mt-12">
    <SfTooltip :id="tooltipId" label="This is a tooltip!">
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
