<template>
  <div className="flex items-center">
    <SfCheckbox id="checkbox" v-model="modelValue" value="value" class-name="peer" />
    <label class="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900" for="checkbox">
      Label
    </label>
  </div>
  <div className="flex justify-between ml-8">
    <p className="text-xs mt-0.5 text-neutral-500">helpText</p>
  </div>
</template>
<script lang="ts" setup>
import { SfCheckbox } from '@storefront-ui/vue';
import { ref } from 'vue';

const modelValue = ref([]);
</script>
