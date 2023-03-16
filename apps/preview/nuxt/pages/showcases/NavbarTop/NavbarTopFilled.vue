<template>
  <div class="w-full h-full bg-neutral-50">
    <header class="flex justify-center w-full text-white border-0 bg-primary-700 h-14 md:h-20 border-neutral-200">
      <div class="flex items-center flex-row flex-nowrap justify-between h-full max-w-[1536px] w-full px-4 md:px-10">
        <a aria-label="VSF Homepage" class="inline-block h-8 text-white md:h-10 lg:h-7 text-primary-700">
          <img :src="brandLogo" alt="VSF Logo" class="hidden large:block w-[12.5rem] h-[1.75rem]" />
          <VsfIconVuestorefront size="xl" class="hidden medium:block large:hidden" />
          <VsfIconVuestorefront size="lg" class="block medium:hidden" />
        </a>
        <VsfButton
          class="block text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body"
          type="button"
          variant="tertiary"
        >
          <template #prefix>
            <VsfIconMenu />
          </template>
          Menu
        </VsfButton>
        <nav class="flex flex-row flex-nowrap">
          <VsfButton
            v-for="actionItem in actionItems"
            :key="actionItem.ariaLabel"
            :class="[
              'mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white',
              { 'lg:hidden': actionItem.label === 'Log in' },
            ]"
            :aria-label="actionItem.ariaLabel"
            variant="tertiary"
            square
          >
            <template #prefix>
              <Component :is="actionItem.icon" />
            </template>
          </VsfButton>
          <VsfButton
            class="hidden lg:inline-flex mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            :aria-label="actionItems[2].ariaLabel"
            variant="tertiary"
          >
            <template #prefix>
              <Component :is="actionItems[2].icon" />
            </template>
            Log in
          </VsfButton>
        </nav>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
import {
  VsfIconShoppingCart,
  VsfIconFavorite,
  VsfIconPerson,
  VsfIconMenu,
  VsfIconVuestorefront,
} from '@storefront-ui/vue/components/VsfIcons/index';
import { VsfButton } from '@storefront-ui/vue/components/VsfButton/index';
import brandLogo from '@assets/vsf_logo_white.svg';

const actionItems = [
  {
    icon: VsfIconShoppingCart,
    ariaLabel: 'Cart',
  },
  {
    icon: VsfIconFavorite,
    ariaLabel: 'Wishlist',
  },
  {
    label: 'Log in',
    icon: VsfIconPerson,
    ariaLabel: 'Log in',
  },
];
</script>
