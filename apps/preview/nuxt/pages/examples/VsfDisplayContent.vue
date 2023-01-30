<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div>
      <VsfDisplayContent v-bind="state">
        <VsfButton type="button">Browse deals</VsfButton>
      </VsfDisplayContent>
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfButton } from '@storefront-ui/vue/components/VsfButton/index';
import { VsfDisplayContent } from '@storefront-ui/vue/components/VsfDisplayContent/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';
export default {
  name: 'VsfDisplayExample',
  components: {
    ComponentExample,
    VsfDisplayContent,
    VsfButton,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'title',
            propDefaultValue: '',
            description: 'Set title for Display Content component',
          },
          {
            type: 'text',
            modelName: 'titleTag',
            propDefaultValue: '',
            description: 'Set title tag for Display Content component',
          },
          {
            type: 'text',
            modelName: 'subtitle',
            propDefaultValue: '',
            description: 'Set subtitle for Display Content component',
          },
          {
            type: 'text',
            modelName: 'description',
            propDefaultValue: '',
            description: 'Set description for Display Content component',
          },
        ],
        {
          subtitle: ref('Subtitle'),
          title: ref('Banner title'),
          titleTag: ref('h1'),
          description: ref('Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
        },
      ),
    };
  },
};
</script>
