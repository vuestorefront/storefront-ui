import VsfDialog from '@sfui/sfui/frameworks/react/components/VsfDialog';
import VsfButton from '@sfui/sfui/frameworks/react/components/VsfButton';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propDefaultValue: false,
      },
      {
        type: 'boolean',
        modelName: 'hideCloseButton',
        propDefaultValue: true,
      },
    ],
    {
      open: false,
      hideCloseButton: false,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfDialog
          open={state.get.open}
          hideCloseButton={state.get.hideCloseButton}
          onClose={(isCLosed) => {
            state.set({ ...state.get, open: isCLosed });
          }}
        >
          <section>
            Header
            <br />
            Some cool dialog text here
          </section>{' '}
          <menu>
            <div className="flex justify-between">
              <VsfButton
                autoFocus
                onClick={() => {
                  state.set({ ...state.get, open: false });
                  setTimeout(() => {
                    alert('Canceled');
                  });
                }}
              >
                Close
              </VsfButton>
              <VsfButton
                onClick={() => {
                  state.set({ ...state.get, open: false });
                  setTimeout(() => {
                    alert('Accepted');
                  });
                }}
              >
                Accept
              </VsfButton>
            </div>
          </menu>
        </VsfDialog>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
