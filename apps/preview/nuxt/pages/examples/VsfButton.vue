<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfButton v-bind="state">
      <template v-if="prefixSlotOptions.getValue(prefix)" #prefix>
        <component :is="prefixSlotOptions.getValue(prefix)" />
      </template>
      <template v-if="SlotDefault" #default>
        {{ SlotDefault }}
      </template>
      <template v-if="suffixSlotOptions.getValue(suffix)" #suffix>
        <component :is="suffixSlotOptions.getValue(suffix)" />
      </template>
    </VsfButton>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import { VsfButton, VsfButtonVariant, VsfButtonSize } from '@storefront-ui/vue/components/VsfButton/index';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { VsfIconLock, VsfIconSearch } from '@storefront-ui/vue/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': h(VsfIconSearch),
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Lock icon': h(VsfIconLock),
});

export default defineComponent({
  name: 'VsfButtonExample',
  components: {
    VsfButton,
    ComponentExample,
    VsfIconLock,
    VsfIconSearch,
  },
  setup() {
    return {
      prefixSlotOptions,
      suffixSlotOptions,
      VsfButtonSize,
      VsfButtonVariant,
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'SlotDefault',
            description: 'Only for demonstration purposes. Default slot',
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
            options: Object.keys(VsfButtonVariant),
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfButtonSize),
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
          variant: ref<VsfButtonVariant>(VsfButtonVariant.primary),
          size: ref<VsfButtonSize>(VsfButtonSize.base),
          square: ref(),
        },
      ),
    };
  },
});
</script>
