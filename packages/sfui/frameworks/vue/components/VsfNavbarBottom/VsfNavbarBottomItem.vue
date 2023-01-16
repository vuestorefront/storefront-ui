<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import type { PropType } from 'vue';
import { VsfLink, VsfLinkVariant } from '../VsfLink';
import type { VsfLinkTagPropType } from '../VsfLink';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: undefined,
  },
  tag: {
    type: [String, Object] as PropType<VsfLinkTagPropType | 'button'>,
    default: 'button',
  },
});
const { link, tag } = toRefs(props);
const componentTag = computed(() => {
  if (link?.value && tag.value === 'button') {
    return VsfLink;
  }
  return tag.value;
});
</script>

<template>
  <component
    :is="componentTag"
    :variant="VsfLinkVariant.none"
    v-bind="{
      role: componentTag === 'a' ? 'button' : null,
      ...(link && { link }),
    }"
    :class="['vsf-navbar-bottom-item', { 'vsf-navbar-bottom-item--active': active }]"
  >
    <span class="vsf-navbar-bottom-item__content">
      <span class="vsf-navbar-bottom-item__icon">
        <slot name="icon"></slot>
      </span>
      <span class="vsf-navbar-bottom-item__label">{{ label }}</span>
    </span>
  </component>
</template>
