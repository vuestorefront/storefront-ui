<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfButton :size="sizeModel" :variant="variantModel" :link="linkModel" :disabled="disabledModel">
        <template #prefix v-if="leftIconModel">
          <VsfIconVsfDiamond class="pr-2.5" />
        </template>
        <template #default v-if="iconModel">
          <VsfIconVsfDiamond />
        </template>
        {{ childrenModel }}
        <template #suffix v-if="rightIconModel">
          <VsfIconVsfDiamond class="pl-2.5" />
        </template>
      </VsfButton>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VsfButton, { VsfButtonVariants, VsfButtonSizes } from '../../output/blocks/VsfButton/VsfButton.vue'
import  { VsfIconVsfDiamond } from "../../output/blocks/VsfIcons/vue";
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
    name: 'VsfButtonExample',
    components: {
      VsfButton,
      VsfIconVsfDiamond,
      Controls
    },
    setup() {
    return prepareControls([
      {
        title: 'Content',
        type: 'text',
        modelName: 'childrenModel',
      },
      {
        title: 'Link',
        type: 'text',
        modelName: 'linkModel',
      },
      {
        title: 'Variant',
        type: 'select',
        modelName: 'variantModel',
        options: [
          {
            label: 'Primary',
            value: VsfButtonVariants.primary,
          },{
            label: 'Secondary',
            value: VsfButtonVariants.secondary,
          },
          {
            label: 'Tertiary',
            value: VsfButtonVariants.tertiary,
          },
          {
            label: 'Destroy Primary',
            value: VsfButtonVariants["destroy-primary"],
          },
          {
            label: 'Destroy Secondary',
            value: VsfButtonVariants["destroy-secondary"],
          },
          {
            label: 'Destroy Tertiary',
            value: VsfButtonVariants["destroy-tertiary"],
          }
        ],
      },
      {
        title: 'Size',
        type: 'select',
        modelName: 'sizeModel',
        options: [VsfButtonSizes.sm, VsfButtonSizes.base, VsfButtonSizes.lg],
      },
      {
        title: 'Disabled',
        type: 'boolean',
        modelName: 'disabledModel',
      },
      {
        title: 'Icon',
        type: 'boolean',
        modelName: 'iconModel',
      },
      {
        title: 'Left Icon',
        type: 'boolean',
        modelName: 'leftIconModel',
      },
      {
        title: 'Right Icon',
        type: 'boolean',
        modelName: 'rightIconModel',
      },
    ], {
      childrenModel: ref('Hello'),
      linkModel: ref(),
      disabledModel: ref(false),
      iconModel: ref(false),
      leftIconModel: ref(false),
      rightIconModel: ref(false),
      variantModel: ref(VsfButtonVariants.primary),
      sizeModel: ref(VsfButtonSizes.base),
    })
   }
  });
</script>
