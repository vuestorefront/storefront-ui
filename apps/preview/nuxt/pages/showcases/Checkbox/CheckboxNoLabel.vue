<template>
  <div className="flex">
    <VsfCheckbox v-model="modelValue" value="value" />
  </div>
</template>
<script lang="ts" setup>
import { VsfCheckbox } from '@storefront-ui/vue';

import { ref } from 'vue';
const modelValue = ref([]);
</script>
