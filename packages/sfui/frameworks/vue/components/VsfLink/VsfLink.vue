<script lang="ts">
const variantClasses = {
  [VsfLinkVariant.primary]:
    'text-primary-700 underline hover:text-primary-800 active:text-primary-900 visited:text-primary-900',
  [VsfLinkVariant.secondary]: 'underline hover:text-primary-800 active:text-primary-900 visited:text-primary-900',
};
</script>

<script lang="ts" setup>
import type { PropType, ConcreteComponent } from 'vue';
import { VsfLinkVariant } from '@storefront-ui/vue';

defineProps({
  tag: {
    type: [String, Object] as PropType<string | ConcreteComponent>,
    default: 'a',
  },
  variant: {
    type: String as PropType<`${VsfLinkVariant}`>,
    default: VsfLinkVariant.primary,
  },
});
</script>

<template>
  <component :is="tag" :class="variantClasses[variant]" data-testid="link">
    <slot />
  </component>
</template>
