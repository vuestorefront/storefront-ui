import { SfLoaderCircular, SfLoaderSize } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propType: 'SfLoaderSize',
        options: [...Object.keys(SfLoaderSize)],
        description: 'sets sizes of components',
      },
      {
        type: 'text',
        modelName: 'ariaLabel',
        propType: 'string',
        propDefaultValue: 'loading',
        description: 'sets text available for screen readers',
      },
    ],
    {
      size: SfLoaderSize.lg,
      ariaLabel: 'loading',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfLoaderCircular className="w-10" {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
