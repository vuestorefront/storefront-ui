<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfChipsFilter v-model="modelValue" :size="size" :disabled="disabled" :label="label" :type="type">
        <template v-if="showThumb" #thumbnail>
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
import { VsfChipsFilter, VsfChipsFilterVariants } from '@storefront-ui/vue/components/VsfChipsFilter/index';
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
          type: 'text',
          modelName: 'label',
          propType: 'string',
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(VsfChipsFilterVariants),
          propDefaultValue: VsfChipsFilterVariants.base,
          propType: 'VsfChipsFilterVariants',
        },
        {
          type: 'select',
          modelName: 'type',
          options: ['checkbox', 'radio'],
          propDefaultValue: 'checkbox',
          propType: 'string',
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'showThumb',
          propType: 'boolean',
          description: 'Only for demonstration purposes',
        },
      ],
      {
        size: ref(VsfChipsFilterVariants.base),
        disabled: ref(false),
        label: ref('Label'),
        type: ref('checkbox'),
        showThumb: ref(false),
        modelValue: ref(),
      },
    );
  },
});
</script>
