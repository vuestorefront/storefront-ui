<script lang="ts" setup>
import { ref } from 'vue';
import VsfLoaderCircular from '../VsfLoaderCircular/VsfLoaderCircular.vue';

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const dropdownMenuRef = ref();
</script>

<template>
  <ul ref="dropdownMenuRef" class="vsf-dropdown-menu" role="menu" data-testid="dropdown-menu">
    <slot v-if="loading" name="loader">
      <div class="vsf-dropdown-menu__loader" data-testid="dropdown-menu-loader">
        <VsfLoaderCircular />
      </div>
    </slot>
    <slot v-else data-testid="dropdown-menu-content" />
  </ul>
</template>
