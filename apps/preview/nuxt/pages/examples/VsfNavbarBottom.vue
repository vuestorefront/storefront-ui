<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div class="m-10 relative border border-primary-400 h-20">
      <p>Render in this container when <code>absolute=true</code></p>
      <VsfNavbarBottom v-bind="state">
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
        <VsfNavbarBottomItem
          :link="link"
          label="Search"
          :active="active === 'Search'"
          @click="onClickHandler('Search')"
        >
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
  </ComponentExample>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { VsfNavbarBottom, VsfNavbarBottomItem } from '@storefront-ui/vue/components/VsfNavbarBottom/index';
import VsfBadge from '@storefront-ui/vue/components/VsfBadge/VsfBadge.vue';
import {
  VsfIconHome,
  VsfIconBasket,
  VsfIconSearch,
  VsfIconMenu,
  VsfIconFavoritesOutline,
} from '@storefront-ui/vue/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfNavbarBottomExample',
  components: {
    ComponentExample,
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
        {
          type: 'text',
          modelName: 'link',
          propType: 'string',
          description:
            'When provided, will render as "anchor" element. Link of VsfNavbarBottomItem for search button only, rest shows active state possibility',
        },
      ],
      {
        hideLabels: ref(),
        filled: ref(),
        absolute: ref(),
        link: ref(),
        active,
        onClickHandler,
      },
    );
  },
});
</script>
