import { VsfPagination, VsfPaginationProps } from '@storefront-ui/react/components/VsfPagination';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const ariaLabelButtonFunctions = {
    CoolNumberTemplate: (page: number, totalPages: number) => `Cool number ${page} of ${totalPages}`,
    AnotherTemplate: (page: number, totalPages: number) => `Another ${page} in ${totalPages} in total`,
  };

  const { state, controls } = prepareControls<
    Omit<VsfPaginationProps, 'ariaLabelButton'> & { ariaLabelButton: keyof typeof ariaLabelButtonFunctions }
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
        // eslint-disable-next-line no-template-curly-in-string
        propDefaultValue: '(page: number, totalPages: number) => `Page ${page} of ${totalPages}`',
        options: Object.keys(ariaLabelButtonFunctions),
        description:
          'Changes "aria-label" for every button other then "prev" and "next". Inspect button elements in order to see changes',
      },
    ],
    {
      totalItems: 100,
      currentPage: 1,
      itemsPerPage: 10,
      maxVisiblePages: 3,
      prev: 'Previous',
      next: 'Next',
      hideButtonLabels: false,
      ariaLabelButton: 'CoolNumberTemplate',
    },
  );

  const setCurrentPage = (page: number) => {
    // eslint-disable-next-line no-console
    console.log('Current page: ', page);
  };

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfPagination
        totalItems={Number(state.get.totalItems)}
        currentPage={Number(state.get.currentPage)}
        itemsPerPage={Number(state.get.itemsPerPage)}
        maxVisiblePages={Number(state.get.maxVisiblePages)}
        prev={state.get.prev}
        next={state.get.next}
        hideButtonLabels={state.get.hideButtonLabels}
        ariaLabelButton={ariaLabelButtonFunctions[state.get.ariaLabelButton]}
        onPageUpdate={setCurrentPage}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
