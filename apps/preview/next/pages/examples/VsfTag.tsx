import VsfTag, { VsfTagVariants, VsfTagSizes } from '@sfui/sfui/frameworks/react/components/VsfTag';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
      },
      {
        type: 'boolean',
        modelName: 'strong',
        description: 'Set stronger color contrast',
      },
      {
        type: 'boolean',
        modelName: 'showIcon',
        description: 'Show or hide the icon',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfTagVariants),
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfTagSizes),
      },
    ],
    {
      label: 'Label',
      variant: VsfTagVariants.gray,
      size: VsfTagSizes.base,
      strong: false,
      showIcon: false,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfTag
          size={state.get.size}
          label={state.get.label}
          variant={state.get.variant}
          strong={state.get.strong}
          className="mr-2"
        >
          {state.get.showIcon ? <div className="w-full h-full rounded-full" /> : null}
        </VsfTag>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
