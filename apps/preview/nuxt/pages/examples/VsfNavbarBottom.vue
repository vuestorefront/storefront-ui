<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <VsfNavbarBottom :hide-labels="hideLabels" :absolute="absolute" :filled="filled">
        <VsfNavbarBottomItem label="Home" :active="active === 'Home'" @click="onClickHandler('Home')">
          <template #icon>
            <VsfIconHome />
          </template>
        </VsfNavbarBottomItem>
        <VsfNavbarBottomItem label="Products" :active="active === 'Products'" @click="onClickHandler('Products')">
          <template #icon>
            <VsfIconMenu />
          </template>
        </VsfNavbarBottomItem>
        <VsfNavbarBottomItem label="Search" :active="active === 'Search'" @click="onClickHandler('Search')">
          <template #icon>
            <VsfIconSearch />
          </template>
        </VsfNavbarBottomItem>
        <VsfNavbarBottomItem label="Cart" :active="active === 'Cart'" @click="onClickHandler('Cart')">
          <template #icon>
            <VsfBadge bordered value="10" :class="[filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white']">
              <VsfIconBasket />
            </VsfBadge>
          </template>
        </VsfNavbarBottomItem>
        <VsfNavbarBottomItem label="Wishlist" :active="active === 'Wishlist'" @click="onClickHandler('Wishlist')">
          <template #icon>
            <VsfBadge
              dot
              bordered
              value="10"
              :class="[filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white']"
            >
              <VsfIconFavoritesOutline />
            </VsfBadge>
          </template>
        </VsfNavbarBottomItem>
      </VsfNavbarBottom>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfNavbarBottom from '@sfui/sfui/frameworks/vue/components/VsfNavbarBottom/VsfNavbarBottom.vue';
import VsfNavbarBottomItem from '@sfui/sfui/frameworks/vue/components/VsfNavbarBottom/VsfNavbarBottomItem.vue';
import VsfBadge from '@sfui/sfui/frameworks/vue/components/VsfBadge/VsfBadge.vue';
import {
  VsfIconHome,
  VsfIconBasket,
  VsfIconSearch,
  VsfIconMenu,
  VsfIconFavoritesOutline,
} from '@sfui/sfui/frameworks/vue/components/VsfIcons/index';

export default defineComponent({
  name: 'VsfNavbarBottomExample',
  components: {
    Controls,
    VsfNavbarBottom,
    VsfNavbarBottomItem,
    VsfIconHome,
    VsfIconBasket,
    VsfIconSearch,
    VsfIconMenu,
    VsfIconFavoritesOutline,
    VsfBadge,
  },
  setup() {
    const active = ref('');
    function onClickHandler(label) {
      active.value = label;
    }
    return prepareControls(
      [
        {
          type: 'boolean',
          modelName: 'filled',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'absolute',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'hideLabels',
          propType: 'boolean',
        },
      ],
      {
        hideLabels: ref(false),
        filled: ref(false),
        absolute: ref(false),
        active,
        onClickHandler,
      },
    );
  },
});
</script>
