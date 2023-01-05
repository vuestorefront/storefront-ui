import { VsfProgressLinear, VsfProgressLinearSizes } from '@storefront-ui/react/components/VsfProgressLinear';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfProgressLinearSizes),
        propDefaultValue: VsfProgressLinearSizes.base,
        propType: 'string',
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
        type: 'boolean',
        propType: 'boolean',
        propDefaultValue: true,
        modelName: 'withValue',
        description:
          "This prop is responsible for hiding/showing percentage value of progress. Size minimal doesn't have percentage value so changing this prop won't affect the component",
      },
    ],
    {
      value: 0,
      size: VsfProgressLinearSizes.base,
      withValue: true,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfProgressLinear value={Number(state.get.value)} size={state.get.size} withValue={state.get.withValue} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
