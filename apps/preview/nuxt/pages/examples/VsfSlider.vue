<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <VsfSlider
        :key="componentKey"
        :navigation="navigation"
        :scrollbar="scrollbar"
        :scroll-snap="scrollSnap"
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
          {{ hasPrev }}
          <button v-show="hasPrev" type="button" class="bg-secondary-400 p-2 rounded-sm text-white" @click="onClick">
            prev
          </button>
        </template>
        <template v-if="ExampleCustomNav" #next-arrow="{ onClick, hasNext }">
          <button v-show="hasNext" type="button" class="bg-secondary-400 p-2 rounded-sm text-white" @click="onClick">
            prev
          </button>
        </template>
      </VsfSlider>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfSlider from '@sfui/sfui/frameworks/vue/components/VsfSlider/VsfSlider.vue';
import { VsfSliderNavigation, VsfSliderScrollbar } from '@sfui/sfui/frameworks/vue/components/VsfSlider/types';

export default defineComponent({
  name: 'VsfSliderExample',
  components: {
    VsfSlider,
    Controls,
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
