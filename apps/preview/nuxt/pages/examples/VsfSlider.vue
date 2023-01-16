<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfSlider
      v-bind="state"
      :key="componentKey"
      :draggable="
        draggable
          ? {
              sensitivity: 3,
            }
          : undefined
      "
    >
      <div v-for="item in 4" :key="item">
        <div class="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{{ item }}</div>
      </div>
      <div v-for="item in 4" :key="item">
        <div class="bg-gray-300 w-[200px] h-[150px] flex justify-center items-center">{{ item + 4 }}</div>
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
import { defineComponent, ref, watch } from 'vue';
import { VsfSlider, VsfSliderNavigation, VsfSliderScrollbar } from '@storefront-ui/vue/components/VsfSlider/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfSliderExample',
  components: {
    VsfSlider,
    ComponentExample,
  },
  setup() {
    const draggable = ref(false);
    const componentKey = ref(0);
    watch(draggable, () => {
      // rerender component - 'draggable' prop is not reactive, as it should be declared only once per component
      componentKey.value = componentKey.value + 1;
    });
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'navigation',
            propType: 'VsfSliderNavigation',
            options: ['', ...Object.keys(VsfSliderNavigation)],
          },
          {
            type: 'select',
            modelName: 'scrollbar',
            propType: 'VsfSliderScrollbar',
            options: ['', ...Object.keys(VsfSliderScrollbar)],
            description:
              "`auto` hides scrollbar when content don't overflow container, `always` forces container to show scrollbar",
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
            propType: 'object',
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
          navigation: ref(undefined),
          scrollbar: ref(undefined),
          scrollSnap: ref(false),
          draggable,
          componentKey,
          ExampleCustomNav: ref(false),
        },
      ),
    };
  },
});
</script>
