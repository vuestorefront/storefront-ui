import { SfIconChevronLeft, SfAccordionItem } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propDefaultValue: false,
        propType: 'boolean',
      },
    ],
    {
      open: false,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfAccordionItem
        open={state.get.open}
        onToggle={(open) => state.set({ open })}
        summary={
          <div className="flex justify-between p-2 bg-gray-100">
            <p>Click me to see the content</p>
            <SfIconChevronLeft className={`${state.get.open ? 'rotate-90' : '-rotate-90'}`} />
          </div>
        }
        className="rounded border"
      >
        <p className="p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </SfAccordionItem>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
