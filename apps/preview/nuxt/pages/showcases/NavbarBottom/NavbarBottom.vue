<template>
  <nav className="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch bg-white text-primary-700">
    <VsfButton
      v-for="item in items"
      :key="item.label"
      variant="tertiary"
      :class="[
        'py-1 flex flex-col h-full w-full rounded-none hover:text-primary-800 hover:bg-primary-100 active:text-primary-900 active:bg-primary-200',
        { 'text-primary-900 bg-primary-200': selectedItem === item.label },
      ]"
      @click="onClickHandler(item.label)"
    >
      <template #prefix>
        <Component :is="item.icon" />
      </template>
      {{ item.label }}
    </VsfButton>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {
  VsfButton,
  VsfIconHome,
  VsfIconMenu,
  VsfIconSearch,
  VsfIconShoppingCart,
  VsfIconFavorite,
} from '@storefront-ui/vue';

const items = [
  {
    label: 'Home',
    icon: VsfIconHome,
  },
  {
    label: 'Products',
    icon: VsfIconMenu,
  },
  {
    label: 'Search',
    icon: VsfIconSearch,
  },
  {
    label: 'Cart',
    icon: VsfIconShoppingCart,
  },
  {
    label: 'Wishlist',
    icon: VsfIconFavorite,
  },
];
const selectedItem = ref('');
function onClickHandler(itemLabel: string) {
  selectedItem.value = itemLabel;
}
</script>
