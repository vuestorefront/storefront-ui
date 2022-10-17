<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfNavbarTopVariants } from './types';
import VsfSearch from '../VsfSearch/VsfSearch.vue';

defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
  variant: {
    type: String as PropType<VsfNavbarTopVariants>,
    default: VsfNavbarTopVariants.default,
  },
  searchDisabled: {
    type: Boolean,
    default: false,
  },
  searchPlaceholder: {
    type: String,
    default: 'Search',
  },
  searchValue: {
    type: String,
    default: '',
  },
  searchAutocomplete: {
    type: String,
    default: 'off',
  },
});
</script>
<template>
  <header
    class="vsf-navbar-top"
    :class="{
      'vsf-navbar-top--branded': variant === VsfNavbarTopVariants.branded,
    }"
  >
    <slot name="logo" />
    <div class="vsf-navbar-top__menu-wrapper">
      <nav>
        <ul class="vsf-navbar-top__menu">
          <slot name="menu" />
        </ul>
        <ul>
          <slot name="menuButton" />
        </ul>
      </nav>
    </div>
    <slot name="search">
      <VsfSearch
        class="hidden w-full small:block justify-self-end medium:ml-10"
        :placeholder="searchPlaceholder"
        :search-autocomplete="searchAutocomplete"
        :model-value="searchValue"
      />
    </slot>
    <ul class="vsf-navbar-top__actions">
      <slot name="actions" />
    </ul>
  </header>
</template>
