<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfChipThumbnail :color="color" :size="size" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfChipThumbnail, VsfChipThumbnailSize } from '@storefront-ui/vue/components/VsfChipThumbnail/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfChipThumbnailExample',
  components: {
    ComponentExample,
    VsfChipThumbnail,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'color',
            propType: 'string',
            description: 'Sets color',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfChipThumbnailSize),
            propDefaultValue: VsfChipThumbnailSize.base,
            description: 'Component size',
            propType: 'VsfChipThumbnailSize',
          },
        ],
        {
          size: ref(VsfChipThumbnailSize.base),
          color: ref('linear-gradient(180deg, #4ADE80 0%, #A78BFA 100%)'),
        },
      ),
    };
  },
};
</script>
