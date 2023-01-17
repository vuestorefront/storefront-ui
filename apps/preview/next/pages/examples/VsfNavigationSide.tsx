import { VsfNavigationSide, VsfNavigationSideProps } from '@storefront-ui/react/components/VsfNavigationSide';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const childrenOptions = createControlsOptions({
  text: <div className="p-6 border border-dashed">Content</div>,
  none: undefined,
});
const slotBannerOptions = createControlsOptions({
  text: <div className="p-6 border border-dashed">Banner</div>,
  none: undefined,
});

interface NavigationSideControls extends Omit<VsfNavigationSideProps, 'children' | 'slotBanner'> {
  children: typeof childrenOptions.defaultOption;
  slotBanner: typeof slotBannerOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<NavigationSideControls>(
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
        type: 'select',
        modelName: 'children',
        propType: 'ReactNode',
        description: `Component's children`,
        options: childrenOptions.controlsOptions,
      },
      {
        type: 'select',
        modelName: 'slotBanner',
        propType: 'ReactNode',
        description: 'Slot for banner content',
        options: slotBannerOptions.controlsOptions,
      },
    ],
    {
      open: false,
      overlayVisible: false,
      leftSide: true,
      permanent: false,
      slotBanner: slotBannerOptions.defaultOption,
      children: childrenOptions.defaultOption,
      logoAriaLabel: 'Vue Storefront Logo',
      logoLink: '/',
    },
  );
  function onClose() {
    state.set({ ...state.get, open: false });
  }
  return (
    <ComponentExample controls={{ state, controls }}>
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
        slotBanner={slotBannerOptions.getValue(state.get.slotBanner)}
        onOpenChange={onClose}
      >
        {childrenOptions.getValue(state.get.children)}
      </VsfNavigationSide>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
