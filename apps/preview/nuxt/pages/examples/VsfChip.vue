<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfChip v-bind="state" v-model="modelValue" :deletable="deletable" :value="value">
      <template v-if="slotPrefix" #prefix>
        <VsfChipThumbnail
          color="rgb(113 113 122)"
          :size="size === VsfChipSize.sm ? VsfChipThumbnailSize.sm : VsfChipThumbnailSize.base"
        />
      </template>
    </VsfChip>
  </ComponentExample>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { VsfChip, VsfChipSize } from '@storefront-ui/vue/components/VsfChip/index';
import { VsfChipThumbnail, VsfChipThumbnailSize } from '@storefront-ui/vue/components/VsfChipThumbnail/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfChipExample',
  components: {
    VsfChip,
    ComponentExample,
    VsfChipThumbnail,
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
          modelValue: ref(false),
          value: ref(''),
          deletable: ref(),
        },
      ),
      VsfChipThumbnailSize,
      VsfChipSize,
    };
  },
});
</script>
