<template>
  <div class="e-page">
    <div class="relative e-page-component">
      <VsfNavbarTop :filled="filled" :search-placeholder="searchPlaceholder" :search-value="searchValue">
        <template #logo>
          <a href="/" aria-label="VSF Homepage" :class="filled ? 'text-white' : 'text-green-600'">
            <VsfIconLogo viewBox="0 0 205 28" class="hidden large:block !w-[12.5rem] !h-[1.75rem]" />
            <VsfIconLogoSmall size="xl" viewBox="0 0 40 40" class="block large:hidden" />
          </a>
        </template>
        <template #menu>
          <VsfNavbarTopItem
            v-for="{ label, link } in menuItems"
            :key="label"
            :label="label"
            :link="link"
            :filled="filled"
          >
            <span>{{ label }}</span>
          </VsfNavbarTopItem>
        </template>
        <template #menuButton>
          <button
            class="inline-flex p-2 text-base font-medium rounded-md large:hidden"
            :class="
              filled
                ? 'text-white hover:text-white active:text-white hover:bg-green-600 active:bg-green-700'
                : 'text-gray-900 hover:bg-green-100 active:bg-green-200 hover:text-green-600 active:text-green-700'
            "
            aria-label="Menu button"
            :filled="filled"
            @click="onClickHandler('Menu')"
          >
            <VsfIconMenu />
            <span class="ml-1">Menu</span>
          </button>
        </template>
        <template #actions>
          <VsfNavbarTopItem :filled="filled" aria-label="Cart" @click="onClickHandler('Cart')">
            <VsfBadge
              dot
              bordered
              value="10"
              :class="[filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white']"
            >
              <VsfIconBasket />
            </VsfBadge>
          </VsfNavbarTopItem>
          <VsfNavbarTopItem :filled="filled" aria-label="Wishlist" badge-value="1" @click="onClickHandler('Wishlist')">
            <VsfBadge
              dot
              bordered
              value="10"
              :class="[filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white']"
            >
              <VsfIconFavoritesOutline />
            </VsfBadge>
          </VsfNavbarTopItem>
          <VsfNavbarTopItem
            :filled="filled"
            badge-value="1"
            aria-label="Log in"
            label="Log in"
            @click="onClickHandler('Login')"
          >
            <span class="flex">
              <VsfIconPerson />
              <span className="hidden ml-2 large:inline-flex whitespace-nowrap">Log in</span>
            </span>
          </VsfNavbarTopItem>
        </template>
      </VsfNavbarTop>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfNavbarTop from '@sfui/sfui/frameworks/vue/components/VsfNavbarTop/VsfNavbarTop.vue';
import VsfNavbarTopItem from '@sfui/sfui/frameworks/vue/components/VsfNavbarTop/VsfNavbarTopItem.vue';
import VsfBadge from '@sfui/sfui/frameworks/vue/components/VsfBadge/VsfBadge.vue';
import {
  VsfIconBasket,
  VsfIconFavoritesOutline,
  VsfIconPerson,
  VsfIconMenu,
  VsfIconLogo,
  VsfIconLogoSmall,
} from '@sfui/sfui/frameworks/vue/components/VsfIcons/index';

export default defineComponent({
  name: 'VsfNavbarTopExample',
  components: {
    VsfNavbarTop,
    VsfNavbarTopItem,
    VsfIconBasket,
    VsfIconFavoritesOutline,
    VsfIconPerson,
    VsfIconMenu,
    VsfIconLogo,
    VsfIconLogoSmall,
    VsfBadge,
    Controls,
  },
  setup() {
    function onClickHandler(label) {
      console.log(`${label} clicked`);
    }
    return prepareControls(
      [
        {
          type: 'boolean',
          modelName: 'filled',
          propType: 'boolean',
        },
        {
          type: 'text',
          modelName: 'searchPlaceholder',
          propType: 'string',
        },
        {
          type: 'text',
          modelName: 'searchValue',
          propType: 'string',
        },
        {
          type: 'json',
          modelName: 'menuItems',
          propType: 'Array',
          propDefaultValue: '[]',
        },
      ],
      {
        filled: ref(true),
        searchPlaceholder: ref('Search'),
        searchValue: ref(null),
        menuItems: ref([
          {
            label: 'Men',
            link: '/men',
          },
          {
            label: 'Women',
            link: '/women',
          },
          {
            label: 'Kids',
            link: '/women',
          },
        ]),
        onClickHandler,
      },
    );
  },
});
</script>
