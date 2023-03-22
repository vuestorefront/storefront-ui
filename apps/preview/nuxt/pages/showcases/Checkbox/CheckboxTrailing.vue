<template>
  <div className="flex justify-between">
    <label class="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900" for="checkbox">
      Label
    </label>
    <SfCheckbox id="checkbox" v-model="modelValue" value="value" class="peer" />
  </div>
</template>
<script lang="ts" setup>
import { SfCheckbox } from '@storefront-ui/vue';

import { ref } from 'vue';
const modelValue = ref([]);
</script>
