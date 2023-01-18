import {
  VsfListItemMenu,
  VsfListItemMenuProps,
  VsfListItemMenuSize,
} from '@storefront-ui/react/components/VsfListItemMenu';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { VsfIconSize } from '@storefront-ui/react/components/VsfIcons/types';
import { VsfIconCheck } from '~/../../../packages/sfui/frameworks/react/components/VsfIcons';
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
  const { state, controls } = prepareControls<ListItemMenuControls>(
    [
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Set label value',
      },
      {
        type: 'text',
        modelName: 'link',
        propType: 'string',
        description: 'Set link to render as link',
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
        modelName: 'selected',
        description: 'Show selected state of component',
      },
      {
        type: 'boolean',
        modelName: 'selectedBackground',
        description: 'Show selected background state of component',
      },
      {
        type: 'boolean',
        modelName: 'truncate',
        description: 'Show truncated version of secondary text',
      },
    ],
    {
      label: 'Label',
      size: VsfListItemMenuSize.base,
      link: '',
      counter: 123,
      slotPrefix: prefixSlotOptions.defaultOption,
      slotSuffix: suffixSlotOptions.defaultOption,
      secondaryText: 'Secondary text',
      disabled: false,
      selected: false,
      selectedBackground: false,
      truncate: false,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfListItemMenu
        className="max-w-sm"
        size={state.get.size}
        link={state.get.link}
        label={state.get.label}
        counter={Number(state.get.counter)}
        secondaryText={state.get.secondaryText}
        selected={state.get.selected}
        selectedBackground={state.get.selectedBackground}
        disabled={state.get.disabled}
        slotPrefix={prefixSlotOptions.getValue(state.get.slotPrefix)}
        slotSuffix={suffixSlotOptions.getValue(state.get.slotSuffix)}
        truncate={state.get.truncate}
        onClick={(selected: boolean) => state.set({ ...state.get, selected })}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
