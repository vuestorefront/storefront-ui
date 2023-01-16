<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfTag v-bind="state" :aria-live="ariaLiveValue">
      <template v-if="showIcon" #icon>
        <VsfIconCheck :size="size === VsfTagSizes.base ? VsfIconSizeEnum.sm : VsfIconSizeEnum.xs" />
      </template>
    </VsfTag>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfTag, VsfTagVariants, VsfTagSizes, VsfTagAriaLiveValues } from '@storefront-ui/vue/components/VsfTag/index';
import { VsfIconSizeEnum, VsfIconCheck } from '@storefront-ui/vue/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfTagExample',
  components: {
    VsfTag,
    VsfIconCheck,
    ComponentExample,
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
