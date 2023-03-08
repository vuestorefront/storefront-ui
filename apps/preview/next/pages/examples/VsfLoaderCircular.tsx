import { VsfLoaderCircular } from '@storefront-ui/react/components/VsfLoaderCircular/index';
import { VsfLoaderSize } from '@storefront-ui/react/components/VsfLoaderCircular/types';
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
        options: [...Object.keys(VsfLoaderSize)],
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
      size: VsfLoaderSize.lg,
      ariaLabel: 'loading',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfLoaderCircular className="w-10" {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
