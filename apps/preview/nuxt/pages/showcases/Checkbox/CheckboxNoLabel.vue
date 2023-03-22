<template>
  <div className="flex">
    <SfCheckbox v-model="modelValue" value="value" />
  </div>
</template>
<script lang="ts" setup>
import { SfCheckbox } from '@storefront-ui/vue';

import { ref } from 'vue';
const modelValue = ref([]);
</script>
