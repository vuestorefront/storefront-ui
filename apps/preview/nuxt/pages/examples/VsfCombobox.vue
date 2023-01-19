<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfCombobox v-model="value" v-bind="state">
      <li v-for="item of filteredOptions(value)" :key="item.label" role="option" class="w-full">
        <VsfListItemMenu :label="item.label" :secondary-text="item.secondaryText" @click="value = item.label" />
      </li>
      <li v-if="!filteredOptions(value).length"><p>No results found</p></li>
    </VsfCombobox>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfCombobox from '@storefront-ui/vue/components/VsfCombobox/VsfCombobox.vue';
import VsfListItemMenu from '@storefront-ui/vue/components/VsfListItemMenu/VsfListItemMenu.vue';
import { VsfInputSize } from '@storefront-ui/vue/components/VsfInput/types';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfComboboxExample',
  components: {
    VsfCombobox,
    VsfListItemMenu,
    ComponentExample,
  },
  setup() {
    const items = [
      {
        label: 'item1',
        secondaryText: 'item description',
      },
      {
        label: 'item2',
        secondaryText: 'item description',
      },
      {
        label: 'item3',
        secondaryText: 'item description',
      },
      {
        label: 'item4',
        secondaryText: 'item description',
      },
      {
        label: 'item5',
        secondaryText: 'item description',
      },
    ];
    const filteredOptions = (value: string) => {
      return (value && items.filter((el) => el.label.includes(value))) || items;
    };
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            propType: 'string',
            modelName: 'value',
            description: 'Value of input',
          },
          {
            type: 'select',
            modelName: 'size',
            propDefaultValue: 'VsfInputSize.base',
            propType: 'VsfInputSize',
            options: Object.keys(VsfInputSize),
            description: 'Change size of the input',
          },
          {
            type: 'text',
            modelName: 'label',
            propType: 'string',
            description: 'Change label for input',
          },
          {
            type: 'text',
            modelName: 'helpText',
            propType: 'string',
            description: 'Change help text for input',
          },
          {
            type: 'text',
            modelName: 'errorText',
            propType: 'string',
            description: 'Change error text for input',
          },
          {
            type: 'text',
            modelName: 'requiredText',
            propType: 'string',
            description: 'Change error text for input',
          },
          {
            type: 'text',
            modelName: 'placeholder',
            propType: 'string',
            description: 'Change placeholder for input',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propDefaultValue: 'false',
            propType: 'boolean',
            description: 'Disable dropdown',
          },
          {
            type: 'boolean',
            modelName: 'required',
            propDefaultValue: 'false',
            propType: 'boolean',
            description: 'Toggles if selecting is required or not',
          },
          {
            type: 'boolean',
            modelName: 'invalid',
            propDefaultValue: 'false',
            propType: 'boolean',
            description: 'Passes the validation result to the component',
          },
          {
            type: 'boolean',
            modelName: 'loading',
            propDefaultValue: 'false',
            propType: 'boolean',
            description: 'Passes the loading value to the dropdown component',
          },
        ],
        {
          size: ref(VsfInputSize.base),
          label: ref('Label'),
          placeholder: ref('Placeholder text'),
          helpText: ref('Help text'),
          errorText: ref(''),
          requiredText: ref(''),
          loading: ref(),
          disabled: ref(),
          required: ref(),
          invalid: ref(),
          filteredOptions,
          value: ref(),
        },
      ),
    };
  },
});
</script>
