<script lang="ts" setup>
import VsfLoaderCircular from '../VsfLoaderCircular/VsfLoaderCircular.vue';

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <ul class="vsf-dropdown-menu" role="menu" data-testid="dropdown-menu">
    <slot v-if="loading" name="loader">
      <div class="vsf-dropdown-menu__loader" data-testid="dropdown-menu-loader">
        <VsfLoaderCircular />
      </div>
    </slot>
    <slot v-else data-testid="dropdown-menu-content" />
  </ul>
</template>
