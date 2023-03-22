import { SfModal, SfButton } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'children',
        description: 'Only for demonstration purposes. Default slot, replaces example modal content',
      },
      {
        type: 'boolean',
        modelName: 'open',
        propType: 'boolean',
        propDefaultValue: false,
        description: 'If true modal is visible',
      },
      {
        type: 'text',
        modelName: 'as',
        propType: 'string',
        propDefaultValue: 'div',
        description: 'Tag of modal HTML element',
      },
      {
        type: 'boolean',
        modelName: 'disableClickAway',
        propType: 'boolean',
        propDefaultValue: false,
        description: "If true can't close modal when clicking outside of modal",
      },
      {
        type: 'boolean',
        modelName: 'disableEsc',
        propType: 'boolean',
        propDefaultValue: false,
        description: "If true can't modal drawer when using ESC keyboard button",
      },
    ],
    {
      children: undefined,
      open: undefined as undefined | boolean,
      as: undefined,
      disableClickAway: undefined as undefined | boolean,
      disableEsc: undefined as undefined | boolean,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfButton
        onClick={() => state.set((currentState) => ({ ...currentState, open: !currentState.open }))}
        type="button"
      >
        Open Modal
      </SfButton>

      <SfModal {...state.get} onClose={() => state.set({ open: false })} className="max-w-sm">
        {state.get.children || (
          <>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit
              voluptatibus deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut
              labore facilis minima debitis dolore.
            </p>
            <strong>You can close Modal by clicking outside or focus and use ESC button</strong>
          </>
        )}
      </SfModal>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
