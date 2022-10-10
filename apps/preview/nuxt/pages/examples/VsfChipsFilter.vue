<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfChipsFilter
        v-model="modelValue"
        :size="variantModel"
        :disabled="disabledModel"
        :label="labelModel"
        :type="typeModel"
      >
        <template v-if="showThumbModel" #thumbnail>
          <div class="bg-black w-full h-full rounded-full" />
        </template>
      </VsfChipsFilter>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfChipsFilter from '@sfui/sfui/frameworks/vue/components/VsfChipsFilter/VsfChipsFilter.vue';
import { VsfChipsFilterVariants } from '@sfui/sfui/frameworks/vue/components/VsfChipsFilter/types';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfChipsFilterExample',
  components: {
    VsfChipsFilter,
    Controls,
  },
  setup() {
    return prepareControls(
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
          title: 'Show Thumb',
          type: 'boolean',
          modelName: 'showThumbModel',
          propType: 'boolean',
          description: 'Only for demonstration purposes',
        },
      ],
      {
        variantModel: ref(VsfChipsFilterVariants.base),
        disabledModel: ref(false),
        labelModel: ref('Label'),
        typeModel: ref('checkbox'),
        showThumbModel: ref(false),
        modelValue: ref(),
      },
    );
  },
});
</script>
