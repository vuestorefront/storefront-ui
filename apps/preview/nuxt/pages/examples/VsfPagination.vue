<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfPagination
        :total-items="Number(totalItems)"
        :current-page="Number(currentPage)"
        :items-per-page="Number(itemsPerPage)"
        :max-visible-pages="Number(maxVisiblePages)"
        @update:current-page="handlePageChange"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfPagination from '@storefront-ui/vue/components/VsfPagination/VsfPagination.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfPaginationExample',
  components: {
    Controls,
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
        ],
        {
          totalItems: ref(100),
          currentPage: ref(1),
          itemsPerPage: ref(10),
          maxVisiblePages: ref(3),
        },
      ),
    };
  },
};
</script>
