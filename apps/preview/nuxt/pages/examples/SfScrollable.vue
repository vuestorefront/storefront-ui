<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfScrollable
      :drag="state.drag"
      :direction="state.direction"
      :buttons-placement="state.buttonsPlacement"
      :button-prev-aria-label="state.buttonPrevAriaLabel"
      :button-next-aria-label="state.buttonNextAriaLabel"
      class="w-full items-center"
    >
      <div
        v-for="(_, index) in Array.from({ length: Number(state.totalItems || 10) })"
        :key="index"
        class="w-36 h-36 shrink-0 bg-neutral-100 border border-negative-300 border-dashed flex items-center justify-center text-gray-500"
      >
        {{ index + 1 }}
      </div>
    </SfScrollable>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfScrollable, SfScrollableDirection, SfScrollableButtonsPlacement } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { controlsAttrs, state } = prepareControls(
  [
    {
      type: 'select',
      modelName: 'direction',
      options: Object.keys(SfScrollableDirection),
      propType: 'enum',
      propDefaultValue: SfScrollableDirection.horizontal,
      description: 'Direction of scrollable',
    },
    {
      type: 'select',
      modelName: 'buttonsPlacement',
      options: Object.keys(SfScrollableButtonsPlacement),
      propType: 'SfScrollableButtonsPlacement',
      propDefaultValue: SfScrollableButtonsPlacement.block,
      description: 'Change position of next/previous buttons',
    },
    {
      type: 'boolean',
      modelName: 'drag',
      propType: 'boolean',
      propDefaultValue: false,
      description: 'Enables item dragging on desktop',
    },
    {
      type: 'text',
      modelName: 'totalItems',
      propDefaultValue: '10',
      description: 'Only for demonstration purposes. Total number of items',
    },
    {
      type: 'text',
      modelName: 'buttonPrevAriaLabel',
      propType: 'string',
      propDefaultValue: 'Previous',
      description: 'Sets aria label for the previous button',
    },
    {
      type: 'text',
      modelName: 'buttonNextAriaLabel',
      propType: 'string',
      propDefaultValue: 'Next',
      description: 'Sets aria label for the next button',
    },
  ],
  {
    direction: ref(SfScrollableDirection.horizontal),
    buttonsPlacement: ref(SfScrollableButtonsPlacement.block),
    drag: ref(),
    totalItems: ref('20'),
    buttonPrevAriaLabel: ref('Previous element'),
    buttonNextAriaLabel: ref('Next element'),
  },
);
</script>
