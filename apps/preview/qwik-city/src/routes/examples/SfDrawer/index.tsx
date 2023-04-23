import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfButton, SfDrawer, SfDrawerPlacement } from '@storefront-ui/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'text',
          modelName: 'slot',
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
      ] satisfies ControlsType,
      state: {
        slot: undefined,
        open: false,
        placement: SfDrawerPlacement.left,
        as: undefined,
        disableClickAway: undefined,
        disableEsc: undefined,
      },
    };
  });

  return (
    <ComponentExample>
      <SfButton
        onClick$={() =>
          (examplesState.data.state = { ...examplesState.data.state, open: !examplesState.data.state.open })
        }
        type="button"
      >
        Open Drawer
      </SfButton>

      <SfDrawer
        {...examplesState.data.state}
        onClose$={() => (examplesState.data.state = { ...examplesState.data.state, open: false })}
        class="bg-neutral-50 p-3"
        style={{
          ...(examplesState.data.state.placement === SfDrawerPlacement.left ||
          examplesState.data.state.placement === SfDrawerPlacement.right
            ? { maxWidth: '300px' }
            : {}),
        }}
      >
        {examplesState.data.state.slot || (
          <div>
            <p class="mb-2">
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
});
