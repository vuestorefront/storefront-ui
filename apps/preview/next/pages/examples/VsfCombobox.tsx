import { VsfCombobox } from '@storefront-ui/react/components/VsfCombobox';
import { VsfListItemMenu } from '@storefront-ui/react/components/VsfListItemMenu';
import { VsfInputSize } from '@storefront-ui/react/components/VsfInput/types';
import { ChangeEvent } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const items = [
    {
      label: 'item1',
      secondaryText: 'item description',
    },
    {
      label: 'item2',
      secondaryText: 'item description',
    },
    {
      label: 'item3',
      secondaryText: 'item description',
    },
    {
      label: 'item4',
      secondaryText: 'item description',
    },
    {
      label: 'item5',
      secondaryText: 'item description',
    },
  ];
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        propType: 'string',
        modelName: 'value',
        description: 'Value of input',
      },
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'VsfInputSize.base',
        propType: 'VsfInputSize',
        options: Object.keys(VsfInputSize),
        description: 'Change size of the input',
      },
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Change label for input',
      },
      {
        type: 'text',
        modelName: 'helpText',
        propType: 'string',
        description: 'Change help text for input',
      },
      {
        type: 'text',
        modelName: 'errorText',
        propType: 'string',
        description: 'Change error text for input',
      },
      {
        type: 'text',
        modelName: 'requiredText',
        propType: 'string',
        description: 'Change error text for input',
      },
      {
        type: 'text',
        modelName: 'placeholder',
        propType: 'string',
        description: 'Change placeholder for input',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'Disable dropdown',
      },
      {
        type: 'boolean',
        modelName: 'required',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'Toggles if selecting is required or not',
      },
      {
        type: 'boolean',
        modelName: 'invalid',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'Passes the validation result to the component',
      },
      {
        type: 'boolean',
        modelName: 'loading',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'Passes the loading value to the dropdown component',
      },
    ],
    {
      size: VsfInputSize.base,
      disabled: false,
      required: false,
      invalid: false,
      placeholder: 'Placeholder text',
      helpText: 'Help text',
      requiredText: '',
      errorText: '',
      label: 'Label',
      value: '',
      items,
      open: false,
      loading: false,
    },
  );
  const isSelected = (itemValue: string, modelValue: string) => itemValue === modelValue;
  const filteredOptions = (value: string) => (value && items.filter((el) => el.label.includes(value))) || items;

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    state.set({ ...state.get, value: event?.target.value });
  }

  function onReset() {
    state.set({ ...state.get, value: '' });
  }

  function onOpenChange(open: boolean) {
    state.set({ ...state.get, open });
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfCombobox
        {...state.get}
        value={state.get.value}
        onChange={onChange}
        onReset={onReset}
        onOpenChange={onOpenChange}
      >
        {filteredOptions(state.get.value).map((item) => (
          <li key={item.label} role="option" aria-selected={isSelected(state.get.value, item.label)} className="w-full">
            <VsfListItemMenu
              label={item.label}
              secondaryText={item.secondaryText}
              onClick={() => state.set({ ...state.get, value: item.label, open: false })}
            />
          </li>
        ))}
        {!filteredOptions(state.get.value).length ? (
          <li>
            <p>No results found</p>
          </li>
        ) : null}
      </VsfCombobox>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
