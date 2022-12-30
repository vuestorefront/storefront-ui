import { VsfSideSheet } from '@storefront-ui/react/components/VsfSideSheet';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propType: 'boolean',
        propDefaultValue: false,
      },
      {
        type: 'boolean',
        modelName: 'overlayVisible',
        propType: 'boolean',
        propDefaultValue: false,
      },
      {
        type: 'boolean',
        modelName: 'leftSide',
        propType: 'boolean',
        propDefaultValue: true,
      },
      {
        type: 'boolean',
        modelName: 'permanent',
        propType: 'boolean',
        propDefaultValue: false,
        description: "If permanent prop is set to true then props open and overlay won't work",
      },
    ],
    {
      open: true,
      overlayVisible: false,
      leftSide: true,
      permanent: true,
    },
  );
  function onClose() {
    state.set({ ...state.get, open: false });
  }
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSideSheet
          open={state.get.open}
          overlayVisible={state.get.overlayVisible}
          leftSide={state.get.leftSide}
          permanent={state.get.permanent}
          onOpenChange={onClose}
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
