<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfLink v-bind="state">
      <template v-if="state.SlotDefault" #default>
        {{ state.SlotDefault }}
      </template>
    </SfLink>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfLink, SfLinkVariant } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { controlsAttrs, state } = prepareControls(
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
      description: 'Change element tag',
      propDefaultValue: 'a',
    },
    {
      type: 'select',
      modelName: 'variant',
      propType: 'SfLinkVariant',
      propDefaultValue: 'primary',
      options: Object.keys(SfLinkVariant),
    },
    {
      type: 'text',
      modelName: 'SlotDefault',
      description: 'Only for demonstration purposes. Default slot',
    },
  ],
  {
    SlotDefault: ref('Link'),
    href: ref('/examples/SfLink#'),
    variant: ref(SfLinkVariant.primary),
    tag: ref(),
  },
);
</script>
