import { useEffect, useState } from 'react';
import { SfRatingButton, SfRatingButtonSize } from '@storefront-ui/react';
import { ExamplePageLayout } from '../examples';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const [max, setMax] = useState(5);
  const { state, controls } = prepareControls(
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
              step: 1,
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
        type: 'select',
        modelName: 'size',
        propType: 'SfRatingButtonSize',
        propDefaultValue: SfRatingButtonSize.base,
        options: Object.values(SfRatingButtonSize),
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
        propDefaultValue: false,
      },
    ],
    {
      value: 0,
      max,
      disabled: false,
      size: SfRatingButtonSize.base,
    },
  );

  useEffect(() => {
    setMax(state.get.max || 5);
  }, [state.get.max]);

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfRatingButton {...state.get} onChange={(value: number) => state.set({ value })} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
