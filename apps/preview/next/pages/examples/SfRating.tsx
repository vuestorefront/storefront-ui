import { SfRating, SfRatingSize } from '@storefront-ui/react';
import type { SfRatingProps } from '@storefront-ui/react';
import { useEffect, useState } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const [max, setMax] = useState(5);
  const { state, controls } = prepareControls<SfRatingProps>(
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
        options: Object.keys(SfRatingSize),
        propDefaultValue: SfRatingSize.base,
        propType: 'SfRatingSize',
      },
    ],
    {
      value: 3,
      max,
      size: SfRatingSize.base,
      halfIncrement: false,
    },
  );

  useEffect(() => {
    setMax(state.get.max || 5);
  }, [state.get]);
  return (
    <ComponentExample controls={{ state, controls }}>
      <SfRating
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
