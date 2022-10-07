<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfBreadcrumbs :breadcrumbs="breadcrumbsModel" :with-icon="withIconModel" />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfBreadcrumbs from '../../output/blocks/VsfBreadcrumbs/VsfBreadcrumbs.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfBreadcrumbsExample',
  components: {
    VsfBreadcrumbs,
    Controls,
  },
  setup() {
    return prepareControls(
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
          propDefaultValue: '[]',
        },
      ],
      {
        withIconModel: ref(),
        breadcrumbsModel: ref([
          { name: 'Page 1', link: '/page1' },
          { name: 'Page 2', link: '/page1' },
          { name: 'Page 3', link: '/page1' },
          { name: 'Page 4', link: '/page1' },
          { name: 'Page 5', link: '/page1' },
        ]),
      },
    );
  },
});
</script>
