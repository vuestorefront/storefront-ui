<template>
  <nav className="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch">
    <SfButton
      v-for="item in items"
      :key="item.label"
      variant="tertiary"
      :class="[
        'py-1 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900',
        { 'text-white bg-primary-900': selectedItem === item.label },
      ]"
      @click="onClickHandler(item.label)"
    >
      <template #prefix>
        <Component :is="item.icon" />
      </template>
      {{ item.label }}
    </SfButton>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { SfButton, SfIconHome, SfIconMenu, SfIconSearch, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/vue';

const items = [
  {
    label: 'Home',
    icon: SfIconHome,
  },
  {
    label: 'Products',
    icon: SfIconMenu,
  },
  {
    label: 'Search',
    icon: SfIconSearch,
  },
  {
    label: 'Cart',
    icon: SfIconShoppingCart,
  },
  {
    label: 'Wishlist',
    icon: SfIconFavorite,
  },
];
const selectedItem = ref('');
function onClickHandler(itemLabel: string) {
  selectedItem.value = itemLabel;
}
</script>
