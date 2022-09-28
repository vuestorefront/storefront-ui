<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfButton
        :size="sizeModel"
        :variant="variantModel"
        :color="colorModel"
        :href="hrefModel"
        :disabled="disabledModel"
        :tile="tileModel"
        :icon="iconModel"
        :rounded="roundedModel"
        :block="blockModel"
        :tag="tagModel"
      >
        <template #prefix v-if="leftIconModel">
          <VsfIconVsfDiamond />
        </template>
        <template #default v-if="icon">
          <VsfIconVsfDiamond />
        </template>
        {{ childrenModel }}
        <template #suffix v-if="rightIconModel">
          <VsfIconVsfDiamond />
        </template>
      </VsfButton>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VsfButton from '@sfui/sfui/frameworks/vue/components/VsfButton/VsfButton.vue';
import {
  VsfButtonVariants,
  VsfButtonSizes,
  VsfButtonColors,
} from '@sfui/sfui/frameworks/vue/components/VsfButton/types';
import VsfIconVsfDiamond from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconVsfDiamond';
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
          title: 'Content',
          type: 'text',
          modelName: 'childrenModel',
        },
        {
          title: 'Href',
          type: 'text',
          modelName: 'hrefModel',
          description: 'Change <button> to <a> tag with `href` attribute',
        },
        {
          title: 'Tag',
          type: 'select',
          modelName: 'tagModel',
          options: ['button', 'a'],
          description: 'Explicitly set component tag',
        },
        {
          title: 'Variant',
          type: 'select',
          modelName: 'variantModel',
          options: Object.keys(VsfButtonVariants),
        },
        {
          title: 'Size',
          type: 'select',
          modelName: 'sizeModel',
          options: Object.keys(VsfButtonSizes),
        },
        {
          title: 'Color',
          type: 'select',
          modelName: 'colorModel',
          options: Object.keys(VsfButtonColors),
        },
        {
          title: 'Disabled',
          type: 'boolean',
          modelName: 'disabledModel',
        },
        {
          title: 'With Icon',
          type: 'boolean',
          modelName: 'icon',
          description: 'Example with icon content',
        },
        {
          title: 'Left Icon',
          type: 'boolean',
          modelName: 'leftIconModel',
          description: 'slotPrefix',
        },
        {
          title: 'Right Icon',
          type: 'boolean',
          modelName: 'rightIconModel',
          description: 'slotSuffix',
        },
        {
          title: 'Tile',
          type: 'boolean',
          modelName: 'tileModel',
          description: 'Remove radius from border',
        },
        {
          title: 'Icon',
          type: 'boolean',
          modelName: 'iconModel',
          description: 'Adjust button paddings for icons',
        },
        {
          title: 'Rounded',
          type: 'boolean',
          modelName: 'roundedModel',
          description: 'Full rounded borders',
        },
        {
          title: 'Block',
          type: 'boolean',
          modelName: 'blockModel',
          description: 'Full container width',
        },
      ],
      {
        childrenModel: ref('Hello'),
        hrefModel: ref(''),
        disabledModel: ref(false),
        icon: ref(false),
        leftIconModel: ref(false),
        rightIconModel: ref(false),
        variantModel: ref(VsfButtonVariants.contained),
        sizeModel: ref(VsfButtonSizes.base),
        colorModel: ref(VsfButtonColors.primary),
        tileModel: ref(),
        iconModel: ref(),
        roundedModel: ref(),
        blockModel: ref(),
        tagModel: ref('button'),
      },
    );
  },
});
</script>
