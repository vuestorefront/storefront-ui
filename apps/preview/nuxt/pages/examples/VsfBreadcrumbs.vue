<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfBreadcrumbs :breadcrumbs="breadcrumbs" :with-icon="withIcon" />
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, resolveComponent, computed, ToRefs } from 'vue';
import VsfBreadcrumbs from '@storefront-ui/vue/components/VsfBreadcrumbs/VsfBreadcrumbs.vue';
import type { VsfBreadcrumbsProps } from '@storefront-ui/vue/components/VsfBreadcrumbs/types';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfBreadcrumbsExample',
  components: {
    VsfBreadcrumbs,
    ComponentExample,
  },
  setup() {
    const componentToShow = computed(() => {
      return resolveComponent('NuxtLink');
    });

    return {
      componentToShow,
      ...prepareControls<ToRefs<VsfBreadcrumbsProps>>(
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
        ],
        {
          withIcon: ref(),
          breadcrumbs: ref([
            { name: 'NuxtLink', linkTag: componentToShow, bindings: { to: '/examples/ListOfIcons' } },
            { name: 'Page 2', bindings: { href: '/page2' } },
            { name: 'Page 3', bindings: { href: '/page3' } },
            { name: 'Page 4', bindings: { href: '/page4' } },
            { name: 'Page 5', bindings: { href: '/page5' } },
          ]),
        },
      ),
    };
  },
});
</script>
