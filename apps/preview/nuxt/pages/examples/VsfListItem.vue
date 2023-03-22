<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfListItem class="max-w-sm" v-bind="state" @click="state.selected = !state.selected">
      <template v-if="prefixSlotOptions.getValue(state.slotPrefix)" #prefix>
        <component :is="prefixSlotOptions.getValue(state.slotPrefix)" :size="state.size === 'sm' ? 'sm' : 'base'" />
      </template>
      <span class="break-words">
        {{ state.label }}
        <VsfCounter
          v-if="state.counter"
          class="ml-2 font-normal"
          :class="{ '!text-disabled-500': state.disabled }"
          :size="state.size === 'sm' ? 'lg' : 'xl'"
        >
          {{ state.counter }}
        </VsfCounter>
      </span>

      <p
        class="text-xs text-neutral-500 break-words font-normal"
        :class="{ truncate: state.truncate, '!text-disabled-500': state.disabled }"
      >
        {{ state.secondaryText }}
      </p>
      <template v-if="suffixSlotOptions.getValue(state.slotSuffix)" #suffix>
        <component :is="suffixSlotOptions.getValue(state.slotSuffix)" :size="state.size === 'sm' ? 'sm' : 'base'" />
      </template>
    </VsfListItem>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref, h } from 'vue';
import { VsfListItem, VsfListItemSize, VsfCounter, VsfIconChevronRight, VsfIconTune } from '@storefront-ui/vue';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Tune icon': h(VsfIconTune),
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Chevron right icon': h(VsfIconChevronRight),
});
const { controlsAttrs, state } = prepareControls(
  [
    {
      type: 'text',
      modelName: 'tag',
      description: 'Change a tag to any other tag',
    },
    {
      type: 'text',
      modelName: 'label',
      propType: 'string',
      description: 'Set label value',
    },
    {
      type: 'text',
      modelName: 'secondaryText',
      propType: 'string',
      description: 'Set secondary text',
    },
    {
      type: 'text',
      modelName: 'counter',
      propType: 'string',
      description: 'Set counter value',
    },
    {
      type: 'select',
      modelName: 'slotPrefix',
      description: 'Custom component that could be placed before the element.',
      options: prefixSlotOptions.controlsOptions,
    },
    {
      type: 'select',
      modelName: 'slotSuffix',
      description: 'Custom component that could be placed after the element.',
      options: suffixSlotOptions.controlsOptions,
    },
    {
      type: 'select',
      modelName: 'size',
      options: Object.keys(VsfListItemSize),
      description: 'Set size variant',
    },
    {
      type: 'boolean',
      modelName: 'disabled',
      description: 'Show disabled state of component',
    },
    {
      type: 'boolean',
      modelName: 'selected',
      description: 'Show selected state of component',
    },
    {
      type: 'boolean',
      modelName: 'truncate',
      description: 'Show truncated version of secondary text',
    },
  ],
  {
    tag: ref('li'),
    label: ref<string>('Label'),
    size: ref<VsfListItemSize>(VsfListItemSize.base),
    counter: ref(123),
    slotPrefix: ref(prefixSlotOptions.defaultOption),
    slotSuffix: ref(suffixSlotOptions.defaultOption),
    secondaryText: ref('Secondary text'),
    disabled: ref(),
    selected: ref(),
    truncate: ref(),
  },
);
</script>
