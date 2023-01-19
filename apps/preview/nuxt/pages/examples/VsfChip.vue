<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfChip v-bind="state" v-model="modelValue" :deletable="deletable" :value="value">
      <template v-if="slotPrefix" #prefix>
        <VsfIconDot class="text-gray-500" :size="size" />
      </template>
    </VsfChip>
  </ComponentExample>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { VsfChip, VsfChipSize } from '@storefront-ui/vue/components/VsfChip/index';
import VsfIconDot from '@storefront-ui/vue/components/VsfIcons/VsfIconDot.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfChipExample',
  components: {
    VsfChip,
    VsfIconDot,
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
          type: 'boolean',
          modelName: 'modelValue',
          propType: 'boolean',
        },
        {
          type: 'text',
          modelName: 'value',
          propType: 'string',
          description: 'Sets value of the input checkbox element',
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(VsfChipSize),
          propDefaultValue: VsfChipSize.base,
          propType: 'VsfChipSize',
        },
        {
          type: 'boolean',
          modelName: 'deletable',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'slotPrefix',
          propType: 'boolean',
          description: 'Shows example of prefix slot content. Only for demonstration purposes',
        },
      ],
      {
        size: ref(VsfChipSize.base),
        disabled: ref(),
        label: ref('Label'),
        slotPrefix: ref(),
        modelValue: ref(true),
        value: ref(''),
        deletable: ref(),
      },
    );
  },
});
</script>
