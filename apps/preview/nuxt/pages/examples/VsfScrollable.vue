<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfScrollable v-bind="state" :draggable="draggable ? { sensitivity: 3 } : undefined">
      <div v-for="item in 4" :key="item" class="p-1">
        <div class="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{{ item }}</div>
      </div>
      <div v-for="item in 4" :key="item" data-group class="p-1">
        <div
          :class="[
            'bg-gray-300',
            direction === VsfScrollableDirection.horizontal ? 'w-[200px]' : 'w-[150px]',
            direction === VsfScrollableDirection.horizontal ? 'h-[150px]' : 'h-[200px]',
            'flex justify-center',
            'items-center',
            'focus-within:outline-2',
            'focus-within:outline',
            'outline-secondary-600',
            'flex-col',
          ]"
        >
          {{ item + 4 }}
          <button type="button">Focus Example</button>
          <button type="button">Focus Example</button>
        </div>
      </div>
      <div v-for="item in 4" :key="item" class="p-1">
        <div class="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{{ item + 8 }}</div>
      </div>
      <template v-if="ExampleCustomNav" #prev-button="{ onClick, hasPrev }">
        <button
          v-show="hasPrev"
          type="button"
          class="p-2 text-white rounded-sm bg-secondary-400"
          aria-label="Previous"
          @click="onClick"
        >
          prev
        </button>
      </template>
      <template v-if="ExampleCustomNav" #next-button="{ onClick, hasNext }">
        <button
          v-show="hasNext"
          type="button"
          class="p-2 text-white rounded-sm bg-secondary-400"
          aria-label="Next"
          @click="onClick"
        >
          next
        </button>
      </template>
    </VsfScrollable>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  VsfScrollable,
  VsfScrollableDirection,
  VsfScrollableNavigation,
  VsfScrollableScrollbar,
} from '@storefront-ui/vue/components/VsfScrollable/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfScrollableExample',
  components: {
    VsfScrollable,
    ComponentExample,
  },
  setup() {
    return {
      VsfScrollableDirection,
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'navigation',
            propType: 'VsfScrollableNavigation',
            propDefaultValue: 'block',
            options: Object.keys(VsfScrollableNavigation),
          },
          {
            type: 'select',
            modelName: 'scrollbar',
            propType: 'VsfScrollableScrollbar',
            propDefaultValue: 'hidden',
            options: Object.keys(VsfScrollableScrollbar),
            description:
              "`none` hide, `auto` hides scrollbar when content don't overflow container, `always` forces container to show scrollbar",
          },
          {
            type: 'select',
            modelName: 'direction',
            propType: 'VsfScrollableDirection',
            propDefaultValue: 'horizontal',
            options: Object.keys(VsfScrollableDirection),
            description: 'Determines whether scrollable component should be displayed vertically or horizontally',
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
          navigation: ref(VsfScrollableNavigation.block),
          direction: ref(VsfScrollableDirection.horizontal),
          scrollbar: ref(VsfScrollableScrollbar.hidden),
          scrollSnap: ref(),
          draggable: ref(),
          ExampleCustomNav: ref(),
        },
      ),
    };
  },
});
</script>
