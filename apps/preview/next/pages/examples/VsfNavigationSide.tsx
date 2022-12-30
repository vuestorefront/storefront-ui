import { VsfNavigationSide } from '@storefront-ui/react/components/VsfNavigationSide';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
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
      {
        type: 'text',
        modelName: 'logoAriaLabel',
        propType: 'string',
        description: 'Set aria label for logo in navigation',
      },
      {
        type: 'text',
        modelName: 'logoLink',
        propType: 'string',
        description: 'Set link for logo in navigation',
      },
      {
        type: 'text',
        modelName: 'bannerContent',
        propType: 'string',
        description: 'Slot for banner content',
      },
      {
        type: 'text',
        modelName: 'defaultContent',
        propType: 'string',
        description: 'Slot for default content',
      },
    ],
    {
      open: false,
      overlayVisible: false,
      leftSide: true,
      permanent: false,
      bannerContent: 'I am a slot for banner content',
      defaultContent: 'I am a slot for accordion content',
      logoAriaLabel: 'Vue Storefront Logo',
      logoLink: '/',
    },
  );
  function onClose() {
    state.set({ ...state.get, open: false });
  }
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfButton
          type="button"
          onClick={() => {
            state.set({ ...state.get, open: true });
          }}
        >
          Click to open Navigation Side
        </VsfButton>
        <VsfNavigationSide
          open={state.get.open}
          overlayVisible={state.get.overlayVisible}
          leftSide={state.get.leftSide}
          permanent={state.get.permanent}
          logoLink={state.get.logoLink}
          logoAriaLabel={state.get.logoAriaLabel}
          slotBanner={<div className="p-6 border border-dashed">{state.get.bannerContent}</div>}
          onOpenChange={onClose}
        >
          <div className="p-6 border border-dashed">{state.get.defaultContent}</div>
        </VsfNavigationSide>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
