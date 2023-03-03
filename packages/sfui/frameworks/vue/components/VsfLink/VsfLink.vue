<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import type { PropType, ConcreteComponent } from 'vue';

import { VsfLinkVariant } from './types';

const props = defineProps({
  tag: {
    type: [String, Object] as PropType<string | ConcreteComponent>,
    default: 'a',
  },
  variant: {
    type: String as PropType<`${VsfLinkVariant}`>,
    default: VsfLinkVariant.primary,
  },
});

const { tag, variant } = toRefs(props);

const variantClasses = computed(() => {
  switch (variant.value) {
    case VsfLinkVariant.secondary:
      return 'text-neutral-900 underline hover:text-primary-700 active:text-primary-800 visited:text-primary-800';
    case VsfLinkVariant.primary:
    default:
      return 'text-primary-700 hover:underline active:text-primary-800 active:underline visited:text-primary-800 visited:underline';
  }
});
</script>

<template>
  <component :is="tag" :class="variantClasses" data-testid="link">
    <slot />
  </component>
</template>
