import { VsfLoaderLinear, VsfLoaderSize, VsfLoaderLinearSize } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propType: 'VsfLoaderLinearSize | VsfLoaderSize',
        options: [...Object.keys(VsfLoaderLinearSize), ...Object.keys(VsfLoaderSize)],
        propDefaultValue: VsfLoaderSize.base,
        description: 'sets sizes of components',
      },
      {
        type: 'text',
        modelName: 'ariaLabel',
        propType: 'string',
        propDefaultValue: 'loading',
        description: 'sets description text available for screen readers',
      },
    ],
    {
      size: VsfLoaderSize.base,
      ariaLabel: 'loading',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfLoaderLinear className="w-10" {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
