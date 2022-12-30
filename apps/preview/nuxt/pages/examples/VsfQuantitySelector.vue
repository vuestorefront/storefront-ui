<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <VsfQuantitySelector
        v-model="value"
        :min-value="Number(minValue)"
        :max-value="Number(maxValue)"
        :disabled="disabled"
        :block="block"
        :input-aria-label="inputAriaLabel"
        :input-id="inputId"
        :size="size"
        :step="Number(step)"
        :decimal="Number(decimal)"
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
import { VsfQuantitySelector, VsfQuantitySelectorSizes } from '@storefront-ui/vue/components/VsfQuantitySelector/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfQuantitySelectorExample',
  components: {
    VsfQuantitySelector,
    Controls,
  },
  setup() {
    return prepareControls(
      [
        {
          type: 'select',
          options: Object.keys(VsfQuantitySelectorSizes),
          modelName: 'size',
          propType: 'VsfQuantitySelectorSizes',
          propDefaultValue: VsfQuantitySelectorSizes.base,
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'block',
          propType: 'boolean',
        },
        {
          type: 'range',
          modelName: 'decimal',
          propType: 'number',
          propDefaultValue: '0',
          options: [
            {
              bind: {
                min: 0,
                max: 10,
                step: 1,
              },
            },
          ],
        },
        {
          type: 'range',
          modelName: 'minValue',
          propType: 'number',
          propDefaultValue: '1',
          options: [
            {
              bind: {
                min: 1,
                max: 10,
                step: 1,
              },
            },
          ],
        },
        {
          type: 'range',
          modelName: 'step',
          propType: 'number',
          propDefaultValue: '1',
          options: [
            {
              bind: {
                min: 1,
                max: 10,
                step: 1,
              },
            },
          ],
        },
        {
          type: 'range',
          modelName: 'maxValue',
          propType: 'number',
          options: [
            {
              bind: {
                min: 1,
                max: 100,
                step: 1,
              },
            },
          ],
        },
        {
          type: 'text',
          modelName: 'inputAriaLabel',
          propType: 'string',
          propDefaultValue: 'Quantity Selector',
        },
        {
          type: 'text',
          modelName: 'inputId',
          propType: 'string',
          propDefaultValue: 'qty-selector',
        },
      ],
      {
        value: ref(1),
        decimal: ref(0),
        minValue: ref(1),
        maxValue: ref(10),
        step: ref(1),
        size: ref(VsfQuantitySelectorSizes.base),
        disabled: ref(false),
        block: ref(false),
        inputAriaLabel: ref(),
        inputId: ref(),
      },
    );
  },
});
</script>
