<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfTag :variant="variant" :strong="strong" :size="size" :label="label">
        <template v-if="showIcon" #icon>
          <div class="w-full h-full rounded-full" />
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
import VsfTag from '@sfui/sfui/frameworks/vue/components/VsfTag/VsfTag.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import { VsfTagVariants, VsfTagSizes } from '@sfui/sfui/frameworks/vue/components/VsfTag/types';

export default defineComponent({
  name: 'VsfTagExample',
  components: {
    VsfTag,
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
          },
          {
            type: 'boolean',
            modelName: 'strong',
            description: 'Set stronger color contrast',
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
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfTagSizes),
          },
        ],
        {
          label: ref('Label'),
          variant: ref<VsfTagVariants>(VsfTagVariants.gray),
          size: ref<VsfTagSizes>(VsfTagSizes.base),
          strong: ref(false),
          showIcon: ref(false),
        },
      ),
    };
  },
});
</script>
