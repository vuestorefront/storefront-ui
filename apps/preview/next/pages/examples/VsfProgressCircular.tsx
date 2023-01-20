import { VsfProgressCircular, VsfProgressCircularSize } from '@storefront-ui/react/components/VsfProgressCircular';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfProgressCircularSize),
        propDefaultValue: VsfProgressCircularSize.base,
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
        type: 'boolean',
        propType: 'boolean',
        propDefaultValue: true,
        modelName: 'withValue',
        description: 'This prop is responsible for hiding/showing percentage value of progress',
      },
      {
        type: 'text',
        modelName: 'svgAriaLabel',
        propDefaultValue: 'Progress',
        propType: 'string',
        description: 'Aria label value for svg element',
      },
    ],
    {
      value: 0,
      size: VsfProgressCircularSize.base,
      withValue: true,
      svgAriaLabel: 'Progress',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfProgressCircular
        value={Number(state.get.value)}
        size={state.get.size}
        withValue={state.get.withValue}
        aria-label="Progressbar"
        svgAriaLabel={state.get.svgAriaLabel}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
