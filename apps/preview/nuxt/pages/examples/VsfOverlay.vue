<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfOverlay v-bind="state" @click="onClickHandler" />
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfOverlay from '@storefront-ui/vue/components/VsfOverlay/VsfOverlay.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfOverlayExample',
  components: {
    VsfOverlay,
    ComponentExample,
  },
  setup() {
    return {
      onClickHandler() {
        console.log('VsfOverlay clicked!');
      },
      ...prepareControls(
        [
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'visible',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'absolute',
            description:
              'Set `position:absolute` to component (require `position:relative` style attribute in parent component)',
          },
        ],
        {
          visible: ref(false),
          absolute: ref(false),
        },
      ),
    };
  },
});
</script>
