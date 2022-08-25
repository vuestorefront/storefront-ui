<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfAlert
        :type="typeModel"
        :persistent="persistentModel"
        :header="headerModel"
        :description="descriptionModel"
        :defaultIcon="defaultIconModel"
        :defaultButton="defaultButtonModel"
        @close="closeClick"
      >
        <template #icon v-if="!defaultIconModel">
          {{ slotIconModel }}
        </template>
        <template #button v-if="!defaultButtonModel">
          {{ slotButtonModel }}
        </template>
      </VsfAlert>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfAlert, { VsfAlertTypes } from '../../output/blocks/VsfAlert/VsfAlert.vue'
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfAlertExample',
  components: {
    Controls,
    VsfAlert
  },
  setup() {
    const closeClick = () => console.log('Clicked 🥳');

    return {
      closeClick,
      ...prepareControls([
        {
          title: 'Type',
          type: 'select',
          modelName: 'typeModel',
          options: Object.keys(VsfAlertTypes),
          propDefaultValue: VsfAlertTypes.info,
          propType: 'VsfAlertTypes',
        },
        {
          title: 'Persistent',
          type: 'checkbox',
          modelName: 'persistentModel',
          propDefaultValue: false,
          propType: 'boolean',
        },
        {
          title: 'Header',
          type: 'text',
          modelName: 'headerModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'Description',
          type: 'text',
          modelName: 'descriptionModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'DefaultIcon',
          type: 'checkbox',
          modelName: 'defaultIconModel',
          propDefaultValue: true,
          propType: 'boolean',
        },
        {
          title: 'DefaultButton',
          type: 'checkbox',
          modelName: 'defaultButtonModel',
          propDefaultValue: true,
          propType: 'boolean',
        },
        {
          title: 'SlotIcon',
          type: 'text',
          modelName: 'slotIconModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'SlotButton',
          type: 'text',
          modelName: 'slotButtonModel',
          propDefaultValue: '',
          propType: 'string',
        },
      ], {
        typeModel: ref(VsfAlertTypes.info),
        persistentModel: ref(false),
        headerModel: ref(''),
        descriptionModel: ref(''),
        defaultIconModel: ref(true),
        slotIconModel: ref(''),
        defaultButtonModel: ref(true),
        slotButtonModel: ref(''),
      })
    }
  }
};
</script>
