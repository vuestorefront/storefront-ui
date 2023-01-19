import { VsfCombobox } from '@storefront-ui/react/components/VsfCombobox';
import { VsfListItemMenu } from '@storefront-ui/react/components/VsfListItemMenu';
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
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'label',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'placeholder',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'helpText',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'requiredText',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'errorText',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'disabled',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'required',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'invalid',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'loading',
      },
    ],
    {
      disabled: false,
      required: false,
      invalid: false,
      placeholder: 'Input or choose from the list',
      helpText: '',
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
