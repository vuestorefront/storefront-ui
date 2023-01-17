import { VsfNavigationTop } from '@storefront-ui/react/components/VsfNavigationTop';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import {
  VsfNavigationTopProps,
  VsfNavigationTopVariant,
} from '@storefront-ui/react/components//VsfNavigationTop/types';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const slotButtonCloseOptions = createControlsOptions({
  default: undefined,
  'Custom button': <VsfButton>Close</VsfButton>,
});

interface NavigationTopControls extends Omit<VsfNavigationTopProps, 'slotButtonClose'> {
  slotButtonClose: typeof slotButtonCloseOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<NavigationTopControls>(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propType: 'boolean',
        description:
          'NOTE: When navigation is opened click on switch control will loop, because you also click outside',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfNavigationTopVariant),
      },
      {
        type: 'select',
        modelName: 'slotButtonClose',
        propType: 'ReactNode',
        options: slotButtonCloseOptions.controlsOptions,
      },
    ],
    {
      open: false,
      variant: VsfNavigationTopVariant.auto,
      slotButtonClose: slotButtonCloseOptions.defaultOption,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <div className="relative">
        <VsfButton
          type="button"
          onClick={() => {
            state.set({ ...state.get, open: true });
          }}
        >
          Click to Open navigation top
        </VsfButton>

        <VsfNavigationTop
          open={state.get.open}
          onOpenChange={(val) => {
            state.set({ ...state.get, open: val });
          }}
          variant={state.get.variant}
          slotButtonClose={slotButtonCloseOptions.getValue(state.get.slotButtonClose)}
        >
          <div className="border border-primary-400">Column1</div>
          <div className="border border-primary-400">Column2</div>
          <div className="border border-primary-400">Column3</div>
          <div className="border border-primary-400">Column4</div>
          {state.get.variant !== VsfNavigationTopVariant['half-3'] &&
            state.get.variant !== VsfNavigationTopVariant['3-half'] && (
              <div className="border border-primary-400">Column5</div>
            )}
        </VsfNavigationTop>
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
