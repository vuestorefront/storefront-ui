import { VsfCounter } from '@storefront-ui/react/components/VsfCounter';
import { VsfCounterSize } from '@storefront-ui/react/components/VsfCounter/types';
import type { VsfCounterProps } from '@storefront-ui/react/components/VsfCounter/types';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<VsfCounterProps & { value: string; fill: string }>(
    [
      {
        type: 'text',
        modelName: 'value',
        propType: 'string',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfCounterSize),
        propDefaultValue: VsfCounterSize.base,
        propType: 'VsfCounterSize',
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
      size: VsfCounterSize.base,
      pill: false,
      fill: 'bg-white',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfCounter size={state.get.size} pill={state.get.pill} className={state.get.fill}>
        {state.get.value}
      </VsfCounter>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
