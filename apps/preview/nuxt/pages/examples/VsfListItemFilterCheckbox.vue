<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <ul class="max-w-sm">
      <VsfListItemFilterCheckbox v-bind="state" v-model="modelValue" :counter="Number(counter)" />

      <VsfListItemFilterCheckbox
        v-bind="state"
        v-model="modelValue"
        :counter="Number(counter)"
        :label="`${label}-2`"
        :value="`${value}-2`"
      />
    </ul>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import {
  VsfListItemFilterCheckbox,
  VsfListItemFilterCheckboxSize,
  VsfListItemFilterCheckboxVariant,
} from '@storefront-ui/vue/components/VsfListItemFilterCheckbox/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfListItemFilterCheckboxExample',
  components: {
    ComponentExample,
    VsfListItemFilterCheckbox,
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
            options: Object.keys(VsfListItemFilterCheckboxSize),
            description: 'Set size variant',
          },
          {
            type: 'select',
            modelName: 'variant',
            options: Object.keys(VsfListItemFilterCheckboxVariant),
            description: 'Set size variant',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            description: 'Show disabled state of component',
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
          size: ref(VsfListItemFilterCheckboxSize.base),
          variant: ref(VsfListItemFilterCheckboxVariant.left),
          counter: ref(123),
          secondaryText: ref('Secondary text'),
          disabled: ref(false),
          truncate: ref(false),
          modelValue: ref([]),
          value: ref('Value'),
        },
      ),
    };
  },
};
</script>
