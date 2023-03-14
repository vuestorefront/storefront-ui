<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfChip v-model="modelValue" :size="size" :square="square" :input-props="{ disabled, value }">
      <VsfThumbnail
        :size="size === VsfChipSize.sm ? VsfThumbnailSize.sm : VsfThumbnailSize.base"
        class="bg-gray-500 mr-2"
      />
      <span class="ml-2">{{ label }}</span>
    </VsfChip>
  </ComponentExample>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { VsfChip, VsfChipSize } from '@storefront-ui/vue/components/VsfChip/index';
import { VsfThumbnail, VsfThumbnailSize } from '@storefront-ui/vue/components/VsfThumbnail/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfChipExample',
  components: {
    VsfChip,
    ComponentExample,
    VsfThumbnail,
  },
  setup() {
    return {
      ...prepareControls(
        [
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
            modelName: 'disabled',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'square',
            propType: 'boolean',
          },
        ],
        {
          label: ref('Label'),
          size: ref(VsfChipSize.base),
          disabled: ref(),
          modelValue: ref(false),
          value: ref(''),
          square: ref(false),
        },
      ),
      VsfThumbnailSize,
      VsfChipSize,
    };
  },
});
</script>
