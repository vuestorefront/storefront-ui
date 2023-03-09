<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfLink v-bind="state">
      <template v-if="SlotDefault" #default>
        {{ SlotDefault }}
      </template>
    </VsfLink>
  </ComponentExample>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { VsfLink, VsfLinkVariant } from '@storefront-ui/vue/components/VsfLink/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfLinkExample',
  components: {
    ComponentExample,
    VsfLink,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'href',
            propType: 'string',
            description: 'Only for demonstration purposes. Component href attribute',
          },
          {
            type: 'text',
            modelName: 'tag',
            propType: 'string | ConcreteComponent',
            propDefaultValue: 'a',
          },
          {
            type: 'select',
            modelName: 'variant',
            propDefaultValue: 'primary',
            options: Object.keys(VsfLinkVariant),
          },
          {
            type: 'text',
            modelName: 'SlotDefault',
            description: 'Only for demonstration purposes. Default slot',
          },
        ],
        {
          SlotDefault: ref('Link'),
          href: ref('/examples/VsfLink'),
          variant: ref(VsfLinkVariant.primary),
          tag: ref('a'),
        },
      ),
    };
  },
});
</script>
