<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfChipsFilter
        :size="variantModel"
        :disabled="disabledModel"
        :label="labelModel"
        :type="typeModel"
        v-model="modelValue"
        value="one"
      >
        <template #thumb v-if="!noThumbModel">
          <VsfIconDot class="vsf-icon-full" />
        </template>
      </VsfChipsFilter>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfChipsFilter, { VsfChipsFilterVariants } from '../../output/blocks/VsfChipsFilter/VsfChipsFilter.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot.vue';

export default {
  name: 'VsfChipsFilterExample',
  components: {
    Controls,
    VsfChipsFilter,
    VsfIconDot,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            title: 'Label',
            type: 'text',
            modelName: 'labelModel',
            propType: 'string',
          },
          {
            title: 'Variant',
            type: 'select',
            modelName: 'variantModel',
            options: Object.keys(VsfChipsFilterVariants),
            propDefaultValue: VsfChipsFilterVariants.base,
            propType: 'VsfChipsFilterVariants',
          },
          {
            title: 'Type',
            type: 'select',
            modelName: 'typeModel',
            options: ['radio', 'checkbox'],
            propDefaultValue: 'checkbox',
            propType: 'string',
          },
          {
            title: 'Disabled',
            type: 'boolean',
            modelName: 'disabledModel',
            propType: 'boolean',
          },
          {
            title: 'No Thumb',
            type: 'boolean',
            modelName: 'noThumbModel',
            propType: 'boolean',
            description: 'Only for demonstration purposes',
          },
        ],
        {
          variantModel: ref(VsfChipsFilterVariants.base),
          disabledModel: ref(),
          labelModel: ref('Label'),
          typeModel: ref(''),
          noThumbModel: ref(false),
          modelValue: ref(),
        },
      ),
    };
  },
};
</script>
