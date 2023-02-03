<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <ul class="max-w-sm">
      <VsfListItemFilterSwitch v-bind="state" v-model="modelValue" :counter="Number(counter)" />

      <VsfListItemFilterSwitch
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
  VsfListItemFilterSwitch,
  VsfListItemFilterSwitchVariant,
  VsfListItemFilterSwitchSize,
} from '@storefront-ui/vue/components/VsfListItemFilterSwitch/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfListItemFilterSwitchExample',
  components: {
    ComponentExample,
    VsfListItemFilterSwitch,
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
            options: Object.keys(VsfListItemFilterSwitchSize),
            description: 'Set size variant',
          },
          {
            type: 'select',
            modelName: 'variant',
            options: Object.keys(VsfListItemFilterSwitchVariant),
            description: 'Set size variant',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propType: 'boolean',
            description: 'Show disabled state of component',
          },
          {
            type: 'boolean',
            modelName: 'truncate',
            propType: 'boolean',
            description: 'Show truncated version of secondary text',
          },
          {
            type: 'text',
            modelName: 'value',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'text',
            modelName: 'name',
            propType: 'string',
            description: 'Name for form input group',
          },
        ],
        {
          label: ref('Label'),
          size: ref(VsfListItemFilterSwitchSize.base),
          variant: ref(VsfListItemFilterSwitchVariant.left),
          counter: ref(123),
          secondaryText: ref('Secondary text'),
          disabled: ref(),
          truncate: ref(),
          modelValue: ref([]),
          value: ref('Value'),
          name: ref('name'),
        },
      ),
    };
  },
};
</script>
