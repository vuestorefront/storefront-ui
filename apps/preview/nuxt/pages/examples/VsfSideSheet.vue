<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfSideSheet
      :overlay-visible="overlayVisible"
      :permanent="permanent"
      :left-side="leftSide"
      :open="open"
      @close="closeSideSheet"
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus
        deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis
        minima debitis dolore.
      </div>
    </VsfSideSheet>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import VsfSideSheet from '@storefront-ui/vue/components/VsfSideSheet/VsfSideSheet.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const isSideSheetOpen = ref(true);

const closeSideSheet = () => (isSideSheetOpen.value = false);

export default {
  name: 'VsfSideSheetExample',
  components: {
    ComponentExample,
    VsfSideSheet,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'open',
            propType: 'boolean',
            propDefaultValue: false,
          },
          {
            type: 'boolean',
            modelName: 'overlayVisible',
            propType: 'boolean',
            propDefaultValue: false,
          },
          {
            type: 'boolean',
            modelName: 'leftSide',
            propType: 'boolean',
            propDefaultValue: true,
          },
          {
            type: 'boolean',
            modelName: 'permanent',
            propType: 'boolean',
            propDefaultValue: false,
            description: "If permanent prop is set to true then props open and overlay won't work",
          },
        ],
        {
          open: ref(isSideSheetOpen),
          overlayVisible: ref(false),
          leftSide: ref(true),
          permanent: ref(true),
        },
      ),
      closeSideSheet,
      isSideSheetOpen,
    };
  },
};
</script>
