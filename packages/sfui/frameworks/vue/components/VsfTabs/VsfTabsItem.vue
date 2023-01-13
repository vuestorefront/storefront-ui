<script lang="ts" setup>
import { inject } from 'vue';
import { key } from '../../shared/provideKey';
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

const { props, onChange } = inject(key);
</script>

<template>
  <VsfButton
    :class="['vsf-tabs-item', { 'vsf-tabs-item--active': props.modelValue === uid }]"
    :size="props.size"
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
