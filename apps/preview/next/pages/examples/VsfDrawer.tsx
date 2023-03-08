import { VsfDrawer, VsfDrawerPlacement } from '@storefront-ui/react/components/VsfDrawer';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
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
        options: Object.keys(VsfDrawerPlacement),
        propType: 'enum',
        propDefaultValue: VsfDrawerPlacement.left,
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
      placement: VsfDrawerPlacement.left,
      as: undefined,
      disableClickAway: undefined,
      disableEsc: undefined,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfButton onClick={() => state.set({ ...state.get, open: !state.get.open })} type="button">
        Open Drawer
      </VsfButton>

      <VsfDrawer
        {...state.get}
        onClose={(isOpen: boolean) => state.set({ ...state.get, open: isOpen })}
        className="bg-neutral-50 p-3"
        style={{
          ...(state.get.placement === VsfDrawerPlacement.left || state.get.placement === VsfDrawerPlacement.right
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
      </VsfDrawer>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
