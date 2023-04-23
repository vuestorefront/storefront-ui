import { $, component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfButton, SfDropdown } from '@storefront-ui/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';
import { SfPopoverPlacement, SfPopoverStrategy } from '@storefront-ui/shared';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
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
      ] satisfies ControlsType,
      state: {
        open: false,
        placement: SfPopoverPlacement.bottom,
        strategy: SfPopoverStrategy.absolute,
      },
    };
  });

  const close = $(() => (examplesState.data.state = { ...examplesState.data.state, open: false }));
  const toggle = $(
    () => (examplesState.data.state = { ...examplesState.data.state, open: !examplesState.data.state.open }),
  );

  return (
    <ComponentExample>
      <SfDropdown
        open={examplesState.data.state.open}
        // TODO - check missing props
        // strategy={examplesState.data.state.strategy}
        // placement={examplesState.data.state.placement}
        onClose$={close}
      >
        <div q:slot="trigger">
          <SfButton onClick$={toggle}>Toggle</SfButton>
        </div>
        <ul class="p-2 rounded bg-gray-100">
          <li>More</li>
          <li>About</li>
          <li>Settings</li>
        </ul>
      </SfDropdown>
    </ComponentExample>
  );
});
