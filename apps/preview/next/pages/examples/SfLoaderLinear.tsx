import { SfLoaderLinear, SfLoaderSize, SfLoaderLinearSize } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propType: 'SfLoaderLinearSize | SfLoaderSize',
        options: [...Object.keys(SfLoaderLinearSize), ...Object.keys(SfLoaderSize)],
        propDefaultValue: SfLoaderSize.base,
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
      size: SfLoaderSize.base,
      ariaLabel: 'loading',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfLoaderLinear className="w-10" {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
