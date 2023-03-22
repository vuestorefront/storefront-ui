<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfChip v-model="modelValue" :size="size" :square="square" :input-props="{ disabled, value }">
      <template #prefix>
        <SfThumbnail :size="size === SfChipSize.sm ? SfThumbnailSize.sm : SfThumbnailSize.base" class="bg-gray-500" />
      </template>
      {{ label }}
    </SfChip>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SfChip, SfChipSize, SfThumbnail, SfThumbnailSize } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'SfChipExample',
  components: {
    SfChip,
    ComponentExample,
    SfThumbnail,
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
            type: 'text',
            modelName: 'label',
            propType: 'string',
            description: 'Text next to thumbnail',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(SfChipSize),
            propDefaultValue: SfChipSize.base,
            propType: 'SfChipSize',
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
            description: 'Useful when only icon and paddings has to be equal',
          },
        ],
        {
          label: ref('Label'),
          size: ref(SfChipSize.base),
          disabled: ref(),
          modelValue: ref(false),
          value: ref(''),
          square: ref(false),
        },
      ),
      SfThumbnailSize,
      SfChipSize,
    };
  },
});
</script>
