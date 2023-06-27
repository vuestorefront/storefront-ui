
<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfTextarea

    >
    </SfTextarea>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import SfTextarea from '@storefront-ui/vue/components/SfTextarea/SfTextarea.vue'
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'SfTextareaExample',
  components: {
    ComponentExample,
    SfTextarea
  },
  setup() {
    return {
      ...prepareControls([
          ], {
        variantModel: ref()
      })
    }
  }
};
</script>
