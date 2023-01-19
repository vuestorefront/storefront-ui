import { VsfPagination } from '@storefront-ui/react/components/VsfPagination';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
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
      totalItems: 100,
      currentPage: 1,
      itemsPerPage: 10,
      maxVisiblePages: 3,
      prev: 'Previous',
      next: 'Next',
      hideButtonLabels: false,
    },
  );

  const setCurrentPage = (page: number) => {
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
        onPageUpdate={setCurrentPage}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
