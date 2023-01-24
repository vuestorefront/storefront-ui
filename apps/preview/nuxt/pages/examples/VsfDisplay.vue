<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div>
      <VsfDisplay :direction="direction" class="bg-gray-100">
        <template #media>
          <img :src="banner_placeholder" alt="" />
        </template>
        <!-- TODO: use DisplayContent for this example after it's implemented -->
        <div class="pb-4">
          <h1 class="text-2xl md:text-4xl font-medium">Banner title</h1>
        </div>
        <div class="pb-6">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <VsfButton type="button">Browse deals</VsfButton>
      </VsfDisplay>
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfDisplay, VsfDisplayDirection } from '@storefront-ui/vue/components/VsfDisplay/index';
import { VsfButton } from '@storefront-ui/vue/components/VsfButton/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';
import banner_placeholder from '../../assets/fixture/banner_placeholder.png';
export default {
  name: 'VsfDisplayExample',
  components: {
    ComponentExample,
    VsfDisplay,
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
        },
      ),
    };
  },
};
</script>
