<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfQuantitySelector
      v-bind="state"
      v-model="value"
      :min-value="Number(minValue)"
      :max-value="Number(maxValue)"
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
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfQuantitySelector, VsfQuantitySelectorSize } from '@storefront-ui/vue/components/VsfQuantitySelector/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfQuantitySelectorExample',
  components: {
    VsfQuantitySelector,
    ComponentExample,
  },
  setup() {
    return prepareControls(
      [
        {
          type: 'select',
          options: Object.keys(VsfQuantitySelectorSize),
          modelName: 'size',
          propType: 'VsfQuantitySelectorSize',
          propDefaultValue: VsfQuantitySelectorSize.base,
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
          modelName: 'inputId',
          propType: 'string',
          propDefaultValue: 'qty-selector',
        },
        {
          type: 'text',
          modelName: 'arialLabelInput',
          propType: 'string',
          propDefaultValue: 'Quantity Selector',
        },
        {
          type: 'text',
          modelName: 'ariaLabelDecrease',
          propType: 'string',
          propDefaultValue: 'decrease',
        },
        {
          type: 'text',
          modelName: 'ariaLabelIncrease',
          propType: 'string',
          propDefaultValue: 'increase',
        },
      ],
      {
        value: ref(1),
        decimal: ref(0),
        minValue: ref(1),
        maxValue: ref(10),
        step: ref(1),
        size: ref(VsfQuantitySelectorSize.base),
        disabled: ref(false),
        block: ref(false),
        arialLabelInput: ref(),
        ariaLabelDecrease: ref(),
        ariaLabelIncrease: ref(),
        inputId: ref(),
      },
    );
  },
});
</script>
