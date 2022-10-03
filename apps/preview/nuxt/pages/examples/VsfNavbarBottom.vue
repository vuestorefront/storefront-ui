<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <VsfNavbarBottom :hide-labels="hideLabelsModel" :absolute="absoluteModel" :filled="filledModel">
        <VsfNavbarBottomItem
          v-for="item in items"
          :key="item.label"
          :label="item.label"
          :active="activeModel === item.label"
          :badge="badgeModel"
          :dot-badge="dotBadgeModel"
          @click="onClickHandler(item.label)"
        >
          <template #icon>
            <component :is="item.icon"></component>
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
  },
  setup() {
    const activeModel = ref('');
    function onClickHandler(label) {
      activeModel.value = label;
    }
    return prepareControls(
      [
        {
          title: 'Filled',
          type: 'boolean',
          modelName: 'filledModel',
          propType: 'boolean',
        },
        {
          title: 'Absolute',
          type: 'boolean',
          modelName: 'absoluteModel',
          propType: 'boolean',
        },
        {
          title: 'Hide labels',
          type: 'boolean',
          modelName: 'hideLabelsModel',
          propType: 'boolean',
        },
        {
          title: 'Badge',
          type: 'text',
          modelName: 'badgeModel',
          propType: 'text',
        },
        {
          title: 'Dot Badge',
          type: 'boolean',
          modelName: 'dotBadgeModel',
          propType: 'boolean',
        },
      ],
      {
        hideLabelsModel: ref(false),
        filledModel: ref(false),
        absoluteModel: ref(false),
        activeModel,
        badgeModel: ref(''),
        dotBadgeModel: ref(false),
        onClickHandler,
        items: [
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
            icon: VsfIconBasket,
          },
          {
            label: 'Wishlist',
            icon: VsfIconFavoritesOutline,
          },
        ],
      },
    );
  },
});
</script>
