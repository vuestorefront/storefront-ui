import { VsfIconSize } from '@storefront-ui/react/components/VsfIcons/types';
import { VsfIconArrowDownward } from '@storefront-ui/react/components/VsfIcons';
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
        description: 'Its not a prop just example that by setting color on parent, icons changes its color',
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
      <div>
        Icon imported directly from `@storefront-ui/react/VsfIcons` <br />
        <div style={{ color: state.get.color }}>
          <VsfIconArrowDownward size={state.get.size} />
        </div>
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
