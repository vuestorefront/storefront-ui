import { SfDrawer, SfDrawerPlacement, SfButton } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'children',
        description: 'Only for demonstration purposes. Default slot, replaces example drawer content',
      },
      {
        type: 'boolean',
        modelName: 'open',
        propType: 'boolean',
        propDefaultValue: false,
        description: 'If true drawer is visible',
      },
      {
        type: 'select',
        modelName: 'placement',
        options: Object.keys(SfDrawerPlacement),
        propType: 'enum',
        propDefaultValue: SfDrawerPlacement.left,
        description: 'Placement of drawer',
      },
      {
        type: 'text',
        modelName: 'as',
        propType: 'string',
        propDefaultValue: 'aside',
        description: 'Tag of drawer HTML element',
      },
      {
        type: 'boolean',
        modelName: 'disableClickAway',
        propType: 'boolean',
        propDefaultValue: false,
        description: "If true can't close drawer when clicking outside drawer",
      },
      {
        type: 'boolean',
        modelName: 'disableEsc',
        propType: 'boolean',
        propDefaultValue: false,
        description: "If true can't close drawer when using ESC keyboard button",
      },
    ],
    {
      children: undefined,
      open: false,
      placement: SfDrawerPlacement.left,
      as: undefined,
      disableClickAway: undefined,
      disableEsc: undefined,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfButton onClick={() => state.set({ ...state.get, open: !state.get.open })}>Open Drawer</SfButton>

      <SfDrawer
        {...state.get}
        onClose={() => state.set({ open: false })}
        className="bg-neutral-50 p-3"
        style={{
          ...(state.get.placement === SfDrawerPlacement.left || state.get.placement === SfDrawerPlacement.right
            ? { maxWidth: '300px' }
            : {}),
        }}
      >
        {state.get.children || (
          <div>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit
              voluptatibus deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut
              labore facilis minima debitis dolore.
            </p>
            <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
          </div>
        )}
      </SfDrawer>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
