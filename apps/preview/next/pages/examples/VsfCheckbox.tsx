import { VsfCheckboxAlignments } from '@sfui/sfui/frameworks/react/components/VsfCheckbox/types';
import VsfCheckbox from '@sfui/sfui/frameworks/react/components/VsfCheckbox/VsfCheckbox';
import type { VsfCheckboxProps } from '@sfui/sfui/frameworks/react/components/VsfCheckbox/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<Omit<VsfCheckboxProps, 'onChange'> & { checkedValue: string[] }>(
    [
      {
        type: 'text',
        modelName: 'checkedValue',
        propType: 'string',
        description: 'Example of getting values from group of checkboxes',
      },
      {
        type: 'text',
        modelName: 'value',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        type: 'select',
        options: Object.keys(VsfCheckboxAlignments),
        modelName: 'alignment',
        propType: 'VsfCheckboxAlignment',
        propDefaultValue: VsfCheckboxAlignments.leading,
      },
      {
        type: 'boolean',
        modelName: 'required',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'indeterminate',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'invalid',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
      },
      {
        type: 'text',
        modelName: 'helpText',
        propType: 'string',
      },
      {
        type: 'text',
        modelName: 'errorText',
        propType: 'string',
      },
      {
        type: 'text',
        modelName: 'requiredText',
        propType: 'string',
      },
    ],
    {
      value: 'value',
      required: false,
      disabled: false,
      indeterminate: false,
      invalid: false,
      alignment: VsfCheckboxAlignments.leading,
      label: 'Label',
      helpText: 'Help Text',
      errorText: 'Error Message',
      requiredText: 'Required',
      checkedValue: [],
    },
  );

  function onChange(event: Parameters<NonNullable<VsfCheckboxProps['onChange']>>[0]) {
    const { value } = event.target;
    if (state.get.checkedValue.indexOf(value) > -1) {
      state.set({ ...state.get, checkedValue: state.get.checkedValue.filter((val) => val !== value) });
    } else {
      state.set({ ...state.get, checkedValue: [...state.get.checkedValue, value] });
    }
  }

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfCheckbox
          value={state.get.value}
          label={state.get.label}
          indeterminate={state.get.indeterminate}
          required={state.get.required}
          disabled={state.get.disabled}
          alignment={state.get.alignment}
          invalid={state.get.invalid}
          errorText={state.get.errorText}
          helpText={state.get.helpText}
          requiredText={state.get.requiredText}
          onChange={onChange}
        />
        <VsfCheckbox
          value="value-2"
          label={state.get.label}
          indeterminate={state.get.indeterminate}
          required={state.get.required}
          disabled={state.get.disabled}
          alignment={state.get.alignment}
          invalid={state.get.invalid}
          errorText={state.get.errorText}
          helpText={state.get.helpText}
          requiredText={state.get.requiredText}
          onChange={onChange}
        />
        <VsfCheckbox
          value="value-3"
          label={state.get.label}
          indeterminate={state.get.indeterminate}
          required={state.get.required}
          disabled={state.get.disabled}
          alignment={state.get.alignment}
          invalid={state.get.invalid}
          errorText={state.get.errorText}
          helpText={state.get.helpText}
          requiredText={state.get.requiredText}
          onChange={onChange}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
