<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfButton v-bind="state" class="max-w-[200px]">
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
import { VsfButton, VsfButtonVariants, VsfButtonSizes } from '@storefront-ui/vue/components/VsfButton/index';
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
            type: 'text',
            modelName: 'link',
            description: 'Change <button> to <a> tag with `href` attribute',
          },
          {
            type: 'select',
            modelName: 'variant',
            options: Object.keys(VsfButtonVariants),
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfButtonSizes),
          },
          {
            type: 'boolean',
            modelName: 'disabled',
          },
          {
            type: 'boolean',
            modelName: 'greyscale',
            description: 'Modifier for each variants',
          },
          {
            type: 'boolean',
            modelName: 'truncate',
            description: 'Truncate text instead of wrap(default)',
          },
          {
            type: 'boolean',
            modelName: 'tile',
            description: 'Remove border radius',
          },
          {
            type: 'boolean',
            modelName: 'rounded',
            description: 'Full rounded borders',
          },
          {
            type: 'boolean',
            modelName: 'block',
            description: 'Full container width',
          },
        ],
        {
          SlotDefault: ref('Hello'),
          prefix: ref(prefixSlotOptions.defaultOption),
          suffix: ref(suffixSlotOptions.defaultOption),
          link: ref(),
          disabled: ref(),
          greyscale: ref(),
          truncate: ref(),
          variant: ref<VsfButtonVariants>(VsfButtonVariants.primary),
          size: ref<VsfButtonSizes>(VsfButtonSizes.base),
          tile: ref(),
          rounded: ref(),
          block: ref(),
        },
      ),
    };
  },
});
</script>
