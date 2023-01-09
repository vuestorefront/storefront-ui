<template>
  <ComponentExample :controls-attrs="controlsAttrs" component-container-class-name="flex justify-center items-center">
    <VsfDropdownInternal v-bind="state" @update:model-value="state.modelValue = $event">
      <template #trigger
        ><VsfButton>{{ state.trigger }}</VsfButton></template
      >
      {{ defaultSlot }}
    </VsfDropdownInternal>
  </ComponentExample>
</template>

<script>
import { ref } from 'vue';
import {
  VsfDropdownInternal,
  VsfDropdownInternalTriggerEvent,
  VsfDropdownInternalPlacement,
} from '@storefront-ui/vue/components/VsfDropdownInternal/index';
import VsfButton from '@storefront-ui/vue/components/VsfButton/VsfButton.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfDropdownInternalExample',
  components: {
    ComponentExample,
    VsfButton,
    VsfDropdownInternal,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'modelValue',
            propDefaultValue: 'false',
            propType: 'boolean',
            description: 'Propery used for open/close dropdown',
          },
          {
            type: 'select',
            options: Object.keys(VsfDropdownInternalTriggerEvent),
            modelName: 'triggerEvent',
            propType: 'VsfDropdownInternalTriggerEvent',
            propDefaultValue: VsfDropdownInternalTriggerEvent.click,
            description: 'Determine whether dropdown will be open/close via click/hover',
          },
          {
            type: 'select',
            options: Object.keys(VsfDropdownInternalPlacement),
            modelName: 'placement',
            propType: 'VsfDropdownInternalPlacement',
            propDefaultValue: VsfDropdownInternalPlacement.bottom,
            description: 'Initial position of dropdown in reference to trigger',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propDefaultValue: 'false',
            propType: 'boolean',
            description: 'Disable dropdown',
          },
          {
            type: 'text',
            modelName: 'trigger',
            propType: 'slot',
            description: 'Change content of trigger',
          },
          {
            type: 'text',
            modelName: 'defaultSlot',
            propType: 'slot',
            description: 'Change content of dropdown',
          },
        ],
        {
          modelValue: ref(),
          triggerEvent: ref(),
          placement: ref(VsfDropdownInternalPlacement.bottom),
          disabled: ref(),
          trigger: ref('Trigger for dropdown'),
          defaultSlot: ref('content'),
        },
      ),
    };
  },
};
</script>
