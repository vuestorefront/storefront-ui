import { SfButton, SfDropdown, SfPopoverPlacement, SfPopoverStrategy } from '@storefront-ui/react';
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
        propType: 'SfPopoverPlacement',
        propDefaultValue: SfPopoverPlacement.bottom,
        options: Object.values(SfPopoverPlacement),
        description:
          'Dropdown default placement - may be automatically shifted or flipped based on screen size and dropdown position',
      },
      {
        type: 'select',
        modelName: 'strategy',
        propType: 'SfPopoverStrategy',
        propDefaultValue: SfPopoverStrategy.absolute,
        options: Object.values(SfPopoverStrategy),
        description: 'Dropdown positioning strategy',
      },
    ],
    {
      open: false,
      placement: SfPopoverPlacement.bottom,
      strategy: SfPopoverStrategy.absolute,
    },
  );

  const close = () => state.set({ open: false });
  const toggle = () => state.set((currentState) => ({ ...currentState, open: !currentState.open }));

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfDropdown
        trigger={<SfButton onClick={toggle}>Toggle</SfButton>}
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
      </SfDropdown>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
