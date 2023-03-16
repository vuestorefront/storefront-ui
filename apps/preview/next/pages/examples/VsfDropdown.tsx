import { VsfButton, VsfDropdown, VsfPopoverPlacement, VsfPopoverStrategy } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propType: 'boolean',
        isRequired: true,
        description: 'Controls floating content visibility',
      },
      {
        type: 'select',
        modelName: 'placement',
        propType: 'VsfPopoverPlacement',
        propDefaultValue: VsfPopoverPlacement.bottom,
        options: Object.values(VsfPopoverPlacement),
        description:
          'Dropdown default placement - may be automatically shifted or flipped based on screen size and dropdown position',
      },
      {
        type: 'select',
        modelName: 'strategy',
        propType: 'VsfPopoverStrategy',
        propDefaultValue: VsfPopoverStrategy.absolute,
        options: Object.values(VsfPopoverStrategy),
        description: 'Dropdown positioning strategy',
      },
    ],
    {
      open: false,
      placement: VsfPopoverPlacement.bottom,
      strategy: VsfPopoverStrategy.absolute,
    },
  );

  const close = () => state.set({ open: false });
  const toggle = () => state.set((currentState) => ({ ...currentState, open: !currentState.open }));

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfDropdown
        trigger={<VsfButton onClick={toggle}>Toggle</VsfButton>}
        open={state.get.open}
        strategy={state.get.strategy}
        placement={state.get.placement}
        onClose={close}
      >
        <ul className="p-2 rounded bg-gray-100">
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
