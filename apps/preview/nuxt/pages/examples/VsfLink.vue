<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfLink v-bind="state" :tag="tag === 'NuxtLink' ? NuxtLink : tag"> Link </VsfLink>
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
      NuxtLink: resolveComponent('NuxtLink'),
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'link',
            propType: 'string',
          },
          {
            type: 'select',
            modelName: 'tag',
            propType: '"a" | NuxtLink | RouterLink',
            propDefaultValue: 'NuxtLink | RouterLink | a',
            description:
              'At first component detect if Nuxt env available and use NuxtLink, then priority takes if component has prop on itself, then VsfConfig "linkTag" setting. When tag = "a" page is reloading otherwise route change is within app',
            options: [
              {
                label: 'default(NuxtLink)',
                value: 'NuxtLink',
              },
              'a',
            ],
          },
          {
            type: 'select',
            modelName: 'variant',
            propDefaultValue: 'primary',
            options: Object.keys(VsfLinkVariant),
          },
        ],
        {
          link: ref('/examples/VsfButton'),
          variant: ref(VsfLinkVariant.primary),
          tag: ref('NuxtLink'),
        },
      ),
    };
  },
});
</script>
