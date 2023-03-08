import { VsfLoaderLinear } from '@storefront-ui/react/components/VsfLoaderLinear/index';
import { VsfLoaderSize, VsfLoaderLinearSize } from '@storefront-ui/react/components/VsfLoaderLinear/types';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propType: 'VsfLoaderSize',
        options: [...Object.keys(VsfLoaderLinearSize), ...Object.keys(VsfLoaderSize)],
        propDefaultValue: VsfLoaderLinearSize.minimal,
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
      size: VsfLoaderLinearSize.minimal,
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
