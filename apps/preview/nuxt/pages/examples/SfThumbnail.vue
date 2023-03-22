<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfThumbnail :size="size" class="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { SfThumbnail, SfThumbnailSize } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'SfThumbnailExample',
  components: {
    ComponentExample,
    SfThumbnail,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(SfThumbnailSize),
            propDefaultValue: SfThumbnailSize.base,
            description: 'Component size',
            propType: 'SfThumbnailSize',
          },
        ],
        {
          size: ref(SfThumbnailSize.base),
        },
      ),
    };
  },
};
</script>
