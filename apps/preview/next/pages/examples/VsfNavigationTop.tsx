import VsfNavigationTop from '@sfui/sfui/frameworks/react/components/VsfNavigationTop/VsfNavigationTop';
import VsfButton from '@sfui/sfui/frameworks/react/components/VsfButton';
import { VsfNavigationTopVariant } from '@sfui/sfui/frameworks/react/components//VsfNavigationTop/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
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
    ],
    {
      open: false,
      variant: VsfNavigationTopVariant.auto,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
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
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
