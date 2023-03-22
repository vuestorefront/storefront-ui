import { SfCounter, SfCounterSize } from '@storefront-ui/react';
import type { SfCounterProps } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<SfCounterProps & { value: string; fill: string }>(
    [
      {
        type: 'text',
        modelName: 'value',
        propType: 'string',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(SfCounterSize),
        propDefaultValue: SfCounterSize.base,
        propType: 'SfCounterSize',
      },
      {
        type: 'boolean',
        modelName: 'pill',
        propType: 'boolean',
      },
      {
        type: 'select',
        modelName: 'fill',
        options: ['bg-white', 'bg-neutral-100', 'bg-primary-200', 'bg-warning-200', 'bg-negative-200'],
        propType: '---',
        description: 'Only for demonstration purposes, background is controlled by custom class',
      },
    ],
    {
      value: '123',
      size: SfCounterSize.base,
      pill: false,
      fill: '',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfCounter size={state.get.size} pill={state.get.pill} className={state.get.fill}>
        {state.get.value}
      </SfCounter>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
