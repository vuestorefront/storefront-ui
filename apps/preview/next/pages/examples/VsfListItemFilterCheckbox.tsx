import {
  VsfListItemFilterCheckbox,
  VsfListItemFilterCheckboxVariant,
  VsfListItemFilterCheckboxSize,
  VsfListItemFilterCheckboxProps,
} from '@storefront-ui/react/components/VsfListItemFilterCheckbox';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<
    Omit<VsfListItemFilterCheckboxProps, 'onChange'> & { checkedValue: string[] }
  >(
    [
      {
        type: 'text',
        modelName: 'checkedValue',
        propType: 'string',
        description: 'Example of getting values from group of checkboxes',
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
        options: Object.keys(VsfListItemFilterCheckboxSize),
        description: 'Set size variant',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfListItemFilterCheckboxVariant),
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
      size: VsfListItemFilterCheckboxSize.base,
      variant: VsfListItemFilterCheckboxVariant.left,
      counter: 123,
      secondaryText: 'Secondary text',
      disabled: false,
      truncate: false,
      value: 'value',
      name: 'name',
      checkedValue: [],
    },
  );

  function onChange(event: Parameters<NonNullable<VsfListItemFilterCheckboxProps['onChange']>>[0]) {
    const { value } = event.target;
    if (state.get.checkedValue.indexOf(value) > -1) {
      state.set({ ...state.get, checkedValue: state.get.checkedValue.filter((val) => val !== value) });
    } else {
      state.set({ ...state.get, checkedValue: [...state.get.checkedValue, value] });
    }
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <ul className="max-w-sm">
        <VsfListItemFilterCheckbox
          size={state.get.size}
          variant={state.get.variant}
          label={state.get.label}
          counter={Number(state.get.counter)}
          secondaryText={state.get.secondaryText}
          disabled={state.get.disabled}
          truncate={state.get.truncate}
          value={state.get.value}
          name={state.get.name}
          onChange={onChange}
        />
        <VsfListItemFilterCheckbox
          size={state.get.size}
          variant={state.get.variant}
          label={`${state.get.label}-2`}
          counter={Number(state.get.counter)}
          secondaryText={state.get.secondaryText}
          disabled={state.get.disabled}
          truncate={state.get.truncate}
          value={`${state.get.value}-2`}
          name={state.get.name}
          onChange={onChange}
        />
      </ul>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
