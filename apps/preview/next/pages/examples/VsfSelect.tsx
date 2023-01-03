import { VsfSelect, VsfSelectSizes } from '@storefront-ui/react/components/VsfSelect';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'json',
        propType: 'array',
        modelName: 'options',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'value',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'placeholder',
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
        type: 'text',
        propType: 'string',
        modelName: 'helpText',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'errorText',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'requiredText',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'label',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfSelectSizes),
      },
    ],
    {
      options: ['red', 'blue', 'yellow', 'green', 'gray', 'black', 'brown'],
      value: '',
      placeholder: '-- Select --',
      disabled: false,
      required: false,
      invalid: false,
      helpText: 'Help text',
      errorText: 'Error text',
      requiredText: '*Required',
      label: 'Label',
      size: VsfSelectSizes.base,
    },
  );
  function onChange(value: string) {
    state.set({ ...state.get, value });
  }
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfSelect
        options={state.get.options}
        disabled={state.get.disabled}
        placeholder={state.get.placeholder}
        errorText={state.get.errorText}
        helpText={state.get.helpText}
        requiredText={state.get.requiredText}
        required={state.get.required}
        invalid={state.get.invalid}
        label={state.get.label}
        size={state.get.size}
        onChange={onChange}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
