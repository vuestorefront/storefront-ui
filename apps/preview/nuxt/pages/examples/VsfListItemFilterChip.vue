<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <ul class="max-w-sm">
      <VsfListItemFilterChip v-bind="state" v-model="modelValue" :counter="Number(counter)" />

      <VsfListItemFilterChip
        v-bind="state"
        v-model="modelValue"
        color="linear-gradient(180deg, #4ADE80 0%, #A78BFA 100%)"
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
  VsfListItemFilterChip,
  VsfListItemFilterChipVariant,
  VsfListItemFilterChipSize,
} from '@storefront-ui/vue/components/VsfListItemFilterChip/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfListItemFilterChipExample',
  components: {
    ComponentExample,
    VsfListItemFilterChip,
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
            modelName: 'color',
            propType: 'string',
            description:
              'Set color. It can be passed in any format supported on the web (including gradient functions)',
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
            options: Object.keys(VsfListItemFilterChipSize),
            description: 'Set size variant',
          },
          {
            type: 'select',
            modelName: 'variant',
            options: Object.keys(VsfListItemFilterChipVariant),
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
        ],
        {
          label: ref('Label'),
          size: ref(VsfListItemFilterChipSize.base),
          variant: ref(VsfListItemFilterChipVariant.left),
          counter: ref(123),
          color: ref('#A78BFA'),
          secondaryText: ref('Secondary text'),
          disabled: ref(),
          truncate: ref(),
          modelValue: ref([]),
          value: ref('Value'),
        },
      ),
    };
  },
};
</script>
