import {
  SfListItem,
  SfListItemProps,
  SfListItemSize,
  SfIconTune,
  SfIconChevronRight,
  SfCounter,
  SfIconProps,
} from '@storefront-ui/react';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import classNames from 'classnames';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Tune icon': (attrs: SfIconProps) => <SfIconTune {...attrs} />,
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Chevron right icon': (attrs: SfIconProps) => <SfIconChevronRight {...attrs} />,
});

interface ListItemControls extends Omit<SfListItemProps, 'slotPrefix' | 'slotSuffix'> {
  slotPrefix: typeof prefixSlotOptions.defaultOption;
  slotSuffix: typeof suffixSlotOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<
    ListItemControls & {
      label: string;
      counter: number;
      secondaryText: string;
      as: React.ElementType;
      truncate?: boolean;
    }
  >(
    [
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
        modelName: 'slotPrefix',
        propType: 'ReactNode',
        description: 'Custom component that could be placed before the element.',
        options: prefixSlotOptions.controlsOptions,
      },
      {
        type: 'select',
        modelName: 'slotSuffix',
        propType: 'ReactNode',
        description: 'Custom component that could be placed after the element.',
        options: suffixSlotOptions.controlsOptions,
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
    ],
    {
      as: 'li',
      label: 'Label',
      size: SfListItemSize.base,
      counter: 123,
      slotPrefix: prefixSlotOptions.defaultOption,
      slotSuffix: suffixSlotOptions.defaultOption,
      secondaryText: 'Secondary text',
      disabled: undefined as boolean | undefined,
      selected: undefined as boolean | undefined,
      truncate: undefined as boolean | undefined,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfListItem
        className="max-w-sm"
        {...state.get}
        slotPrefix={prefixSlotOptions.getValue(state.get.slotPrefix)?.({
          size: state.get.size === 'sm' ? 'sm' : 'base',
        })}
        slotSuffix={suffixSlotOptions.getValue(state.get.slotSuffix)?.({
          size: state.get.size === 'sm' ? 'sm' : 'base',
        })}
        onClick={() => state.set((currentState) => ({ ...currentState, selected: !currentState.selected }))}
      >
        <span className="break-words">
          {state.get.label}
          {state.get.counter && (
            <SfCounter
              className={classNames('ml-2 font-normal', { '!text-disabled-500': state.get.disabled })}
              size={state.get.size === 'sm' ? 'lg' : 'xl'}
            >
              {state.get.counter}
            </SfCounter>
          )}
        </span>

        <p
          className={classNames('text-xs text-neutral-500 break-words font-normal', {
            truncate: state.get.truncate,
            '!text-disabled-500': state.get.disabled,
          })}
        >
          {state.get.secondaryText}
        </p>
      </SfListItem>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
