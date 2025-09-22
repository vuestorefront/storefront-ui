<script lang="ts" setup>
import { ClassProp, twMerge } from '@storefront-ui/vue';
import { type HTMLAttributes, type PropType } from 'vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  summaryClass: ClassProp,
  summaryAttrs: {
    type: Object as PropType<HTMLAttributes>,
    default: () => ({}),
  },
});

defineEmits<{
  (event: 'update:modelValue', open: boolean): void;
}>();
</script>

<!-- eslint-disable vuejs-accessibility/no-static-element-interactions -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <details :open="modelValue" data-testid="accordion-item">
    <summary
      v-bind="summaryAttrs"
      :class="
        twMerge(
          summaryClass,
          'list-none [&::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
        )
      "
      @click.prevent="$emit('update:modelValue', !modelValue)"
    >
      <slot name="summary" />
    </summary>
    <slot />
  </details>
</template>
