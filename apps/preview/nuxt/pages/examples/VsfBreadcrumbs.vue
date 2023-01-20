<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfBreadcrumbs
      :breadcrumbs="breadcrumbs"
      :with-icon="withIcon"
      :more-button-aria-label="moreButtonAriaLabel"
      :home-icon-aria-label="homeIconAriaLabel"
    />
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfBreadcrumbs from '@storefront-ui/vue/components/VsfBreadcrumbs/VsfBreadcrumbs.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfBreadcrumbsExample',
  components: {
    VsfBreadcrumbs,
    ComponentExample,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'withIcon',
            propType: 'boolean',
          },
          {
            type: 'json',
            modelName: 'breadcrumbs',
            propType: 'VsfBreadcrumbsType[]',
            propDefaultValue: '[]',
          },
          {
            type: 'text',
            modelName: 'moreButtonAriaLabel',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'text',
            modelName: 'homeIconAriaLabel',
            propType: 'string',
            propDefaultValue: '',
          },
        ],
        {
          withIcon: ref(),
          moreButtonAriaLabel: ref('More button'),
          homeIconAriaLabel: ref('Home'),
          breadcrumbs: ref([
            { name: 'NuxtLink', bindings: { link: '/examples/ListOfIcons' } },
            { name: 'Page 2', bindings: { link: '/page2' } },
            { name: 'Page 3', bindings: { link: '/page3' } },
            { name: 'Page 4', bindings: { link: '/page4' } },
            { name: 'Page 5', bindings: { link: '/page5' } },
          ]),
        },
      ),
    };
  },
});
</script>
