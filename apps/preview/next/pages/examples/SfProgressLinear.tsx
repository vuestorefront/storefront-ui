import { SfProgressLinear, SfProgressLinearSize, SfProgressSize } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        options: [...Object.keys(SfProgressLinearSize), ...Object.keys(SfProgressSize)],
        propDefaultValue: SfProgressSize.base,
        propType: 'SfProgressLinearSize | SfProgressSize',
        description:
          'This prop is responsible for progress size. There are 9 sizes: minimal, xs, sm, base, lg, xl, 2xl, 3xl, 4xl',
      },
      {
        type: 'range',
        modelName: 'value',
        propDefaultValue: 0,
        propType: 'number',
        description: 'Progress value',
      },
      {
        type: 'text',
        propType: 'string',
        propDefaultValue: 'Progress element',
        modelName: 'ariaLabel',
        description: 'Aria label value',
      },
    ],
    {
      value: 0,
      size: SfProgressSize.base,
      ariaLabel: 'Progress element',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfProgressLinear value={Number(state.get.value)} size={state.get.size} ariaLabel={state.get.ariaLabel} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
