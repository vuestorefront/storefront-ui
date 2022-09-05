<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfChipsFilter
        :size="variantModel"
        :disabled="disabledModel"
        :label="labelModel"
        :thumbColor="thumbColorModel"
        :type="typeModel"
        :noThumb="noThumbModel"
        v-model="modelValue"
        value="one"
      >
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
          },
          {
            title: 'Label',
            type: 'text',
            modelName: 'labelModel',
            propType: 'string',
          },
          {
            title: 'Thumb Color',
            type: 'select',
            modelName: 'thumbColorModel',
            options: [
              {
                label: 'default',
                value: 'black',
              },
              {
                label: 'red',
                value: 'red',
              },
              {
                label: 'gradient',
                value: 'linear-gradient(90deg, rgba(0,36,0,1) 0%, rgba(9,121,74,1) 47%, rgba(0,212,255,1) 100%)',
              },
            ],
            propType: '---',
            description: 'Only for demonstration purpose',
          },
        ],
        {
          variantModel: ref(VsfChipsFilterVariants.base),
          disabledModel: ref(),
          labelModel: ref('Label'),
          typeModel: ref(''),
          thumbColorModel: ref(''),
          noThumbModel: ref(''),
          modelValue: ref(),
        },
      ),
    };
  },
};
</script>
