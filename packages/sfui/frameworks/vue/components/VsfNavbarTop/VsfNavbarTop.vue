<script lang="ts" setup>
import VsfSearch from '../VsfSearch/VsfSearch.vue';

defineProps({
  filled: {
    type: Boolean,
    default: true,
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
});
</script>
<template>
  <header
    class="vsf-navbar-top"
    :class="{
      'vsf-navbar-top--branded': filled,
    }"
  >
    <slot name="logo" />
    <slot name="navigation">
      <div class="vsf-navbar-top__menu-wrapper">
        <nav>
          <ul class="vsf-navbar-top__menu">
            <slot name="menu" />
          </ul>
          <slot name="menuButton" />
        </nav>
      </div>
    </slot>
    <slot name="search">
      <VsfSearch class="vsf-navbar-top__search" :placeholder="searchPlaceholder" :model-value="searchValue" />
    </slot>
    <ul class="vsf-navbar-top__actions">
      <slot name="actions" />
    </ul>
  </header>
</template>
