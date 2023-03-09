import { VsfProgressCircular, VsfProgressSize } from '@storefront-ui/react/components/VsfProgressCircular/index';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfProgressSize),
        propDefaultValue: VsfProgressSize.base,
        propType: 'string',
        description:
          'This prop is responsible for progress size. There are 8 sizes: xs, sm, base, lg, xl, 2xl, 3xl, 4xl',
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
        modelName: 'ariaLabel',
        propDefaultValue: 'Progress element',
        propType: 'string',
        description: 'Aria label value for svg element',
      },
    ],
    {
      value: 0,
      size: VsfProgressSize.base,
      withValue: true,
      ariaLabel: 'Progress element',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfProgressCircular value={Number(state.get.value)} size={state.get.size} ariaLabel={state.get.ariaLabel} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
