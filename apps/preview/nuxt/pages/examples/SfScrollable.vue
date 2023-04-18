<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfScrollable
      :drag="state.drag"
      :direction="state.direction"
      :buttons-placement="state.buttonsPlacement"
      :class="[
        'w-full items-center',
        {
          'snap-x snap-mandatory': state.snap,
          '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:\'none\'] [scrollbar-width:\'none\']': state.hideScrollbar,
        },
      ]"
    >
      <div
        v-for="(_, index) in Array.from({ length: Number(state.totalItems || 10) })"
        :key="index"
        :class="[
          'w-36 h-36 shrink-0 bg-neutral-100 border border-negative-300 border-dashed flex items-center justify-center text-gray-500',
          { 'snap-center': state.snap },
        ]"
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
      type: 'boolean',
      modelName: 'snap',
      propType: 'boolean',
      propDefaultValue: false,
      description: 'Only for demonstration purposes. Enables item snapping',
    },
    {
      type: 'boolean',
      modelName: 'hideScrollbar',
      propType: 'boolean',
      propDefaultValue: false,
      description: 'Only for demonstration purposes. Hides scrollbar',
    },
    {
      type: 'text',
      modelName: 'totalItems',
      propDefaultValue: '10',
      description: 'Only for demonstration purposes. Total number of items',
    },
  ],
  {
    direction: ref(SfScrollableDirection.horizontal),
    buttonsPlacement: ref(SfScrollableButtonsPlacement.block),
    drag: ref(),
    snap: ref(),
    hideScrollbar: ref(false),
    totalItems: ref('20'),
  },
);
</script>
