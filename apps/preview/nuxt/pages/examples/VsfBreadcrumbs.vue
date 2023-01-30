<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfBreadcrumbs v-bind="state" />
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
            modelName: 'ariaLabelHomeButton',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'text',
            modelName: 'ariaLabelHomeIcon',
            propType: 'string',
            propDefaultValue: '',
          },
        ],
        {
          withIcon: ref(),
          ariaLabelHomeButton: ref('More button'),
          ariaLabelHomeIcon: ref('Home'),
          breadcrumbs: ref([
            { name: 'NuxtLink', link: '/examples/ListOfIcons' },
            { name: 'Page 2', link: '/page2' },
            { name: 'Page 3', link: '/page3' },
            { name: 'Page 4', link: '/page4' },
            { name: 'Page 5', link: '/page5' },
          ]),
        },
      ),
    };
  },
});
</script>
