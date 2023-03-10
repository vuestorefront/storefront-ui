import { VsfRating, VsfRatingSize } from '@storefront-ui/react/components/VsfRating';
import type { VsfRatingProps } from '@storefront-ui/react/components/VsfRating/types';
import { useEffect, useState } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const [max, setMax] = useState(5);
  const { state, controls } = prepareControls<VsfRatingProps>(
    [
      {
        type: 'range',
        modelName: 'value',
        propDefaultValue: 0,
        propType: 'number',
        options: [
          {
            bind: {
              min: 0,
              max,
              step: 0.1,
            },
          },
        ],
      },
      {
        type: 'range',
        modelName: 'max',
        propDefaultValue: 5,
        propType: 'number',
        options: [
          {
            bind: {
              min: 1,
              step: 1,
              max: 10,
            },
          },
        ],
      },
      {
        type: 'boolean',
        modelName: 'halfIncrement',
        propType: 'boolean',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfRatingSize),
        propDefaultValue: VsfRatingSize.base,
        propType: 'VsfRatingSize',
      },
    ],
    {
      value: 3,
      max,
      size: VsfRatingSize.base,
      halfIncrement: false,
    },
  );

  useEffect(() => {
    setMax(state.get.max || 5);
  }, [state.get]);
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfRating
        value={Number(state.get.value)}
        max={Number(state.get.max)}
        size={state.get.size}
        halfIncrement={state.get.halfIncrement}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
