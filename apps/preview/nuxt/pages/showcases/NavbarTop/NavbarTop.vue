<template>
  <div class="w-full h-full bg-neutral-50">
    <header class="flex justify-center w-full bg-white border-b h-14 md:h-20 border-neutral-200">
      <div class="flex items-center flex-row flex-nowrap justify-between h-full max-w-[1536px] w-full px-4 md:px-10">
        <a aria-label="VSF Homepage" class="inline-block h-8 md:h-10 lg:h-7 text-primary-700">
          <img :src="brandLogo" alt="VSF Logo" class="hidden lg:block w-[12.5rem] h-[1.75rem]" />
          <VsfIconVuestorefront size="xl" class="hidden md:block lg:hidden" />
          <VsfIconVuestorefront size="lg" class="block md:hidden" />
        </a>
        <VsfButton class="block" type="button" variant="tertiary">
          <template #prefix>
            <VsfIconMenu />
          </template>
          Menu
        </VsfButton>
        <nav class="flex flex-row flex-nowrap">
          <div>
            <VsfButton
              v-for="actionItem in actionItems"
              :key="actionItem.ariaLabel"
              :class="[
                'mr-2 -ml-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700',
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
              class="hidden lg:inline-flex mr-2 -ml-0.5 text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
              :aria-label="actionItems[2].ariaLabel"
              variant="tertiary"
            >
              <template #prefix>
                <Component :is="actionItems[2].icon" />
              </template>
              Log in
            </VsfButton>
          </div>
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
import brandLogo from '@assets/vsf_logo.svg';

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
