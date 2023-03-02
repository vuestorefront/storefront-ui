<template>
  <VsfListItemMenu tag="label" :selected="selected">
    <template #prefix>
      <VsfCheckbox v-model="selected" value="some-value" />
    </template>
    <span>{{ label }}</span>
    <p class="text-xs text-gray-500 break-words">{{ secondaryText }}</p>
  </VsfListItemMenu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfListItemMenu } from '@storefront-ui/vue/components/VsfListItemMenu/index';
import { VsfCheckbox } from '@storefront-ui/vue/components/VsfCheckbox/index';

const label = 'Lorem ipsum dolor amet';
const secondaryText = 'Secondary text';
const selected = ref(true);
</script>
