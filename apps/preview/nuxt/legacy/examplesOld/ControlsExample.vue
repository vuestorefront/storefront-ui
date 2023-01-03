<template>
  <ComponentExample>
    <strong>Text</strong>
    <div>textModel - {{ textModel }}</div>
    <strong>Boolean</strong>
    <div>booleanModel - {{ booleanModel }}</div>
    <strong>Range</strong>
    <div>rangeModel - {{ rangeModel }}</div>
    <strong>Select</strong>
    <div>selectModel - {{ selectModel }}</div>
    <div>selectModel2 - {{ selectModel2 }}</div>
    <strong>Checkbox</strong>
    <div>checkboxModel - {{ checkboxModel }}</div>
    <div>checkboxModel2 - {{ checkboxModel2 }}</div>
    <div>checkboxModelTrueFalse - {{ checkboxModelTrueFalse }}</div>
    <strong>Radio</strong>
    <div>radioModel - {{ radioModel }}</div>
    <div>radioModel2 - {{ radioModel2 }}</div>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'ControlsExample',
  components: { ComponentExample },
  setup() {
    return prepareControls(
      [
        {
          title: 'Text',
          type: 'text',
          modelName: 'textModel',
        },
        {
          title: 'Boolean',
          type: 'boolean',
          modelName: 'booleanModel',
        },
        {
          title: 'Range Default',
          type: 'range',
          modelName: 'rangeModel',
        },
        {
          title: 'Range step 10',
          type: 'range',
          modelName: 'rangeModel',
          options: [
            {
              bind: {
                step: 10,
              },
            },
          ],
        },
        {
          title: 'Select options object',
          type: 'select',
          modelName: 'selectModel',
          options: [
            {
              label: 'Label1',
              value: 'value1',
            },
            {
              label: 'Label2',
              value: 'value2',
            },
          ],
        },
        {
          title: 'Select options Array',
          type: 'select',
          modelName: 'selectModel2',
          options: ['Label1', 'Label2'],
        },
        {
          title: 'Checkbox option object',
          type: 'checkbox',
          modelName: 'checkboxModel',
          options: [
            {
              label: 'Label1',
              value: 'value1',
            },
            {
              label: 'Label2',
              value: 'value2',
            },
            {
              label: 'Disabled',
              value: 'value3',
              bind: {
                disabled: true,
              },
            },
          ],
        },
        {
          title: 'Checkbox options Array',
          type: 'checkbox',
          modelName: 'checkboxModel2',
          options: ['Label1', 'Label2'],
        },
        {
          title: 'Checkbox true/false from string',
          type: 'checkbox',
          modelName: 'checkboxModelTrueFalse',
          options: ['SomeString'],
        },
        {
          title: 'Radio options object',
          type: 'radio',
          modelName: 'radioModel',
          options: [
            {
              label: 'Label1',
              value: 'value1',
            },
            {
              label: 'Label2',
              value: 'value2',
            },
          ],
        },
        {
          title: 'Radio options Array',
          type: 'radio',
          modelName: 'radioModel2',
          options: ['Label1', 'Label2'],
        },
      ],
      {
        textModel: ref('Default'),
        booleanModel: ref(false),
        rangeModel: ref(10),
        selectModel: ref(),
        selectModel2: ref(),
        checkboxModel: ref([]),
        checkboxModel2: ref([]),
        checkboxModelTrueFalse: ref(''),
        radioModel: ref(),
        radioModel2: ref(),
      },
    );
  },
};
</script>
