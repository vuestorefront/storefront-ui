<template>
  <SfTooltip :id="tooltipId" label="This is a tooltip!" show-arrow placement="right" v-model="isOpen">
    <span :aria-describedby="tooltipId" tabindex="0" @focus="open" @blur="close"> Hover or focus me! </span>
  </SfTooltip>
</template>

<script setup lang="ts">
import { useId } from 'vue';
import { SfTooltip, useDisclosure } from '@storefront-ui/vue';

const id = useId();
const tooltipId = `${id}-tooltip`;
const { isOpen, open, close } = useDisclosure();
</script>
