<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfButton v-bind="state">
      <template v-if="prefixSlotOptions.getValue(state.prefix)" #prefix>
        <component :is="prefixSlotOptions.getValue(state.prefix)" />
      </template>
      <template v-if="state.SlotDefault" #default>
        {{ state.SlotDefault }}
      </template>
      <template v-if="suffixSlotOptions.getValue(state.suffix)" #suffix>
        <component :is="suffixSlotOptions.getValue(state.suffix)" />
      </template>
    </SfButton>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref, h } from 'vue';
import { SfButton, SfButtonVariant, SfButtonSize, SfIconLock, SfIconSearch } from '@storefront-ui/vue';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': h(SfIconSearch),
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Lock icon': h(SfIconLock),
});

const { state, controlsAttrs } = prepareControls(
  [
    {
      type: 'text',
      modelName: 'SlotDefault',
      description: 'Only for demonstration purposes. Default slot',
    },
    {
      type: 'text',
      modelName: 'tag',
      description: 'Change <button> tag to any other tag',
    },
    {
      type: 'select',
      modelName: 'prefix',
      description: 'slotPrefix',
      options: prefixSlotOptions.controlsOptions,
    },
    {
      type: 'select',
      modelName: 'suffix',
      description: 'slotSuffix',
      options: suffixSlotOptions.controlsOptions,
    },
    {
      type: 'select',
      modelName: 'variant',
      options: Object.keys(SfButtonVariant),
    },
    {
      type: 'select',
      modelName: 'size',
      options: Object.keys(SfButtonSize),
    },
    {
      type: 'boolean',
      modelName: 'disabled',
    },
    {
      type: 'boolean',
      modelName: 'square',
      description: 'Add even paddings for icon-only usage',
    },
  ],
  {
    SlotDefault: ref('Hello'),
    prefix: ref(prefixSlotOptions.defaultOption),
    suffix: ref(suffixSlotOptions.defaultOption),
    disabled: ref(),
    variant: ref<SfButtonVariant>(SfButtonVariant.primary),
    size: ref<SfButtonSize>(SfButtonSize.base),
    tag: ref(),
    square: ref(),
  },
);
</script>
