import { VsfIconSize, VsfIconPackage } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'VsfIconSize.base',
        propType: 'VsfIconSize',
        options: Object.keys(VsfIconSize),
      },
      {
        type: 'select',
        modelName: 'color',
        description: '(not a prop) example showing possibility to change icons color',
        options: ['black', 'red', 'blue', 'green'],
      },
    ],
    {
      size: VsfIconSize.base,
      color: 'black',
    },
  );
  return (
    <ComponentExample controls={{ state, controls }}>
      VsfIconPackage imported from `@storefront-ui/react`: <br />
      <div style={{ color: state.get.color }}>
        <VsfIconPackage size={state.get.size} />
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
