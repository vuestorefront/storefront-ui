<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSideSheet
        :overlay-visible="overlayVisible"
        :with-button="withButton"
        :permanent="permanent"
        :left-side="leftSide"
        :is-open="isOpen"
        @close="closeSideSheet"
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus
          deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis
          minima debitis dolore.
        </div>
      </VsfSideSheet>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfSideSheet from '@sfui/sfui/frameworks/vue/components/VsfSideSheet/VsfSideSheet.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

const isSideSheetOpen = ref(true);

const closeSideSheet = () => (isSideSheetOpen.value = false);

export default {
  name: 'VsfSideSheetExample',
  components: {
    Controls,
    VsfSideSheet,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'isOpen',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'overlayVisible',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'leftSide',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'withButton',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'permanent',
            propType: 'boolean',
          },
        ],
        {
          isOpen: ref(isSideSheetOpen),
          overlayVisible: ref(false),
          leftSide: ref(true),
          withButton: ref(true),
          permanent: ref(false),
        },
      ),
      closeSideSheet,
      isSideSheetOpen,
    };
  },
};
</script>
