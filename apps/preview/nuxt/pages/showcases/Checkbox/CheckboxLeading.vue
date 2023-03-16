<template>
  <div className="flex items-center">
    <VsfCheckbox id="checkbox" v-model="modelValue" value="value" class-name="peer" />
    <label class="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900" for="checkbox">
      Label
    </label>
  </div>
</template>
<script lang="ts" setup>
import { VsfCheckbox } from '@storefront-ui/vue';
import { ref } from 'vue';

const modelValue = ref([]);
</script>
