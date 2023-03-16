<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfDropdown v-bind="state" v-model="state.modelValue">
      <template #trigger>
        <VsfButton @click="state.modelValue = !state.modelValue">Toggle</VsfButton>
      </template>
      <ul class="p-2 rounded bg-gray-100">
        <li>More</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </VsfDropdown>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfDropdown, VsfButton, VsfPopoverPlacement, VsfPopoverStrategy } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { controlsAttrs, state } = prepareControls(
  [
    {
      type: 'boolean',
      modelName: 'modelValue',
      propType: 'boolean',
      isRequired: true,
      description: 'Controls floating content visibility',
    },
    {
      type: 'select',
      modelName: 'placement',
      propType: 'VsfPopoverPlacement',
      propDefaultValue: VsfPopoverPlacement.bottom,
      options: Object.values(VsfPopoverPlacement),
      description:
        'Dropdown default placement - may be automatically shifted or flipped based on screen size and dropdown position',
    },
    {
      type: 'select',
      modelName: 'strategy',
      propType: 'VsfPopoverStrategy',
      propDefaultValue: VsfPopoverStrategy.absolute,
      options: Object.values(VsfPopoverStrategy),
      description: 'Dropdown positioning strategy',
    },
  ],
  {
    modelValue: ref(false),
    placement: ref(VsfPopoverPlacement.bottom),
    strategy: ref(VsfPopoverStrategy.absolute),
  },
);
</script>
