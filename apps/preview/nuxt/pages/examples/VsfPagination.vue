<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfPagination
      :total-items="Number(totalItems)"
      :current-page="Number(currentPage)"
      :items-per-page="Number(itemsPerPage)"
      :max-visible-pages="Number(maxVisiblePages)"
      :prev="prev"
      :next="next"
      :hide-button-labels="hideButtonLabels"
      @update:current-page="handlePageChange"
    />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import VsfPagination from '@storefront-ui/vue/components/VsfPagination/VsfPagination.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfPaginationExample',
  components: {
    ComponentExample,
    VsfPagination,
  },
  setup() {
    return {
      handlePageChange: (page) => {
        console.log('Current page: ', page);
      },
      ...prepareControls(
        [
          {
            type: 'text',
            propType: 'number',
            modelName: 'totalItems',
          },
          {
            type: 'text',
            propType: 'number',
            modelName: 'currentPage',
          },
          {
            type: 'text',
            propType: 'number',
            modelName: 'itemsPerPage',
          },
          {
            type: 'text',
            propType: 'number',
            modelName: 'maxVisiblePages',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'prev',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'next',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'hideButtonLabels',
          },
        ],
        {
          totalItems: ref(100),
          currentPage: ref(1),
          itemsPerPage: ref(10),
          maxVisiblePages: ref(3),
          prev: ref('Previous'),
          next: ref('Next'),
          hideButtonLabels: ref(),
        },
      ),
    };
  },
};
</script>
