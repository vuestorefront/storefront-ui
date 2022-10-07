<template>
  <div class="e-page">
    <div class="e-page-component">
      <div class="mb-2">
        <VsfTag :size="sizeModel" :variant="variantModel" :badge="badgeModel">Hello</VsfTag>
      </div>
      <div class="mb-2">
        <VsfTag style="margin: 1rem auto" :size="sizeModel" :variant="variantModel" :badge="badgeModel">
          <template #prefix>
            <VsfIconDot class="vsf-icon-full" />
          </template>
          <span>Hello</span>
        </VsfTag>
        <div class="mb-2"></div>
        <VsfTag :size="sizeModel" :variant="variantModel" :badge="badgeModel">
          <span>Hello</span>
          <template #suffix>
            <VsfIconDot class="vsf-icon-full" />
          </template>
        </VsfTag>
      </div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VsfTag, { VsfTagVariants, VsfTagSizes } from '../../output/blocks/VsfTag/VsfTag.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot.vue';

export default defineComponent({
  name: 'ComponentExample',
  components: {
    VsfTag,
    Controls,
    VsfIconDot,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Variant',
          type: 'select',
          modelName: 'variantModel',
          options: Object.keys(VsfTagVariants),
          propDefaultValue: VsfTagVariants?.base,
          propType: 'string',
        },
        {
          title: 'Size',
          type: 'select',
          modelName: 'sizeModel',
          options: Object.keys(VsfTagSizes),
          propDefaultValue: VsfTagSizes?.base,
          propType: 'string',
        },
        {
          title: 'Badge',
          type: 'boolean',
          modelName: 'badgeModel',
          description: '',
          propDefaultValue: 'false',
          propType: 'boolean',
        },
      ],
      {
        VsfTagVariants,
        VsfTagSizes,
        sizeModel: ref(),
        variantModel: ref(),
        badgeModel: ref(),
      },
    );
  },
});
</script>
