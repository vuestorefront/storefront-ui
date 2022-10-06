<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <VsfQuantitySelector
        v-model="value"
        :min-value="minValue"
        :max-value="maxValue"
        :disabled="disabled"
        :block="block"
        :input-aria-label="inputAriaLabel"
        :input-id="inputId"
        :size="size"
        :step="step"
      >
        <div class="text-xs font-normal text-center font-body">
          <span v-if="disabled" class="text-negative-600 font-medium">Out of stock</span>
          <span v-else
            ><span class="font-medium">{{ maxValue }}</span
            >&nbsp;in stock</span
          >
        </div>
      </VsfQuantitySelector>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfQuantitySelector from '@sfui/sfui/frameworks/vue/components/VsfQuantitySelector/VsfQuantitySelector.vue';
import { VsfQuantitySelectorSizes } from '@sfui/sfui/frameworks/vue/components/VsfQuantitySelector/types';

export default defineComponent({
  name: 'VsfOverlayExample',
  components: {
    VsfQuantitySelector,
    Controls,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Size',
          type: 'select',
          options: Object.keys(VsfQuantitySelectorSizes),
          modelName: 'size',
          propType: 'VsfQuantitySelectorSizes',
          propDefaultValue: VsfQuantitySelectorSizes.base,
        },
        {
          title: 'Disabled',
          type: 'boolean',
          modelName: 'disabled',
          propType: 'boolean',
        },
        {
          title: 'Block',
          type: 'boolean',
          modelName: 'block',
          propType: 'boolean',
        },
        {
          title: 'MinValue',
          type: 'number',
          modelName: 'minValue',
          propType: 'number',
          propDefaultValue: '1',
          options: [
            {
              bind: {
                min: 1,
              },
            },
          ],
        },
        {
          title: 'step',
          type: 'number',
          modelName: 'step',
          propType: 'number',
          propDefaultValue: '1',
          options: [
            {
              bind: {
                min: 1,
              },
            },
          ],
        },
        {
          title: 'MaxValue',
          type: 'number',
          modelName: 'maxValue',
          propType: 'number',
          options: [
            {
              bind: {
                min: 1,
              },
            },
          ],
        },
        {
          title: 'inputAriaLabel',
          type: 'text',
          modelName: 'inputAriaLabel',
          propType: 'string',
          propDefaultValue: 'Quantity Selector',
        },
        {
          title: 'inputId',
          type: 'text',
          modelName: 'inputId',
          propType: 'string',
          propDefaultValue: 'qty-selector',
        },
      ],
      {
        value: ref(1),
        minValue: ref(1),
        maxValue: ref(10),
        step: ref(1),
        size: ref(VsfQuantitySelectorSizes.base),
        disabled: ref(false),
        block: ref(false),
        inputAriaLabel: ref(''),
        inputId: ref(''),
      },
    );
  },
});
</script>
