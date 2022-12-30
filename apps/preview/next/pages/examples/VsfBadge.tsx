import { VsfBadge } from '@storefront-ui/react/components/VsfBadge';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { VsfIconBasket } from '@storefront-ui/react/components/VsfIcons';
import Controls, { prepareControls } from '../../components/utils/Controls';
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
    <div className="e-page">
      <div className="e-page-component relative">
        <div className="bg-white inline-flex gap-4 items-end p-4">
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
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
