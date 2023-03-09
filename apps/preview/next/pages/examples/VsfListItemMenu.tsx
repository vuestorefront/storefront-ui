import {
  VsfListItemMenu,
  VsfListItemMenuProps,
  VsfListItemMenuSize,
} from '@storefront-ui/react/components/VsfListItemMenu';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { VsfIconSize } from '@storefront-ui/react/components/VsfIcons/types';
import { VsfIconCheck } from '~/../../../packages/sfui/frameworks/react/components/VsfIcons';
import classNames from 'classnames';
import { VsfCounter } from '@storefront-ui/react/components/VsfCounter';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Check icon': <VsfIconCheck size={VsfIconSize.sm} />,
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Check icon': <VsfIconCheck size={VsfIconSize.sm} />,
});

interface ListItemMenuControls extends Omit<VsfListItemMenuProps, 'slotPrefix' | 'slotSuffix'> {
  slotPrefix: typeof prefixSlotOptions.defaultOption;
  slotSuffix: typeof suffixSlotOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<
    ListItemMenuControls & {
      label: string;
      counter: number;
      secondaryText: string;
      as: React.ElementType;
      truncate: boolean;
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
        options: Object.keys(VsfListItemMenuSize),
        description: 'Set size variant',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        description: 'Show disabled state of component',
      },
      {
        type: 'boolean',
        modelName: 'active',
        description: 'Show active state of component',
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
      size: VsfListItemMenuSize.base,
      counter: 123,
      slotPrefix: prefixSlotOptions.defaultOption,
      slotSuffix: suffixSlotOptions.defaultOption,
      secondaryText: 'Secondary text',
      disabled: false,
      active: false,
      truncate: false,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfListItemMenu
        className="max-w-sm"
        as={state.get.as}
        size={state.get.size}
        active={state.get.active}
        disabled={state.get.disabled}
        slotPrefix={
          <span className={classNames({ 'text-primary-700': state.get.active && !state.get.disabled })}>
            {prefixSlotOptions.getValue(state.get.slotPrefix)}
          </span>
        }
        slotSuffix={suffixSlotOptions.getValue(state.get.slotSuffix)}
        onClick={() => state.set({ ...state.get, active: !state.get.active })}
      >
        <span className="inline-block break-words font-body">
          <span
            className={classNames({
              'font-normal text-disabled-500': state.get.disabled,
              'font-medium': state.get.active,
            })}
          >
            {state.get.label}
          </span>
          {state.get.counter && (
            <VsfCounter v-if="counter" className="ml-2" size="xl">
              {state.get.counter}
            </VsfCounter>
          )}
        </span>
        <span className={classNames('text-xs text-gray-500 break-words', { truncate: state.get.truncate })}>
          {state.get.secondaryText}
        </span>
      </VsfListItemMenu>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
