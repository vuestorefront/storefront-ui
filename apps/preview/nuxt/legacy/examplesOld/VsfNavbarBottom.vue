<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfNavbarBottom
        :variant="variantModel"
        :absolute-position="absolutePositionModel"
        :items="itemsModel"
        :with-labels="withLabelsModel"
        :basket-dot="basketDotModel"
        :basket-counter-value="basketCounterValueModel"
        :favourites-dot="favouritesDotModel"
        :favourites-counter-value="favouritesCounterValueModel"
        @click="handleClick"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfNavbarBottom, { VsfNavbarBottomVariants } from '../../output/blocks/VsfNavbarBottom/VsfNavbarBottom.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfNavbarBottomExample',
  components: {
    Controls,
    VsfNavbarBottom,
  },
  setup() {
    const handleClick = (label) => console.log(`Clicked ${label}`);
    return {
      handleClick,
      ...prepareControls(
        [
          {
            title: 'Items',
            type: 'json',
            modelName: 'itemsModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            title: 'Variant',
            type: 'select',
            modelName: 'variantModel',
            options: Object.keys(VsfNavbarBottomVariants),
            propDefaultValue: VsfNavbarBottomVariants.primary,
            propType: 'string',
          },
          {
            title: 'Absolute position',
            type: 'boolean',
            modelName: 'absolutePositionModel',
            propDefaultValue: true,
            propType: 'boolean',
          },
          {
            title: 'With labels',
            type: 'boolean',
            modelName: 'withLabelsModel',
            propDefaultValue: true,
            propType: 'boolean',
          },
          {
            title: 'basketDot',
            type: 'boolean',
            modelName: 'basketDotModel',
            propDefaultValue: true,
            propType: 'boolean',
          },
          {
            title: 'basketCounterValue',
            type: 'text',
            modelName: 'basketCounterValueModel',
            propDefaultValue: true,
            propType: 'number',
          },
          {
            title: 'favouritesDot',
            type: 'boolean',
            modelName: 'favouritesDotModel',
            propDefaultValue: true,
            propType: 'boolean',
          },
          {
            title: 'favouritesCounterValue',
            type: 'text',
            modelName: 'favouritesCounterValueModel',
            propDefaultValue: true,
            propType: 'number',
          },
        ],
        {
          withLabelsModel: ref(true),
          variantModel: ref('primary'),
          absolutePositionModel: ref(true),
          basketDotModel: ref(false),
          basketCounterValueModel: ref(null),
          favouritesDotModel: ref(false),
          favouritesCounterValueModel: ref(null),
          itemsModel: ref([
            {
              label: 'Home',
              tag: 'link',
              icon: 'Home',
              link: '/',
            },
            {
              label: 'Products',
              tag: 'link',
              icon: 'Menu',
              link: '/products',
            },
            {
              label: 'Search',
              tag: 'button',
              icon: 'Search',
              link: '',
            },
            {
              label: 'Cart',
              tag: 'button',
              icon: 'Basket',
              link: '',
            },
            {
              label: 'Wishlist',
              tag: 'button',
              icon: 'Favorites',
              link: '',
            },
          ]),
        },
      ),
    };
  },
};
</script>
