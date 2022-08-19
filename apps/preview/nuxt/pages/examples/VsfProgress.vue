<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfProgress :value="valueModel" :variant="variantModel" :type="typeModel" />

      {{ dummyModel }}
      {{ dummyModel2 }}
      <div>dummyInputModel {{ dummyInputModel }}</div>
      <div>dummyInputModel2 {{ dummyInputModel2 }}</div>
      <div>dummyRadioModel {{ dummyRadioModel }}</div>
      <div>dummyRadioModel2 {{ dummyRadioModel2 }}</div>
      <div>textModel {{ textModel }}</div>
      <div>boolModel {{ boolModel }}</div>
    </div>
    <div class="e-page-controls">
      <ExampleStory
        v-bind="bind"
        v-on="on"
      />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
// eslint-disable-next-line import/no-relative-packages, import/no-unresolved
import VsfProgress, { VsfProgressVariants, VsfProgressTypes } from '../../output/blocks/VsfProgress/VsfProgress.vue';
import ExampleStory from '../../utils/exampleStory.vue';

const prepareControls = (controlsObject, models) => {
  const on = {};
  const controls = controlsObject.map((control) => {
    on[`update:${control.modelName}`] = (e) => { models[control.modelName] = e; };
    return { ...control, model: models[control.modelName] };
  });

  return {
    bind: {
      controls,
    },
    on,
    ...toRefs(reactive(models)),
  };
};


export default {
  name: 'VsfProgressExample',
  components: { VsfProgress },
  setup() {
    return {
      VsfProgressVariants,
      VsfProgressTypes,
      propValue: ref(0),
      variantModel: ref(),
      typeModel: ref(),
      ...prepareControls([
        {
          title: 'Text',
          type: 'text',
          modelName: 'textModel',
        },
        {
          title: 'Boolean',
          type: 'boolean',
          modelName: 'boolModel',
        },
        {
          title: 'Value',
          type: 'range',
          modelName: 'valueModel',
        },
        {
          title: 'Dummy range',
          type: 'range',
          modelName: 'valueModel',
          options: [{
            bind: {
              step: 10,
            },
          }],
        },
        {
          title: 'Variant',
          type: 'select',
          modelName: 'variantModel',
          options: Object.keys(VsfProgressVariants),
        },
        {
          title: 'Dummy select',
          type: 'select',
          modelName: 'dummyModel',
          options: [{
            label: 'dimmy1',
            value: 'dummy1',
          }, {
            label: 'dimmy2',
            value: 'dummy2',
          }],
        },
        {
          title: 'Dummy select Array',
          type: 'select',
          modelName: 'dummyModel2',
          options: ['dimmy1', 'dimmy2'],
        },
        {
          title: 'Dummy checkbox',
          type: 'checkbox',
          modelName: 'dummyInputModel',
          options: [{
            label: 'dimmy1',
            value: 'dummy1',
          }, {
            label: 'dimmy2',
            value: 'dummy2',
          }],
        },
        {
          title: 'Dummy checkbox',
          type: 'checkbox',
          modelName: 'dummyInputModel2',
          options: ['dimmy1', 'dimmy2'],
        },
        {
          title: 'Type',
          type: 'radio',
          modelName: 'typeModel',
          options: Object.keys(VsfProgressTypes),
        },
        {
          title: 'Dummy radio',
          type: 'radio',
          modelName: 'dummyRadioModel',
          options: [{
            label: 'radio1',
            value: 'radio1',
          }, {
            label: 'radio2',
            value: 'radio2',
          }],
        },
        {
          title: 'Dummy radio2',
          type: 'radio',
          modelName: 'dummyRadioModel2',
          options: ['radio1', 'radio2'],
        },
      ], {
        boolModel: ref(),
        valueModel: ref(),
        dummyModel: ref(),
        dummyModel2: ref(),
        dummyInputModel: ref([]),
        dummyInputModel2: ref([]),
        dummyRadioModel: ref([]),
        dummyRadioModel2: ref([]),
        variantModel: ref(),
        typeModel: ref(),
        textModel: ref(''),
      }),
    };
  },
};
</script>
