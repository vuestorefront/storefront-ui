<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfBreadcrumbs :breadcrumbs="breadcrumbs" :withIcon="withIcon"/>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, resolveComponent, computed } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfBreadcrumbs from '@sfui/sfui/frameworks/vue/components/VsfBreadcrumbs/VsfBreadcrumbs.vue';
import type { VsfBreadcrumbsProps } from '@sfui/sfui/frameworks/vue/components/VsfBreadcrumbs/types';

export default defineComponent({
  name: 'VsfBreadcrumbsExample',
  components: {
    VsfBreadcrumbs,
    Controls,
  },
  setup() {
    const componentToShow = computed(() => {
      return resolveComponent('NuxtLink');
    });

    return {
      componentToShow,
      ...prepareControls<VsfBreadcrumbsProps>(
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
            propDefaultValue : '[]'
          },
        ],
        {
          withIcon: ref<boolean>(),
          breadcrumbs: ref([
            { name: 'NuxtLink', linkTag: componentToShow, bindings: {to: '/examples/VsfOtherComponent'} },
            { name: 'Page 2', bindings: {href: '/page2'} },
            { name: 'Page 3', bindings: {href: '/page3'} },
            { name: 'Page 4', bindings: {href: '/page4'} },
            { name: 'Page 5', bindings: {href: '/page5'} },
          ]),
        },
      )
    }
  },
});
</script>
