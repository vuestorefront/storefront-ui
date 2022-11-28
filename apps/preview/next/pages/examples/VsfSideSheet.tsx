import VsfSideSheet from '@sfui/sfui/frameworks/react/components/VsfSideSheet/VsfSideSheet';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'isOpen',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'overlayVisible',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'leftSide',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'withButton',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'permanent',
        propType: 'boolean',
      },
    ],
    {
      isOpen: true,
      overlayVisible: false,
      leftSide: true,
      withButton: true,
      permanent: false,
    },
  );
  function onClose() {
    state.set({ ...state.get, isOpen: false });
  }
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSideSheet
          isOpen={state.get.isOpen}
          overlayVisible={state.get.overlayVisible}
          leftSide={state.get.leftSide}
          withButton={state.get.withButton}
          permanent={state.get.permanent}
          onClick={onClose}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus
            deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis
            minima debitis dolore.
          </div>
        </VsfSideSheet>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
