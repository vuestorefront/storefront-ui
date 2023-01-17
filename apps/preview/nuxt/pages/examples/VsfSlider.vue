<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfSlider v-bind="state" :draggable="draggable ? { sensitivity: 3 } : undefined">
      <div v-for="item in 4" :key="item">
        <div class="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{{ item }}</div>
      </div>
      <div v-for="item in 4" :key="item">
        <div
          :class="[
            'bg-gray-300',
            direction === VsfSliderDirection.horizontal ? 'w-[200px]' : 'w-[150px]',
            direction === VsfSliderDirection.horizontal ? 'h-[150px]' : 'h-[200px]',
            'flex justify-center',
            'items-center',
          ]"
        >
          {{ item + 4 }}
        </div>
      </div>
      <div v-for="item in 4" :key="item">
        <div class="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{{ item + 8 }}</div>
      </div>
      <template v-if="ExampleCustomNav" #prev-arrow="{ onClick, hasPrev }">
        <button v-show="hasPrev" type="button" class="p-2 text-white rounded-sm bg-secondary-400" @click="onClick">
          prev
        </button>
      </template>
      <template v-if="ExampleCustomNav" #next-arrow="{ onClick, hasNext }">
        <button v-show="hasNext" type="button" class="p-2 text-white rounded-sm bg-secondary-400" @click="onClick">
          next
        </button>
      </template>
    </VsfSlider>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  VsfSlider,
  VsfSliderDirection,
  VsfSliderNavigation,
  VsfSliderScrollbar,
} from '@storefront-ui/vue/components/VsfSlider/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfSliderExample',
  components: {
    VsfSlider,
    ComponentExample,
  },
  setup() {
    return {
      VsfSliderDirection,
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'navigation',
            propType: 'VsfSliderNavigation',
            propDefaultValue: 'block',
            options: Object.keys(VsfSliderNavigation),
          },
          {
            type: 'select',
            modelName: 'scrollbar',
            propType: 'VsfSliderScrollbar',
            propDefaultValue: 'hidden',
            options: Object.keys(VsfSliderScrollbar),
            description:
              "`none` hide, `auto` hides scrollbar when content don't overflow container, `always` forces container to show scrollbar",
          },
          {
            type: 'select',
            modelName: 'direction',
            propType: 'VsfSliderDirection',
            propDefaultValue: 'horizontal',
            options: Object.keys(VsfSliderDirection),
            description: 'Determines whether slider should be displayed vertically or horizontally',
          },
          {
            type: 'boolean',
            modelName: 'scrollSnap',
            propType: 'boolean',
            description: 'Enable native scroll snapping',
          },
          {
            type: 'boolean',
            modelName: 'draggable',
            propType: 'object | undefined',
            description: 'Enable mouse drag on container',
          },
          {
            type: 'boolean',
            modelName: 'ExampleCustomNav',
            propType: '---',
            description: 'Only for demonstration purposes',
          },
        ],
        {
          navigation: ref(VsfSliderNavigation.block),
          direction: ref(VsfSliderDirection.horizontal),
          scrollbar: ref(VsfSliderScrollbar.hidden),
          scrollSnap: ref(),
          draggable: ref(),
          ExampleCustomNav: ref(),
        },
      ),
    };
  },
});
</script>
