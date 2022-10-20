import VsfCounter from '@sfui/sfui/frameworks/react/components/VsfCounter';
import { VsfCounterSizes } from '@sfui/sfui/frameworks/react/components/VsfCounter/types';
import type { VsfCounterProps } from '@sfui/sfui/frameworks/react/components/VsfCounter/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<VsfCounterProps & { value: string; fillModel: string }>(
    [
      {
        type: 'text',
        modelName: 'value',
        propType: 'string',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfCounterSizes),
        propDefaultValue: VsfCounterSizes.base,
        propType: 'VsfCounterSizes',
      },
      {
        type: 'boolean',
        modelName: 'pill',
        propType: 'boolean',
      },
      {
        type: 'select',
        modelName: 'fill',
        options: ['bg-white', 'bg-gray-100', 'bg-primary-200', 'bg-warning-200', 'bg-negative-200'],
        propType: '---',
        description: 'Only for demonstration purposes, background is controlled by custom class',
      },
    ],
    {
      value: '123',
      size: VsfCounterSizes.base,
      pill: false,
      fillModel: 'bg-white',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfCounter size={state.get.size} pill={state.get.pill} className={state.get.fillModel}>
          {state.get.value}
        </VsfCounter>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
