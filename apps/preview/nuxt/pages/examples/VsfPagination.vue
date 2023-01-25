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
      :aria-label-button="ariaLabelButtonFunctions[ariaLabelButton]"
      @update:current-page="onPageChange"
    />
  </ComponentExample>
</template>

<script lang="ts">
import { ref, ToRefs } from 'vue';
import { VsfPagination, VsfPaginationProps } from '@storefront-ui/vue/components/VsfPagination/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfPaginationExample',
  components: {
    ComponentExample,
    VsfPagination,
  },
  setup() {
    const ariaLabelButtonFunctions = {
      CoolNumberTemplate: (page: number, totalPages: number) => `Cool number ${page} of ${totalPages}`,
      AnotherTemplate: (page: number, totalPages: number) => `Another ${page} in ${totalPages} in total`,
    };

    return {
      onPageChange: (page: number) => {
        console.log('Current page: ', page);
      },
      ariaLabelButtonFunctions,
      ...prepareControls<
        ToRefs<Omit<VsfPaginationProps, 'ariaLabelButton'> & { ariaLabelButton: keyof typeof ariaLabelButtonFunctions }>
      >(
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
          {
            type: 'select',
            propType: 'Function',
            modelName: 'ariaLabelButton',
            propDefaultValue: '(page: number, totalPages: number) => `Page ${page} of ${totalPages}`',
            options: Object.keys(ariaLabelButtonFunctions),
            description:
              'Changes "aria-label" for every button other then "prev" and "next". Inspect button elements in order to see changes',
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
          ariaLabelButton: ref('CoolNumberTemplate'),
        },
      ),
    };
  },
};
</script>
