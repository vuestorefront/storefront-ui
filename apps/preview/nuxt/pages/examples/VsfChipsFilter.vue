<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfChipsFilter v-bind="state" v-model="modelValue">
      <template v-if="showThumb" #thumbnail>
        <div class="bg-black w-full h-full rounded-full" />
      </template>
    </VsfChipsFilter>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfChipsFilter, VsfChipsFilterVariant } from '@storefront-ui/vue/components/VsfChipsFilter/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfChipsFilterExample',
  components: {
    VsfChipsFilter,
    ComponentExample,
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
          options: Object.keys(VsfChipsFilterVariant),
          propDefaultValue: VsfChipsFilterVariant.base,
          propType: 'VsfChipsFilterVariant',
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
        size: ref(VsfChipsFilterVariant.base),
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
