import { VsfDialog } from '@storefront-ui/react/components/VsfDialog';
import { VsfButton, VsfButtonVariant } from '@storefront-ui/react/components/VsfButton';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'open',
        propDefaultValue: false,
        description: 'Controls whether the dialog is open or not',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'hideCloseButton',
        propDefaultValue: false,
        description: 'When true, hides the default "X" close button located in dialog\'s top-right corner',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'outsideClickClose',
        propDefaultValue: false,
        description: 'Controls whether click on outside overlay should close the dialog or not',
      },
    ],
    {
      open: false,
      hideCloseButton: false,
      outsideClickClose: false,
    },
  );

  const onClose = (buttonName: string) => {
    state.set({ open: false });
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert(`Closed via "${buttonName}" button`);
    });
  };

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfButton onClick={() => state.set({ open: true })}>Open dialog example</VsfButton>

      <VsfDialog
        {...state.get}
        onClose={(isClosed) => {
          state.set({ open: isClosed });
        }}
      >
        <section className="max-w-xs">
          <h3 className="typography-headline-2">Title</h3>
          <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          <footer className="mt-4 flex justify-end gap-4">
            <VsfButton variant={VsfButtonVariant.secondary} onClick={() => onClose('Close')}>
              Close
            </VsfButton>
            <VsfButton onClick={() => onClose('Accept')}>Accept</VsfButton>
          </footer>
        </section>
      </VsfDialog>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
