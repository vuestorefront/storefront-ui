<template>
  <SfTooltip label="This is a tooltip!" :id="tooltipId" v-model="isOpen" show-arrow placement="right">
    <span :aria-describedby="tooltipId" @focus="open" @blur="close" tabindex="0"> Hover or focus me! </span>
  </SfTooltip>
</template>

<script setup lang="ts">
import { useId } from 'vue';
import { SfTooltip, useDisclosure } from '@storefront-ui/vue';

const id = useId();
const tooltipId = `${id}-tooltip`;
const { isOpen, open, close } = useDisclosure();
</script>
