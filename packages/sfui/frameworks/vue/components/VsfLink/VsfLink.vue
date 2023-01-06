<script lang="ts" setup>
import { computed, inject, resolveComponent, toRefs } from 'vue';
import type { ConcreteComponent, PropType, Ref, Component } from 'vue';
import type { RouteLocationRaw, _RouterLinkI } from 'vue-router';
import { VsfLinkVariant } from './types';
import { useConfigName } from '../VsfConfig';

export type RouterLinkType = _RouterLinkI;
type Tag = 'a' | ConcreteComponent | RouterLinkType;

const props = defineProps({
  link: {
    type: [String, Object] as PropType<string | RouteLocationRaw>,
    required: true,
  },
  tag: {
    type: [String, Object] as PropType<Tag>,
    default: undefined,
  },
  variant: {
    type: String as PropType<VsfLinkVariant>,
    default: VsfLinkVariant.primary,
  },
});

const { tag } = toRefs(props);

const injectTag = inject<Ref<Tag> | undefined>(useConfigName('linkTag'), undefined);
const linkTag = computed(() => {
  const NuxtLink = resolveComponent('NuxtLink');
  const RouterLink = resolveComponent('RouterLink');

  // When `NuxtLink` does not exists resolveComponent return name, if exists its object with component
  if (typeof NuxtLink === 'object') return NuxtLink;
  else if (typeof RouterLink === 'object') return RouterLink;
  else return 'a';
});

const linkTagInternal = computed(() => tag?.value || injectTag?.value || linkTag.value);
const isNuxtLink = computed(() => (linkTagInternal.value as Component)?.name === 'NuxtLink');
const isRouterLink = computed(() => (linkTagInternal.value as Component)?.name === 'RouterLink');
const isAnchor = computed(() => !isNuxtLink.value && !isRouterLink.value);
</script>

<template>
  <component
    :is="linkTagInternal"
    :class="['vsf-link', `vsf-link--${variant}`]"
    v-bind="{
      ...(isAnchor ? { href: link } : { to: link }),
    }"
    data-testid="link"
  >
    <slot />
  </component>
</template>
