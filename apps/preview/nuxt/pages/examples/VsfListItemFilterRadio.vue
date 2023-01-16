<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <ul class="max-w-sm">
      <VsfListItemFilterRadio v-bind="state" v-model="modelValue" />
      <VsfListItemFilterRadio v-bind="state" v-model="modelValue" :label="`${label}-2`" :value="`${value}-2`" />
    </ul>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import {
  VsfListItemFilterRadio,
  VsfListItemFilterRadioSize,
  VsfListItemFilterRadioVariant,
} from '@storefront-ui/vue/components/VsfListItemFilterRadio/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfListItemFilterRadioExample',
  components: {
    ComponentExample,
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
