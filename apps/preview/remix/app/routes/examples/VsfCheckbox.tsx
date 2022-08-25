import VsfCheckbox from '../../output/blocks/VsfCheckbox/VsfCheckbox.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function Index() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Name',
        type: 'text',
        modelName: 'nameModel',
        propDefaultValue: '',
        propType: 'string',
        isRequired: true,
      },
      {
        title: 'Value',
        type: 'text',
        modelName: 'valueModel',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        title: 'Required',
        type: 'checkbox',
        modelName: 'requiredModel',
        propType: 'boolean',
      },
      {
        title: 'Disabled',
        type: 'checkbox',
        modelName: 'disabledModel',
        propType: 'boolean',
      },
      {
        title: 'Indeterminate',
        type: 'checkbox',
        modelName: 'indeterminateModel',
        propType: 'boolean',
      },
      {
        title: 'Invalid',
        type: 'checkbox',
        modelName: 'invalidModel',
        propType: 'boolean',
      },
      {
        title: 'RightCheckbox',
        type: 'checkbox',
        modelName: 'rightCheckboxModel',
        propType: 'boolean',
      },
      {
        title: 'Label',
        type: 'text',
        modelName: 'labelModel',
        propType: 'string',
      },
      {
        title: 'HelpText',
        type: 'text',
        modelName: 'helpTextModel',
        propType: 'string',
      },
      {
        title: 'ErrorText',
        type: 'text',
        modelName: 'errorTextModel',
        propType: 'string',
      },
    ],
    {
      nameModel: 'checkbox-1',
      valueModel: '',
      requiredModel: false,
      disabledModel: false,
      indeterminateModel: false,
      invalidModel: false,
      rightCheckboxModel: false,
      labelModel: 'Label',
      helpTextModel: 'help',
      errorTextModel: 'error',
      toggle: false,
      checked: ['Mike'],
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <p>Single Checkbox</p>
        <VsfCheckbox
          name={state.get.nameModel!}
          value={state.get.valueModel}
          label={state.get.labelModel}
          indeterminate={state.get.indeterminateModel}
          required={state.get.requiredModel}
          disabled={state.get.disabledModel}
          rightCheckbox={state.get.rightCheckboxModel}
          invalid={state.get.invalidModel}
          errorText={state.get.errorTextModel}
          helpText={state.get.helpTextModel}
          onChange={() => state.set({ ...state.get, toggle: !state.get.toggle })}
          checked={state.get.toggle}
        />
        <div>Toggled: {state.get.toggle.toString()}</div>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
