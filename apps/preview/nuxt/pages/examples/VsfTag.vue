<template>
  <div class="e-page">
    <div class="e-page-component">
        <VsfTag :size="sizeModel" :variant="variantModel" :badge="badgeModel">Hello</VsfTag>
        <br/>
        <VsfTag style="margin: 1rem auto" :size="sizeModel" :variant="variantModel" :slotBefore="true" :badge="badgeModel">
            <template #before>
                <svg :width="sizeModel === 'sm' ? 16 : 20" :height="sizeModel === 'sm' ? 16 : 20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3334 9.99935C18.3334 14.6017 14.6025 18.3327 10.0001 18.3327C5.39771 18.3327 1.66675 14.6017 1.66675 9.99935C1.66675 5.39698 5.39771 1.66602 10.0001 1.66602C14.6025 1.66602 18.3334 5.39698 18.3334 9.99935Z"/>
                </svg>
            </template>
          <span>Hello</span>
        </VsfTag>
        <br/>
        <VsfTag :size="sizeModel" :variant="variantModel" :badge="badgeModel" :slotAfter="true">
            <span>Hello</span>
            <template #after>
                <svg :width="sizeModel === 'sm' ? 16 : 20" :height="sizeModel === 'sm' ? 16 : 20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3334 9.99935C18.3334 14.6017 14.6025 18.3327 10.0001 18.3327C5.39771 18.3327 1.66675 14.6017 1.66675 9.99935C1.66675 5.39698 5.39771 1.66602 10.0001 1.66602C14.6025 1.66602 18.3334 5.39698 18.3334 9.99935Z"/>
                </svg>
            </template>
        </VsfTag>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VsfTag, { VsfTagVariants, VsfTagSizes } from '../../output/blocks/VsfTag/VsfTag.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'ComponentExample',
  components: {
    VsfTag,
    Controls
  },
  setup() {
    return prepareControls([
      {
      title: 'Variant',
      type: 'select',
      modelName: 'variantModel',
      options: Object.keys(VsfTagVariants),
      propDefaultValue: VsfTagVariants.base,
      propType: 'string'
    },
    {
      title: 'Size',
      type: 'select',
      modelName: 'sizeModel',
      options: Object.keys(VsfTagSizes),
      propDefaultValue: VsfTagSizes.base,
      propType: 'string'
    },
    {
      title: 'Badge',
      type: 'boolean',
      modelName: 'badgeModel',
      description: '',
      propDefaultValue: 'false',
      propType: 'boolean',
    },
    ], {
      VsfTagVariants,
      VsfTagSizes,
      sizeModel: ref(),
      variantModel: ref(),
      badgeModel: ref()
    }
)
  },
});
</script>
