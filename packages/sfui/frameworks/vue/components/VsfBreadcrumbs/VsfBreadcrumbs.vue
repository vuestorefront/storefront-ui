<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue';
import { VsfIconHome, VsfIconMoreHorizontal, VsfIconSize } from '../VsfIcons';
import type { VsfBreadcrumbType, VsfBreadcrumbHomeType } from './types';
import type { TagOrComponent } from '../../shared/types';

const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<VsfBreadcrumbType[]>,
    default: () => [],
  },
  withIcon: {
    type: Boolean,
    default: false,
  },
  homeItem: {
    type: Object as PropType<VsfBreadcrumbHomeType>,
    default: () => ({
      bindings: {
        href: '/',
      },
    }),
  },
});

const { breadcrumbs } = toRefs(props);

/* TODO: use css-variable when tokens migrated */
const padding = 40;

const navRef = ref<HTMLElement>();
const dropdownRef = ref<HTMLElement>();

const dropdownOpened = ref(false);
const newWindowWidth = ref(0);
const dropdownLength = ref(0);
const visibleBreadcrumbs = computed(() => breadcrumbs.value.slice(0, breadcrumbs.value.length - dropdownLength.value));
const drpodownBreadcrumbs = computed(() =>
  breadcrumbs.value.slice(breadcrumbs.value.length - dropdownLength.value, breadcrumbs.value.length),
);

const handleButtonClick = (): void => {
  dropdownOpened.value = !dropdownOpened.value;
};
const onWindowResize = (): void => {
  newWindowWidth.value = window.innerWidth;
};
const linkTag = (tag: TagOrComponent | undefined) => tag ?? 'a';

// TODO: use click outside
onMounted(() => {
  onWindowResize();
  window.addEventListener('resize', onWindowResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
});

watch(
  [newWindowWidth, () => props.breadcrumbs] as const,
  ([newWindowWidth]) => {
    if (!newWindowWidth) return;
    const breadcrumbsWidthVal = navRef.value?.offsetWidth || 0;
    const firstElementWidth = navRef.value?.children[0]?.children[1]?.clientWidth || 0;
    const offsetLeftVal = navRef.value?.offsetLeft || 0;
    if (newWindowWidth <= breadcrumbsWidthVal + padding + offsetLeftVal) {
      dropdownLength.value = dropdownLength.value += 1;
    }
    if (newWindowWidth - padding > breadcrumbsWidthVal + firstElementWidth + padding + offsetLeftVal) {
      dropdownLength.value = dropdownLength.value <= 0 ? 0 : dropdownLength.value - 1;
    }
  },
  { immediate: true },
);
</script>

<template>
  <nav ref="navRef" class="vsf-breadcrumbs">
    <ol class="vsf-breadcrumbs__ol">
      <li class="vsf-breadcrumbs__item">
        <template v-if="dropdownLength">
          <button
            class="vsf-breadcrumbs__dropdown-button peer"
            aria-label="Show previous categories"
            @click.stop="handleButtonClick()"
          >
            <VsfIconMoreHorizontal :size="VsfIconSize.sm" class="vsf-breadcrumbs__item-button-icon" />
          </button>
          <ul v-if="dropdownOpened" ref="dropdownRef" class="vsf-breadcrumbs__dropdown-list">
            <li
              v-for="(item, index) in drpodownBreadcrumbs"
              :key="index"
              class="vsf-breadcrumbs__dropdown-list-item"
              :aria-label="item.name"
            >
              <component
                :is="linkTag(item.linkTag)"
                v-if="index < dropdownLength"
                v-bind="item.bindings"
                class="vsf-breadcrumbs__dropdown-list-button"
                >{{ item.name }}</component
              >
            </li>
          </ul>
        </template>
      </li>
      <li v-if="!dropdownLength && withIcon" aria-label="Home" class="vsf-breadcrumbs__item">
        <component
          :is="linkTag(homeItem.linkTag)"
          v-bind="homeItem.bindings"
          class="vsf-breadcrumbs__item-button--home"
        >
          <slot name="homeButtonIcon" />
          <span v-if="!$slots.icon" class="vsf-breadcrumbs__item-button-icon--home">
            <VsfIconHome :size="VsfIconSize.sm" />
          </span>
        </component>
      </li>
      <li
        v-for="(item, index) in visibleBreadcrumbs"
        :key="index"
        class="vsf-breadcrumbs__item"
        :aria-label="item.name"
      >
        <component :is="linkTag(item.linkTag)" v-bind="item.bindings" class="vsf-breadcrumbs__item-button">{{
          item.name
        }}</component>
      </li>
    </ol>
  </nav>
</template>
