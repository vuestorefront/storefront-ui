<template>
  <div class="flex">
    <SfCheckbox value="value" v-model="modelValue" />
  </div>
</template>
<script lang="ts" setup>
import { SfCheckbox } from '@storefront-ui/vue';

import { ref } from 'vue';
const modelValue = ref([]);
</script>
