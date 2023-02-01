<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfDisplay :direction="direction" class="bg-gray-100 max-w-2xl">
      <template #media>
        <img :src="banner_placeholder" alt="" />
      </template>
      <VsfDisplayContent :title="title" :description="description">
        <VsfButton type="button">Browse deals</VsfButton>
      </VsfDisplayContent>
    </VsfDisplay>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfDisplay, VsfDisplayDirection } from '@storefront-ui/vue/components/VsfDisplay/index';
import { VsfButton } from '@storefront-ui/vue/components/VsfButton/index';
import { VsfDisplayContent } from '@storefront-ui/vue/components/VsfDisplayContent/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';
import banner_placeholder from '../../assets/fixture/banner_placeholder.png';
export default {
  name: 'VsfDisplayExample',
  components: {
    ComponentExample,
    VsfDisplay,
    VsfDisplayContent,
    VsfButton,
  },
  setup() {
    return {
      VsfDisplayDirection,
      banner_placeholder,
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'direction',
            propDefaultValue: VsfDisplayDirection.horizontal,
            description: 'Select direction of content inside component',
            options: Object.values(VsfDisplayDirection),
          },
        ],
        {
          direction: ref(VsfDisplayDirection.horizontal),
          title: ref('Banner title'),
          description: ref('Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
        },
      ),
    };
  },
};
</script>
