<template>
  <ComponentExample :controls-attrs="controlsAttrs" component-container-class-name="flex justify-center items-center">
    <VsfDropdownInternal v-bind="state" @update:model-value="state.modelValue = $event">
      <template v-if="slotTriggerOptions.getValue(trigger)" #trigger>
        <component :is="slotTriggerOptions.getValue(trigger)" />
      </template>
      <component :is="childrenOptions.getValue(defaultSlot)" />
    </VsfDropdownInternal>
  </ComponentExample>
</template>

<script lang="ts">
import { h, ref } from 'vue';
import {
  VsfDropdownInternal,
  VsfDropdownInternalTriggerEvent,
  VsfDropdownInternalPlacement,
} from '@storefront-ui/vue/components/VsfDropdownInternal/index';
import VsfButton from '@storefront-ui/vue/components/VsfButton/VsfButton.vue';
import VsfDropdownMenu from '@storefront-ui/vue/components/VsfDropdownMenu/VsfDropdownMenu.vue';
import VsfListItemMenu from '@storefront-ui/vue/components/VsfListItemMenu/VsfListItemMenu.vue';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const slotTriggerOptions = createControlsOptions({
  button: h(VsfButton, 'Trigger for dropdown'),
});
const childrenOptions = createControlsOptions({
  menu: h(VsfDropdownMenu, { class: 'w-80' }, 'Dropdown'),
  text: h('p', 'Content'),
});

export default {
  name: 'VsfDropdownInternalExample',
  components: {
    ComponentExample,
    VsfDropdownInternal,
    VsfButton,
    VsfDropdownMenu,
    VsfListItemMenu,
  },
  setup() {
    return {
      slotTriggerOptions,
      childrenOptions,
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
            type: 'select',
            modelName: 'trigger',
            propType: 'slot',
            description: 'Change content of trigger',
            options: slotTriggerOptions.controlsOptions,
          },
          {
            type: 'select',
            modelName: 'defaultSlot',
            propType: 'slot',
            description: 'Change content of dropdown',
            options: childrenOptions.controlsOptions,
          },
        ],
        {
          modelValue: ref(),
          triggerEvent: ref(),
          placement: ref(VsfDropdownInternalPlacement.bottom),
          disabled: ref(),
          trigger: ref(slotTriggerOptions.defaultOption),
          defaultSlot: ref(childrenOptions.defaultOption),
        },
      ),
    };
  },
};
</script>
