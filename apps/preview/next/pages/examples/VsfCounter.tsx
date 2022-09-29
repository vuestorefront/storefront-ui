import VsfCounter from '@sfui/sfui/frameworks/react/components/VsfCounter';
import { VsfCounterSizes } from "@sfui/sfui/frameworks/react/components/VsfCounter/types";
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Value',
        type: 'text',
        modelName: 'valueModel',
        propType: 'string',
      },
      {
        title: 'Size',
        type: 'select',
        modelName: 'sizeModel',
        options: Object.keys(VsfCounterSizes),
        propDefaultValue: VsfCounterSizes.base,
        propType: 'VsfCounterSizes',
      },
      {
        title: 'Pill',
        type: 'boolean',
        modelName: 'pillModel',
        propType: 'boolean',
      },
      {
        title: 'Fill color',
        type: 'select',
        modelName: 'fillModel',
        options: ['bg-white', 'bg-gray-100', 'bg-primary-200', 'bg-warning-200', 'bg-negative-200'],
        propType: '---',
        description: 'Only for demonstration purposes, background is controlled by custom class',
      },
    ],
    {
      valueModel: '123',
      sizeModel: VsfCounterSizes.base,
      pillModel: false,
      fillModel: 'bg-white',
    },
  );
  
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfCounter
          size={state.get.sizeModel}
          pill={state.get.pillModel}
          className={state.get.fillModel}
        >
          {state.get.valueModel}
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
