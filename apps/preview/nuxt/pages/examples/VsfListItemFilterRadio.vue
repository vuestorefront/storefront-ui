<template>
  <div class="e-page">
    <div class="e-page-component">
      <ul class="max-w-sm">
        <VsfListItemFilterRadio
          v-model="modelValue"
          :counter="counter"
          :label="label"
          :size="size"
          :variant="variant"
          :secondary-text="secondaryText"
          :disabled="disabled"
          :selected="selected"
          :truncate="truncate"
          :value="value"
        />
        <VsfListItemFilterRadio
          v-model="modelValue"
          :counter="counter"
          :label="`${label}-2`"
          :size="size"
          :variant="variant"
          :secondary-text="secondaryText"
          :disabled="disabled"
          :selected="selected"
          :truncate="truncate"
          :value="`${value}-2`"
        />
      </ul>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import {
  VsfListItemFilterRadio,
  VsfListItemFilterRadioSize,
  VsfListItemFilterRadioVariant,
} from '@storefront-ui/vue/components/VsfListItemFilterRadio/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfListItemFilterRadioExample',
  components: {
    Controls,
    VsfListItemFilterRadio,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'modelValue',
            propType: 'string',
            propDefaultValue: '',
            description: 'Selected value',
          },
          {
            type: 'text',
            modelName: 'label',
            propType: 'string',
            description: 'Set label value',
          },
          {
            type: 'text',
            modelName: 'secondaryText',
            propType: 'string',
            description: 'Set secondary text',
          },
          {
            type: 'text',
            modelName: 'counter',
            propType: 'string',
            description: 'Set counter value',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfListItemFilterRadioSize),
            description: 'Set size variant',
          },
          {
            type: 'select',
            modelName: 'variant',
            options: Object.keys(VsfListItemFilterRadioVariant),
            description: 'Set size variant',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            description: 'Show disabled state of component',
          },
          {
            type: 'boolean',
            modelName: 'selected',
            description: 'Show selected state of component',
          },
          {
            type: 'boolean',
            modelName: 'truncate',
            description: 'Show truncated version of secondary text',
          },
          {
            type: 'text',
            modelName: 'value',
            propType: 'string',
            propDefaultValue: '',
          },
        ],
        {
          label: ref('Label'),
          size: ref(VsfListItemFilterRadioSize.base),
          variant: ref(VsfListItemFilterRadioVariant.left),
          counter: ref(123),
          secondaryText: ref('Secondary text'),
          selected: ref(false),
          disabled: ref(false),
          truncate: ref(false),
          modelValue: ref(''),
          value: ref('Value'),
        },
      ),
    };
  },
};
</script>
