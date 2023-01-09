<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfButton v-bind="state" class="max-w-[200px]">
      <template v-if="SlotPrefix" #prefix>
        <VsfIconVsfDiamond />
      </template>
      <template v-if="SlotDefault" #default>
        {{ SlotDefault }}
      </template>
      <template v-if="SlotSuffix" #suffix>
        <VsfIconVsfDiamond />
      </template>
    </VsfButton>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfButton, VsfButtonVariants, VsfButtonSizes } from '@storefront-ui/vue/components/VsfButton/index';
import VsfIconVsfDiamond from '@storefront-ui/vue/components/VsfIcons/VsfIconVsfDiamond.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfButtonExample',
  components: {
    VsfButton,
    VsfIconVsfDiamond,
    ComponentExample,
  },
  setup() {
    return prepareControls(
      [
        {
          type: 'text',
          modelName: 'SlotDefault',
          description: 'Only for demonstration purposes. Default slot',
        },
        {
          type: 'boolean',
          modelName: 'SlotPrefix',
          description: 'slotPrefix',
        },
        {
          type: 'boolean',
          modelName: 'SlotSuffix',
          description: 'slotSuffix',
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
        SlotPrefix: ref(),
        SlotSuffix: ref(),
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
    );
  },
});
</script>
