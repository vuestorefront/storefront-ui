import {
  VsfListItemFilterSwitch,
  VsfListItemFilterSwitchVariant,
  VsfListItemFilterSwitchSize,
  VsfListItemFilterSwitchProps,
} from '@storefront-ui/react/components/VsfListItemFilterSwitch';
import { ChangeEvent } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<
    Omit<VsfListItemFilterSwitchProps, 'onChange'> & { checkedValue: string[] }
  >(
    [
      {
        type: 'text',
        modelName: 'checkedValue',
        propType: 'string',
        description: 'Example of getting values from group of Switches',
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
        options: Object.keys(VsfListItemFilterSwitchSize),
        description: 'Set size variant',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfListItemFilterSwitchVariant),
        description: 'Set size variant',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        description: 'Show disabled state of component',
      },
      {
        type: 'boolean',
        modelName: 'truncate',
        description: 'Show truncated version of secondary text',
      },
      {
        type: 'text',
        modelName: 'value',
        description: 'Value of radio input',
      },
      {
        type: 'text',
        modelName: 'name',
        description: 'Name for form input group',
      },
    ],
    {
      label: 'Label',
      size: VsfListItemFilterSwitchSize.base,
      variant: VsfListItemFilterSwitchVariant.left,
      counter: 123,
      secondaryText: 'Secondary text',
      disabled: false,
      truncate: false,
      value: 'value',
      name: 'name',
      checkedValue: [],
    },
  );

  function onChange(event: ChangeEvent) {
    const { value } = event.target as HTMLInputElement;
    if (state.get.checkedValue.indexOf(value) > -1) {
      state.set({ ...state.get, checkedValue: state.get.checkedValue.filter((val) => val !== value) });
    } else {
      state.set({ ...state.get, checkedValue: [...state.get.checkedValue, value] });
    }
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <ul className="max-w-sm">
        <VsfListItemFilterSwitch {...state.get} onChange={onChange} />
        <VsfListItemFilterSwitch
          {...state.get}
          label={`${state.get.label}-2`}
          value={`${state.get.value}-2`}
          onChange={onChange}
        />
      </ul>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
