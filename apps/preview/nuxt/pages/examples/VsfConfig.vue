<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfConfig :link-tag="linkTag === 'NuxtLink' ? NuxtLink : linkTag">
      <VsfLink :link="link" :variant="VsfLinkVariant.primary"> Link </VsfLink>
    </VsfConfig>
  </ComponentExample>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { VsfConfig } from '@storefront-ui/vue/components/VsfConfig/index';
import { VsfLink, VsfLinkVariant } from '@storefront-ui/vue/components/VsfLink/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfLinkExample',
  components: {
    ComponentExample,
    VsfLink,
    VsfConfig,
  },
  setup() {
    return {
      NuxtLink: resolveComponent('NuxtLink'),
      VsfLinkVariant,
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'link',
            propType: 'string',
          },
          {
            type: 'select',
            modelName: 'linkTag',
            propType: '"a" | NuxtLink | RouterLink',
            propDefaultValue: 'undefined',
            description:
              'Global setting of "linkTag" will be inherited by all VsfLinks, individual setting of "tag" prop on VsfLink component will have priority',
            options: [
              {
                label: 'default(NuxtLink)',
                value: 'NuxtLink',
              },
              'a',
            ],
          },
        ],
        {
          link: ref('/examples/VsfButton'),
          linkTag: ref('NuxtLink'),
        },
      ),
    };
  },
});
</script>
