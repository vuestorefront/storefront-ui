import { VsfBadge } from '@storefront-ui/react/components/VsfBadge';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { VsfIconBasket } from '@storefront-ui/react/components/VsfIcons';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'bordered',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'dot',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'invisible',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'value',
      },
    ],
    {
      bordered: false,
      dot: false,
      invisible: false,
      value: '',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <div className="relative bg-white inline-flex gap-4 items-end p-4">
        <VsfBadge
          bordered={state.get.bordered}
          dot={state.get.dot}
          invisible={state.get.invisible}
          value={state.get.value}
        >
          <VsfButton>unstyled</VsfButton>
        </VsfBadge>
        <VsfBadge
          bordered={state.get.bordered}
          dot={state.get.dot}
          invisible={state.get.invisible}
          value={state.get.value}
          className="text-white bg-secondary-600"
        >
          <VsfIconBasket />
        </VsfBadge>
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
