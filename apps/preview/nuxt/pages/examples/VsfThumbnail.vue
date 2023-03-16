<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfThumbnail :size="size" class="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfThumbnail, VsfThumbnailSize } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfThumbnailExample',
  components: {
    ComponentExample,
    VsfThumbnail,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfThumbnailSize),
            propDefaultValue: VsfThumbnailSize.base,
            description: 'Component size',
            propType: 'VsfThumbnailSize',
          },
        ],
        {
          size: ref(VsfThumbnailSize.base),
        },
      ),
    };
  },
};
</script>
