<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfListItemMenu class="max-w-sm" v-bind="state" @click="active = !active">
      <template v-if="prefixSlotOptions.getValue(slotPrefix)" #prefix>
        <component :is="prefixSlotOptions.getValue(slotPrefix)" :class="{ 'text-primary-700': active && !disabled }" />
      </template>
      <span class="inline-block break-words font-body">
        <span :class="{ 'font-normal text-disabled-500': disabled, 'font-medium': active }">{{ label }}</span>
        <VsfCounter v-if="counter" class="ml-2" size="xl">{{ counter }}</VsfCounter>
      </span>

      <p class="text-xs text-gray-500 break-words" :class="{ truncate }">{{ secondaryText }}</p>
      <template v-if="suffixSlotOptions.getValue(slotSuffix)" #suffix>
        <component :is="suffixSlotOptions.getValue(slotSuffix)" />
      </template>
    </VsfListItemMenu>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import { VsfListItemMenu, VsfListItemMenuSize } from '@storefront-ui/vue/components/VsfListItemMenu/index';
import { VsfCounter } from '@storefront-ui/vue/components/VsfCounter/index';
import { VsfIconSize, VsfIconCheck } from '@storefront-ui/vue/components/VsfIcons/index';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';
const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Check icon': h(VsfIconCheck, { size: VsfIconSize.sm }),
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Check icon': h(VsfIconCheck, { size: VsfIconSize.sm }),
});
export default defineComponent({
  name: 'VsfListItemMenuExample',
  components: {
    VsfListItemMenu,
    VsfIconCheck,
    ComponentExample,
    VsfCounter,
  },
  setup() {
    return {
      prefixSlotOptions,
      suffixSlotOptions,
      ...prepareControls(
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
            options: Object.keys(VsfListItemMenuSize),
            description: 'Set size variant',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            description: 'Show disabled state of component',
          },
          {
            type: 'boolean',
            modelName: 'active',
            description: 'Show active state of component',
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
          size: ref<VsfListItemMenuSize>(VsfListItemMenuSize.base),
          counter: ref(123),
          slotPrefix: ref(prefixSlotOptions.defaultOption),
          slotSuffix: ref(suffixSlotOptions.defaultOption),
          secondaryText: ref('Secondary text'),
          disabled: ref(undefined),
          active: ref(false),
          truncate: ref(false),
        },
      ),
      VsfIconSize,
      VsfListItemMenuSize,
    };
  },
});
</script>
