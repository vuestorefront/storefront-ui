<template>
  <VsfListItemMenu
    v-for="({ name, cost, date }, index) in deliveryOptions"
    :key="index"
    tag="label"
    class="!items-start max-w-sm border rounded-md border-neutral-200 first-of-type:mr-4 first-of-type:mb-4"
  >
    {{ name }}
    <span className="text-xs text-gray-500 break-words">{{ date }}</span>
    <template #prefix>
      <VsfRadio v-model="radioModel" :value="name" name="delivery-options" />
    </template>
    <template #suffix>
      <span className="text-gray-900">{{ cost }}</span>
    </template>
  </VsfListItemMenu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfRadio } from '@storefront-ui/vue/components/VsfRadio/index';
import { VsfListItemMenu } from '@storefront-ui/vue/components/VsfListItemMenu/index';
const deliveryOptions = [
  {
    name: 'Standard',
    cost: 'Free',
    date: 'Thursday, September 15',
  },
  {
    name: 'Express',
    cost: '$5.00',
    date: 'Tomorrow, September 12',
  },
];
const radioModel = ref('');
</script>
