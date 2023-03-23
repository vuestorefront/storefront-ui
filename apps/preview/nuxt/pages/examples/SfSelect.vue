<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <label>
      <span
        :class="[
          `pb-1 text-sm font-body font-medium`,
          required && `after:content-['*']`,
          {
            'text-disabled-500 cursor-not-allowed': disabled,
          },
        ]"
      >
        {{ label }}
      </span>
      <SfSelect v-bind="state" v-model="value">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </SfSelect>
    </label>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SfSelect, SfSelectSize } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'SfSelectExample',
  components: {
    SfSelect,
    ComponentExample,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'json',
            propType: 'array',
            modelName: 'options',
            description: 'Elements displayed in select options',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'value',
            description: 'Selected value',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'placeholder',
            description: 'Placeholder for select',
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
            modelName: 'label',
            description: 'Label for select',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(SfSelectSize),
            description: 'Select can have 3 sizes: `sm`, `base` or `lg`',
          },
        ],
        {
          options: ref([
            { label: 'red', value: 'red' },
            { label: 'blue', value: 'blue' },
            { label: 'yellow', value: 'yellow' },
            { label: 'green', value: 'green' },
            { label: 'gray', value: 'gray' },
            { label: 'black', value: 'black' },
            { label: 'brown', value: 'brown' },
          ]),
          value: ref(''),
          placeholder: ref('-- Select --'),
          disabled: ref(false),
          required: ref(false),
          invalid: ref(false),
          label: ref('Label'),
          size: ref(SfSelectSize.base),
        },
      ),
    };
  },
});
</script>
