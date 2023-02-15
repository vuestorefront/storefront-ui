import {
  VsfListItemFilterChip,
  VsfListItemFilterChipSize,
  VsfListItemFilterChipVariant,
  VsfListItemFilterChipProps,
} from '@storefront-ui/react/components/VsfListItemFilterChip/index';
import { ChangeEvent } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<Omit<VsfListItemFilterChipProps, 'onChange'> & { modelValue: string[] }>(
    [
      {
        type: 'text',
        modelName: 'modelValue',
        propType: 'string',
        propDefaultValue: '',
        description: 'Selected value',
      },
      {
        type: 'text',
        modelName: 'color',
        propType: 'string',
        description: 'Set color. It can be passed in any format supported on the web (including gradient functions)',
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
        options: Object.keys(VsfListItemFilterChipSize),
        description: 'Set size variant',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfListItemFilterChipVariant),
        description: 'Set size variant',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
        description: 'Show disabled state of component',
      },
      {
        type: 'boolean',
        modelName: 'truncate',
        propType: 'boolean',
        description: 'Show truncated version of secondary text',
      },
      {
        type: 'text',
        modelName: 'value',
        propType: 'string',
        propDefaultValue: '',
      },
    ],
    {
      label: 'Label',
      size: VsfListItemFilterChipSize.base,
      variant: VsfListItemFilterChipVariant.left,
      counter: 123,
      secondaryText: 'Secondary text',
      disabled: false,
      truncate: false,
      value: 'value',
      color: '#A78BFA',
      modelValue: [],
      defaultValue: false,
    },
  );

  function onChange(event: ChangeEvent) {
    const { value } = event.target as HTMLInputElement;
    if (state.get.modelValue.indexOf(value) > -1) {
      state.set({ ...state.get, modelValue: state.get.modelValue.filter((val) => val !== value) });
    } else {
      state.set({ ...state.get, modelValue: [...state.get.modelValue, value] });
    }
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <ul className="max-w-sm">
        <VsfListItemFilterChip {...state.get} onChange={onChange} />
        <VsfListItemFilterChip
          {...state.get}
          label={`${state.get.label}-2`}
          value={`${state.get.value}-2`}
          color="linear-gradient(180deg, #4ADE80 0%, #A78BFA 100%)"
          onChange={onChange}
        />
      </ul>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
