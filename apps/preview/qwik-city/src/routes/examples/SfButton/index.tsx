import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfButton, SfButtonSize, SfButtonVariant, SfIconLock, SfIconSearch } from '@storefront-ui/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { EXAMPLES_STATE } from '../layout';
import { ControlsType } from '~/components/utils/types';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'text',
          modelName: 'slot',
          description: 'Only for demonstration purposes. Default slot',
        },
        {
          type: 'text',
          modelName: 'as',
          description: 'Change button tag to a tag or any other tag',
        },
        {
          type: 'select',
          modelName: 'variant',
          options: Object.keys(SfButtonVariant),
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(SfButtonSize),
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          description: 'Disabled state',
        },
        {
          type: 'boolean',
          modelName: 'square',
          description: 'Remove border radius',
        },
      ] satisfies ControlsType,
      state: {
        slot: 'Hello',
        disabled: undefined,
        variant: SfButtonVariant.primary,
        size: SfButtonSize.base,
        square: undefined,
      },
    };
  });

  return (
    <ComponentExample componentContainerClassName="space-x-2">
      <SfButton {...examplesState.data.state} class="max-w-[200px]">
        <div q:slot="prefix">
          <SfIconSearch />
        </div>

        <div q:slot="suffix">
          <SfIconLock />
        </div>
        {examplesState.data.state.slot}
      </SfButton>
    </ComponentExample>
  );
});
