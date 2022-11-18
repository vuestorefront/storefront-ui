<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfButton
        :size="size"
        :variant="variant"
        :link="link"
        :disabled="disabled"
        :tile="tile"
        :icon="icon"
        :rounded="rounded"
        :block="block"
        :tag="tag"
        :type="link ? null : 'button'"
      >
        <template v-if="ExampleLeftIcon" #prefix>
          <VsfIconVsfDiamond />
        </template>
        <VsfIconVsfDiamond v-if="ExampleIconContent" />
        <template v-else>
          {{ ExampleTextContent }}
        </template>
        <template v-if="ExampleRightIcon" #suffix>
          <VsfIconVsfDiamond />
        </template>
      </VsfButton>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
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
          modelName: 'ExampleTextContent',
          description: 'Only for demonstration purposes.',
        },
        {
          type: 'boolean',
          modelName: 'ExampleIconContent',
          description: 'Only for demonstration purposes.',
        },
        {
          type: 'boolean',
          modelName: 'ExampleLeftIcon',
          description: 'slotPrefix',
        },
        {
          type: 'boolean',
          modelName: 'ExampleRightIcon',
          description: 'slotSuffix',
        },
        {
          type: 'text',
          modelName: 'link',
          description: 'Change <button> to <a> tag with `href` attribute',
        },
        {
          type: 'select',
          modelName: 'tag',
          options: ['button', 'a'],
          description: 'Explicitly set component tag',
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
          modelName: 'tile',
          description: 'Remove border radius',
        },
        {
          type: 'boolean',
          modelName: 'icon',
          description: 'Adjust button paddings for icons',
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
        ExampleTextContent: ref('Hello'),
        ExampleLeftIcon: ref(false),
        ExampleRightIcon: ref(false),
        ExampleIconContent: ref(false),
        link: ref(),
        disabled: ref(false),
        variant: ref<VsfButtonVariants>(VsfButtonVariants.primary),
        size: ref<VsfButtonSizes>(VsfButtonSizes.base),
        tile: ref(false),
        icon: ref(false),
        rounded: ref(false),
        block: ref(false),
        tag: ref('button'),
      },
    );
  },
});
</script>
