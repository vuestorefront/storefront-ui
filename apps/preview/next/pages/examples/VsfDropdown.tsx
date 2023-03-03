import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { VsfDropdown } from '@storefront-ui/react/components/VsfDropdown';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'isOpen',
        propType: 'boolean',
        propDefaultValue: 'false',
        isRequired: true,
      },
    ],
    {
      isOpen: false,
    },
  );

  const close = () => state.set({ ...state.get, isOpen: false });
  const toggle = () => state.set({ ...state.get, isOpen: !state.get.isOpen });

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfDropdown
        trigger={<VsfButton onClick={toggle}>Toggle</VsfButton>}
        isOpen={state.get.isOpen}
        onClose={close}
        placement="bottom-start"
      >
        <ul className="absolute p-2 w-max rounded bg-gray-100">
          <li>More</li>
          <li>About</li>
          <li>Settings</li>
        </ul>
      </VsfDropdown>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
