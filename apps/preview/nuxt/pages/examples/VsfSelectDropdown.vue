<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfSelectDropdown v-bind="state" v-model="value" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfSelectDropdown, VsfSelectDropdownSize } from '@storefront-ui/vue/components/VsfSelectDropdown/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfSelectDropdownExample',
  components: {
    ComponentExample,
    VsfSelectDropdown,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'json',
            propType: 'array',
            modelName: 'options',
            description:
              'Options passed as array of strings. If not provided then it is needed to add custom option component with desired data format',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'value',
            description: 'Component value',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'label',
            description: 'Component label',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'placeholder',
            description: 'Text placeholder',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'disabled',
            description: 'Disabled state',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'required',
            description: 'Required state',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'invalid',
            description: 'Invalid state',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'helpText',
            description: 'Additional text displayed below component',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'errorText',
            description: 'Text that informs about component errors',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'requiredText',
            description: 'Text that informs about required state of the component',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfSelectDropdownSize),
            description: 'Sizes of the component. There are 3 sizes: sm, base and lg',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'loading',
            description: 'Loading state for list options',
          },
        ],
        {
          options: ref(['t-shirt', 'sweater', 'jacket', 'coat', 'jeans', 'socks', 'shorts', 'tracksuit']),
          value: ref(''),
          placeholder: ref('Placeholder text'),
          disabled: ref(),
          required: ref(),
          invalid: ref(),
          loading: ref(),
          helpText: ref('Help text'),
          errorText: ref('Error text'),
          requiredText: ref('*Required'),
          label: ref('Label'),
          size: ref(VsfSelectDropdownSize.base),
        },
      ),
    };
  },
};
</script>
