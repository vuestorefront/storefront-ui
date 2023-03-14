import { VsfSelect, VsfSelectSize, VsfSelectProps } from '@storefront-ui/react';
import classNames from 'classnames';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<
    VsfSelectProps & { label: string; options: { label: string; value: string }[] }
  >(
    [
      {
        type: 'json',
        propType: 'array',
        modelName: 'options',
        description: 'Elements displayed in select options',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'value',
        description: 'Selected value',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'placeholder',
        description: 'Placeholder for select',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'disabled',
        description: 'Disabled state',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'required',
        description: 'Required state',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'invalid',
        description: 'Invalid state',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'label',
        description: 'Label for select',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfSelectSize),
        description: 'Select can have 3 sizes: `sm`, `base` or `lg`',
      },
    ],
    {
      options: [
        { label: 'red', value: 'red' },
        { label: 'blue', value: 'blue' },
        { label: 'yellow', value: 'yellow' },
        { label: 'green', value: 'green' },
        { label: 'gray', value: 'gray' },
        { label: 'black', value: 'black' },
        { label: 'brown', value: 'brown' },
      ],
      value: '',
      placeholder: '-- Select --',
      disabled: false,
      required: false,
      invalid: false,
      label: 'Label',
      size: VsfSelectSize.base,
    },
  );

  function onChange(event: React.ChangeEvent) {
    state.set({ ...state.get, value: (event.target as HTMLSelectElement).value });
  }
  return (
    <ComponentExample controls={{ state, controls }}>
      <label>
        <span
          className={classNames('pb-1 text-sm font-body font-medium', {
            "after:content-['*'] after:text-sm": state.get.required,
            'text-disabled-500 cursor-not-allowed': state.get.disabled,
          })}
        >
          {state.get.label}
        </span>
        <VsfSelect {...state.get} onChange={onChange}>
          {state.get.options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </VsfSelect>
      </label>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
