<template>
  <div class="w-full h-full bg-neutral-50">
    <header class="flex justify-center w-full bg-white border-b h-14 md:h-20 border-neutral-200">
      <div class="flex items-center flex-row flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
        <a
          href="#"
          aria-label="SF Homepage"
          class="inline-block mr-2 md:mr-10 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
        >
          <picture>
            <source :srcset="brandLogo" media="(min-width: 1024px)" />
            <img :src="brandLogoSign" alt="Sf Logo" class="w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem]" />
          </picture>
        </a>
        <SfButton class="block mr-auto" type="button" variant="tertiary">
          <template #suffix>
            <SfIconExpandMore />
          </template>
          <span class="hidden md:inline-flex">Browse products</span>
        </SfButton>
        <nav class="flex flex-row flex-nowrap">
          <SfButton
            v-for="actionItem in actionItems"
            :key="actionItem.ariaLabel"
            class="mr-2 -ml-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
            :aria-label="actionItem.ariaLabel"
            variant="tertiary"
            square
          >
            <template #prefix>
              <Component :is="actionItem.icon" />
            </template>
            <span v-if="actionItem.role === 'login'" class="hidden md:inline-flex">{{ actionItem.label }}</span>
          </SfButton>
        </nav>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
import { SfButton, SfIconShoppingCart, SfIconFavorite, SfIconPerson, SfIconExpandMore } from '@storefront-ui/vue';
import brandLogo from '@assets/vsf_logo.svg';
import brandLogoSign from '@assets/vsf_logo_sign.svg';

const actionItems = [
  {
    icon: SfIconShoppingCart,
    ariaLabel: 'Cart',
    role: 'button',
    label: '',
  },
  {
    icon: SfIconFavorite,
    ariaLabel: 'Wishlist',
    role: 'button',
    label: '',
  },
  {
    label: 'Log in',
    icon: SfIconPerson,
    ariaLabel: 'Log in',
    role: 'login',
  },
];
</script>
