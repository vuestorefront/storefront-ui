<script lang="ts" setup>
import { inject } from 'vue';
import { VsfTabsInjectionKey } from './types';
import VsfButton from '../VsfButton/VsfButton.vue';
import { VsfButtonVariants } from '../VsfButton/index';

defineProps({
  uid: {
    type: [Number, String, Symbol],
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const injectedValue = inject(VsfTabsInjectionKey);

if (!injectedValue) throw new Error('VsfTabsItem :: should be always used within VsfTabs');

const { props: TabsProps, onChange } = injectedValue;
</script>

<template>
  <VsfButton
    :class="['vsf-tabs-item', { 'vsf-tabs-item--active': TabsProps.modelValue === uid }]"
    :size="TabsProps.size"
    :variant="VsfButtonVariants.tertiary"
    :disabled="disabled"
    data-testid="tabs-item"
    role="tab"
    @click="onChange(uid)"
  >
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template v-if="$slots.default" #default>
      <slot />
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix" />
    </template>
  </VsfButton>
</template>
