<script lang="ts">
const variantClasses = {
  [SfLinkVariant.primary]:
    'text-secondary-700 hover:text-secondary-800 active:text-secondary-700',
  [SfLinkVariant.secondary]:
    'text-neutral-700 hover:text-neutral-800 active:text-neutral-700',
};
</script>

<script lang="ts" setup>
import type { PropType, ConcreteComponent } from 'vue';
import { SfLinkVariant, twMerge, useTwMergeRoot } from '@storefront-ui/vue';

defineProps({
  tag: {
    type: [String, Object] as PropType<string | ConcreteComponent>,
    default: 'a',
  },
  variant: {
    type: String as PropType<`${SfLinkVariant}`>,
    default: SfLinkVariant.primary,
  },
});
defineOptions({
  inheritAttrs: false,
});
const { attrsWithoutClass } = useTwMergeRoot();
</script>

<template>
  <component
    :is="tag"
    :class="
      twMerge(
        'focus-visible:outline focus-visible:outline-offset focus-visible:rounded-xs underline hover:no-underline',
        variantClasses[variant],
        $attrs.class,
      )
    "
    data-testid="link"
    v-bind="attrsWithoutClass"
  >
    <slot />
  </component>
</template>
