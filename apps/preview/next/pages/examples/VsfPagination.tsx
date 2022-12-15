import VsfPagination from '@sfui/sfui/frameworks/react/components/VsfPagination/VsfPagination';
import Controls, { prepareControls } from '../../components/utils/Controls';
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
    ],
    {
      totalItems: 100,
      currentPage: 1,
      itemsPerPage: 10,
      maxVisiblePages: 3,
    },
  );

  const setCurrentPage = (page: number) => {
    console.log('Current page: ', page);
  };

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfPagination
          totalItems={Number(state.get.totalItems)}
          currentPage={Number(state.get.currentPage)}
          itemsPerPage={Number(state.get.itemsPerPage)}
          maxVisiblePages={Number(state.get.maxVisiblePages)}
          handlePageUpdate={setCurrentPage}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
