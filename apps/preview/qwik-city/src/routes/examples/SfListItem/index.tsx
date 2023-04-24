import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfCounter, SfIconChevronRight, SfIconTune, SfListItem, SfListItemSize } from '@storefront-ui/qwik';
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
          modelName: 'as',
          description: 'Change a tag to any other tag',
        },
        {
          type: 'text',
          modelName: 'label',
          propType: 'string',
          description: 'Set label value',
        },
        {
          type: 'text',
          modelName: 'secondaryText',
          propType: 'string',
          description: 'Set secondary text',
        },
        {
          type: 'text',
          modelName: 'counter',
          propType: 'string',
          description: 'Set counter value',
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(SfListItemSize),
          description: 'Set size variant',
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          description: 'Show disabled state of component',
        },
        {
          type: 'boolean',
          modelName: 'selected',
          description: 'Show selected state of component',
        },
        {
          type: 'boolean',
          modelName: 'truncate',
          description: 'Show truncated version of secondary text',
        },
      ] satisfies ControlsType,
      state: {
        as: 'li',
        label: 'Label',
        size: SfListItemSize.base,
        counter: 123,
        secondaryText: 'Secondary text',
        disabled: undefined as boolean | undefined,
        selected: undefined as boolean | undefined,
        truncate: undefined as boolean | undefined,
      },
    };
  });

  return (
    <ComponentExample>
      {/* TODO - check all props e.g. counter */}
      <SfListItem
        class="max-w-sm"
        {...examplesState.data.state}
        showSlotPrefix={true}
        showSlotSuffix={true}
        onClick$={() => {
          examplesState.data.state = { ...examplesState.data.state, selected: !examplesState.data.state.selected };
        }}
      >
        <span class="break-words">
          {examplesState.data.state.label}
          {examplesState.data.state.counter && (
            <SfCounter
              class={`ml-2 font-normal ${examplesState.data.state.disabled ? '!text-disabled-500' : ''}`}
              size={examplesState.data.state.size === 'sm' ? 'sm' : 'base'}
            >
              {examplesState.data.state.counter}
            </SfCounter>
          )}
        </span>

        <div q:slot="prefix">
          <SfIconTune />
        </div>
        <div q:slot="suffix">
          <SfIconChevronRight />
        </div>
        <p
          class={{
            'text-xs text-neutral-500 break-words font-normal': true,
            truncate: examplesState.data.state.truncate,
            '!text-disabled-500': examplesState.data.state.disabled,
          }}
        >
          {examplesState.data.state.secondaryText}
        </p>
      </SfListItem>
    </ComponentExample>
  );
});
