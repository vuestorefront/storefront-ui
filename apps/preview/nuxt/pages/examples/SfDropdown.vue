<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfDropdown v-bind="state" v-model="state.modelValue">
      <template #trigger>
        <SfButton @click="state.modelValue = !state.modelValue">Toggle</SfButton>
      </template>
      <ul class="p-2 rounded bg-gray-100">
        <li>More</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </SfDropdown>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfDropdown, SfButton, SfPopoverPlacement, SfPopoverStrategy } from '@storefront-ui/vue';
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
      propType: 'SfPopoverPlacement',
      propDefaultValue: SfPopoverPlacement.bottom,
      options: Object.values(SfPopoverPlacement),
      description:
        'Dropdown default placement - may be automatically shifted or flipped based on screen size and dropdown position',
    },
    {
      type: 'select',
      modelName: 'strategy',
      propType: 'SfPopoverStrategy',
      propDefaultValue: SfPopoverStrategy.absolute,
      options: Object.values(SfPopoverStrategy),
      description: 'Dropdown positioning strategy',
    },
  ],
  {
    modelValue: ref(false),
    placement: ref(SfPopoverPlacement.bottom),
    strategy: ref(SfPopoverStrategy.absolute),
  },
);
</script>
