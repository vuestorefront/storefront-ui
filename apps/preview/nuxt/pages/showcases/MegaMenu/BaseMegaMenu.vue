<template>
  <div class="w-full h-full">
    <div v-if="isOpen" class="fixed w-screen h-screen inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />
    <header
      ref="menuRef"
      class="flex justify-center w-full border-0 bg-primary-700 border-neutral-200 h-14 md:relative md:h-20 md:z-10"
    >
      <div class="flex items-center flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
        <a href="/" aria-label="SF Homepage" class="inline-block text-white mr-2 lg:mr-10">
          <picture>
            <source :srcset="brandLogo" media="(min-width: 767px)" />
            <img :src="brandLogoSign" alt="Sf Logo" class="w-8 h-8 mr-4 md:w-[12.5rem] md:h-[1.75rem]" />
          </picture>
        </a>
        <nav class="flex w-full justify-between flex-nowrap" aria-label="SF Navigation">
          <ul>
            <li role="none">
              <SfButton
                class="block !px-2 mr-auto text-white font-body bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                type="button"
                :aria-haspopup="true"
                :aria-expanded="isOpen"
                variant="tertiary"
                @click="toggle()"
              >
                <template #suffix>
                  <SfIconChevronRight class="hidden rotate-90 md:inline-flex" />
                  <SfIconMenu class="inline-flex md:hidden" />
                </template>
                <span class="hidden md:inline-flex">Browse products</span>
              </SfButton>
              <transition
                enter-active-class="transform transition duration-500 ease-in-out"
                leave-active-class="transform transition duration-500 ease-in-out"
                enter-from-class="-translate-x-full md:translate-x-0 md:opacity-0"
                enter-to-class="translate-x-0 md:translate-x-0 md:opacity-100"
                leave-from-class="translate-x-0 md:opacity-100"
                leave-to-class="-translate-x-full md:translate-x-0 md:opacity-0"
              >
                <SfDrawer
                  v-model="isOpen"
                  disable-click-away
                  placement="top"
                  class="grid grid-cols-1 gap-6 md:grid-cols-4 bg-white max-w-xs shadow-lg p-0 !fixed max-h-screen overflow-y-auto md:!absolute md:!top-[5rem] md:max-w-full md:p-8"
                >
                  <div class="flex items-center justify-between py-2 px-4 bg-primary-700 md:hidden">
                    <div class="flex items-center typography-text-lg font-medium text-white">Browse products</div>
                    <SfButton
                      square
                      variant="tertiary"
                      aria-label="Close navigation menu"
                      class="text-white"
                      @click="close()"
                    >
                      <SfIconClose />
                    </SfButton>
                  </div>
                  <div v-for="{ heading, items } in categoriesContent" :key="heading">
                    <h2
                      role="presentation"
                      class="typography-text-xs font-bold text-neutral-900 tracking-widest whitespace-nowrap px-4 py-2"
                    >
                      {{ heading }}
                    </h2>
                    <hr class="mb-3.5" />
                    <ul>
                      <SfListItem v-for="item in items" :key="item.title" size="sm" role="none">
                        <a
                          class="focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                          :href="item.link"
                        >
                          {{ item.title }}
                        </a>
                      </SfListItem>
                    </ul>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center bg-neutral-100 rounded-md border-neutral-300 overflow-hidden grow"
                  >
                    <img :src="bannerDetails.image" :alt="bannerDetails.title" class="object-contain" />
                    <p class="mb-4 mt-4 px-4 text-center typography-text-base font-medium">{{ bannerDetails.title }}</p>
                  </div>
                  <SfButton
                    square
                    size="sm"
                    variant="tertiary"
                    aria-label="Close navigation menu"
                    class="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    @click="close()"
                  >
                    <SfIconClose class="text-neutral-500" />
                  </SfButton>
                </SfDrawer>
              </transition>
            </li>
          </ul>
          <div>
            <SfButton
              v-for="actionItem in actionItems"
              :key="actionItem.ariaLabel"
              class="mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              :aria-label="actionItem.ariaLabel"
              variant="tertiary"
              square
            >
              <template #prefix>
                <Component :is="actionItem.icon" />
              </template>
              <span v-if="actionItem.role === 'login'" class="hidden md:inline-flex">{{ actionItem.label }}</span>
            </SfButton>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
import {
  SfButton,
  SfDrawer,
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconMenu,
  SfIconClose,
  SfIconChevronRight,
  SfListItem,
  useDisclosure,
} from '@storefront-ui/vue';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import brandLogo from '@assets/vsf_logo_white.svg';
import brandLogoSign from '@assets/vsf_logo_sign_white.svg';
import watch from '@assets/watch.png';

const { isOpen, toggle, close } = useDisclosure();
const menuRef = ref();

onClickOutside(menuRef, () => {
  close();
});

const actionItems = [
  {
    icon: SfIconShoppingCart,
    label: '',
    ariaLabel: 'Cart',
    role: 'button',
  },
  {
    icon: SfIconFavorite,
    label: '',
    ariaLabel: 'Wishlist',
    role: 'button',
  },
  {
    icon: SfIconPerson,
    label: 'Log in',
    ariaLabel: 'Log in',
    role: 'login',
  },
];
const bannerDetails = {
  image: watch,
  title: 'New in desiger watches.',
};

const categoriesContent = [
  {
    heading: 'Activities',
    items: [
      {
        title: 'Fitness',
        link: '/',
      },
      {
        title: 'Pilates',
        link: '/',
      },
      {
        title: 'Training',
        link: '/',
      },
      {
        title: 'Cardio workout',
        link: '/',
      },
      {
        title: 'Yoga',
        link: '/',
      },
      {
        title: 'All activities',
        link: '/',
      },
    ],
  },
  {
    heading: 'Categories',
    items: [
      {
        title: 'Clothing',
        link: '/',
      },
      {
        title: 'Shoes',
        link: '/',
      },
      {
        title: 'Accessories',
        link: '/',
      },
      {
        title: 'Wearables',
        link: '/',
      },
      {
        title: 'Food & Drinks',
        link: '/',
      },
      {
        title: 'All categories',
        link: '/',
      },
    ],
  },
  {
    heading: 'Womens Deals',
    items: [
      {
        title: 'Fitness Gear',
        link: '/',
      },
      {
        title: 'Outlet',
        link: '/',
      },
      {
        title: 'All Womens Deals',
        link: '/',
      },
    ],
  },
];
</script>
