<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfTag :variant="variant" :strong="strong" :size="size" :label="label" :aria-live="ariaLiveValue">
        <template v-if="showIcon" #icon>
          <VsfIconCheck :size="size === VsfTagSizes.base ? VsfIconSizeEnum.sm : VsfIconSizeEnum.xs" />
        </template>
      </VsfTag>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfTag, VsfTagVariants, VsfTagSizes, VsfTagAriaLiveValues } from '@storefront-ui/vue/components/VsfTag/index';
import { VsfIconSizeEnum, VsfIconCheck } from '@storefront-ui/vue/components/VsfIcons/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfTagExample',
  components: {
    VsfTag,
    VsfIconCheck,
    Controls,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'label',
            propType: 'string',
            description: 'Set label value',
          },
          {
            type: 'boolean',
            modelName: 'strong',
            description: 'Set stronger color contrast and font weight',
          },
          {
            type: 'boolean',
            modelName: 'showIcon',
            description: 'Show or hide the icon',
          },
          {
            type: 'select',
            modelName: 'variant',
            options: Object.keys(VsfTagVariants),
            description: 'Set color variant',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfTagSizes),
            description: 'Set size variant',
          },
          {
            type: 'select',
            modelName: 'ariaLiveValue',
            options: ['polite', 'off', 'assertive'],
            description: 'Set aria-live value (implementation only)',
          },
        ],
        {
          label: ref('Label'),
          variant: ref<VsfTagVariants>(VsfTagVariants.gray),
          size: ref<VsfTagSizes>(VsfTagSizes.base),
          strong: ref(false),
          showIcon: ref(false),
          ariaLiveValue: ref<VsfTagAriaLiveValues>(VsfTagAriaLiveValues.polite),
        },
      ),
      VsfIconSizeEnum,
      VsfTagSizes,
    };
  },
});
</script>
