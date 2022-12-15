import { VsfCheckboxAlignments } from '@sfui/sfui/frameworks/react/components/VsfCheckbox/types';
import VsfCheckbox from '@sfui/sfui/frameworks/react/components/VsfCheckbox/VsfCheckbox';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
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
      toggle: false,
    },
  );
  function onChange(value: boolean) {
    console.log(`Changed to ${value}`);
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
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
