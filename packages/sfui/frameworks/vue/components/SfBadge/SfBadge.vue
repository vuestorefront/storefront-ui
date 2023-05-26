<script lang="ts" setup>
import { type PropType, computed } from 'vue';
import { SfBadgePlacement, SfBadgeVariant } from '@storefront-ui/vue';

const props = defineProps({
  content: {
    type: [String, Number],
    default: '',
  },
  max: {
    type: Number,
    default: 99,
  },
  placement: {
    type: String as PropType<`${SfBadgePlacement}`>,
    default: SfBadgePlacement['top-right'],
  },
  variant: {
    type: String as PropType<`${SfBadgeVariant}`>,
    default: SfBadgeVariant.standard,
  },
});

const isDot = computed(() => props.variant === 'dot');
const displayValue = computed(() => {
  if (isDot.value) {
    return '';
  } else if (!Number.isNaN(props.content) && Number(props.content) > props.max) {
    return `${props.max}+`;
  }
  return props.content;
});
</script>

<template>
  <span
    :class="[
      'block absolute py-0.5 px-1 bg-secondary-700 font-medium text-white text-[8px] leading-[8px] rounded-xl',
      {
        'min-w-[12px] min-h-[12px]': !isDot,
        'w-[10px] h-[10px]': isDot,
        'top-0 right-0 -translate-x-0.5 translate-y-0.5': placement === 'top-right',
        'top-0 left-0 translate-x-0.5 translate-y-0.5': placement === 'top-left',
        'bottom-0 right-0 -translate-x-0.5 -translate-y-0.5': placement === 'bottom-right',
        'bottom-0 left-0 translate-x-0.5 -translate-y-0.5': placement === 'bottom-left',
      },
    ]"
    data-testid="badge"
  >
    {{ displayValue }}
  </span>
</template>
