<template>
  <div class="w-full h-full bg-neutral-50">
    <header class="flex justify-center w-full text-white border-0 bg-primary-700 h-14 md:h-20 border-neutral-200">
      <div class="flex items-center flex-row flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
        <a aria-label="SF Homepage" class="inline-block text-white md:h-10 lg:h-7">
          <img :src="brandLogo" alt="SF Logo" class="hidden lg:block mr-10 w-[12.5rem] h-[1.75rem]" />
          <img :src="brandLogoSign" alt="Sf Logo" class="block w-8 h-8 mr-4 md:w-10 md:h-10 lg:hidden" />
        </a>
        <SfButton
          class="block !px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body"
          type="button"
          variant="tertiary"
        >
          <template #prefix>
            <SfIconMenu />
          </template>
          <span class="hidden md:inline-flex">Categories</span>
        </SfButton>
        <nav>
          <div class="flex flex-row flex-nowrap">
            <SfButton
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
            </SfButton>
            <SfButton
              class="hidden lg:inline-flex mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              :aria-label="actionItems[2].ariaLabel"
              variant="tertiary"
            >
              <template #prefix>
                <Component :is="actionItems[2].icon" />
              </template>
              Log in
            </SfButton>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
import { SfButton, SfIconShoppingCart, SfIconFavorite, SfIconPerson, SfIconMenu } from '@storefront-ui/vue';
import brandLogo from '@assets/vsf_logo_white.svg';
import brandLogoSign from '@assets/vsf_logo_sign_white.svg';

const actionItems = [
  {
    icon: SfIconShoppingCart,
    ariaLabel: 'Cart',
  },
  {
    icon: SfIconFavorite,
    ariaLabel: 'Wishlist',
  },
  {
    label: 'Log in',
    icon: SfIconPerson,
    ariaLabel: 'Log in',
  },
];
</script>
