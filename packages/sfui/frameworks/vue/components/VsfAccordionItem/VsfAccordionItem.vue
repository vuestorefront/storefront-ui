<script lang="ts" setup>
import { ClassProp } from '../../shared/props';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  summaryClass: ClassProp,
});
defineEmits<{
  (event: 'update:modelValue', open: boolean): void;
}>();
</script>

<template>
  <details :open="modelValue" data-testid="accordion-item">
    <summary
      :class="[summaryClass, 'list-none [&::-webkit-details-marker]:hidden cursor-pointer']"
      @click.prevent="$emit('update:modelValue', !modelValue)"
    >
      <slot name="summary" />
    </summary>
    <slot />
  </details>
</template>
