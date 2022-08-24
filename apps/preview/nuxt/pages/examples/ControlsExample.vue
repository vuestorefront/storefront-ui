<template>
  <div class="e-page">
    <div class="e-page-component">
      <b>Text</b>
      <div>textModel - {{ textModel }}</div>
      <b>Boolean</b>
      <div>booleanModel - {{ booleanModel }}</div>
      <b>Range</b>
      <div>rangeModel - {{ rangeModel }}</div>
      <b>Select</b>
      <div>selectModel - {{ selectModel }}</div>
      <div>selectModel2 - {{ selectModel2 }}</div>
      <b>Checkbox</b>
      <div>checkboxModel - {{ checkboxModel }}</div>
      <div>checkboxModel2 - {{ checkboxModel2 }}</div>
      <div>checkboxModelTrueFalse - {{ checkboxModelTrueFalse }}</div>
      <b>Radio</b>
      <div>radioModel - {{ radioModel }}</div>
      <div>radioModel2 - {{ radioModel2 }}</div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'ControlsExample',
  components: { Controls },
  setup() {
    return prepareControls([
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
          options: [{
            bind: {
              step: 10,
            },
          }],
        },
        {
          title: 'Select options object',
          type: 'select',
          modelName: 'selectModel',
          options: [{
            label: 'Label1',
            value: 'value1',
          }, {
            label: 'Label2',
            value: 'value2',
          }],
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
          options: [{
            label: 'Label1',
            value: 'value1',
          }, {
            label: 'Label2',
            value: 'value2',
          }, {
            label: 'Disabled',
            value: 'value3',
            bind: {
              disabled: true
            }
          }],
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
          options: [{
            label: 'Label1',
            value: 'value1',
          }, {
            label: 'Label2',
            value: 'value2',
          }],
        },
        {
          title: 'Radio options Array',
          type: 'radio',
          modelName: 'radioModel2',
          options: ['Label1', 'Label2'],
        },
      ], {
        textModel: ref('Default'),
        booleanModel: ref(false),
        rangeModel: ref(10),
        selectModel: ref(),
        selectModel2: ref(),
        checkboxModel: ref([]),
        checkboxModel2: ref([]),
        checkboxModelTrueFalse: ref(''),
        radioModel: ref(),
        radioModel2: ref()
      })
  }
};
</script>
