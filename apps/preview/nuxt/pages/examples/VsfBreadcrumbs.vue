<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfBreadcrumbs :breadcrumbs="breadcrumbsModel" :withIcon="withIconModel"/>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, resolveComponent } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfBreadcrumbs from '@sfui/sfui/frameworks/vue/components/VsfBreadcrumbs/VsfBreadcrumbs.vue';
import type { VsfBreadcrumbType } from '@sfui/sfui/frameworks/vue/components/VsfBreadcrumbs/types';
import { computed } from '@vue/reactivity';

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
      ...prepareControls(
      [
          {
            title: 'WithIcon',
            type: 'boolean',
            modelName: 'withIconModel',
            propType: 'boolean',
          },
          {
            title: 'Breadcrumbs',
            type: 'json',
            modelName: 'breadcrumbsModel',
            propType: 'VsfBreadcrumbType[]',
            propDefaultValue : '[]'
          },
        ],
        {
          withIconModel: ref<boolean>(),
          breadcrumbsModel: ref<VsfBreadcrumbType[]>([
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
