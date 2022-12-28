<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfButton v-bind="state" :type="state.link ? null : 'button'">
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
    </div>
    <Controls class="e-page-controls" v-bind="controlsAttrs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfButton from '@sfui/sfui/frameworks/vue/components/VsfButton/VsfButton.vue';
import { VsfButtonVariants, VsfButtonSizes } from '@sfui/sfui/frameworks/vue/components/VsfButton/types';
import VsfIconVsfDiamond from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconVsfDiamond.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfButtonExample',
  components: {
    VsfButton,
    VsfIconVsfDiamond,
    Controls,
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
