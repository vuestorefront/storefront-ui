<template>
  <div className="flex justify-between">
    <label class="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900" for="checkbox">
      Label
    </label>
    <VsfCheckbox id="checkbox" v-model="modelValue" value="value" class="peer" />
  </div>
</template>
<script lang="ts" setup>
import { VsfCheckbox } from '@storefront-ui/vue/components/VsfCheckbox/index';
import { ref } from 'vue';
const modelValue = ref([]);
</script>
