import VsfCheckbox from '../../output/blocks/VsfCheckbox/VsfCheckbox.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Value',
        type: 'text',
        modelName: 'valueModel',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        title: 'Required',
        type: 'boolean',
        modelName: 'requiredModel',
        propType: 'boolean',
      },
      {
        title: 'Disabled',
        type: 'boolean',
        modelName: 'disabledModel',
        propType: 'boolean',
      },
      {
        title: 'Indeterminate',
        type: 'boolean',
        modelName: 'indeterminateModel',
        propType: 'boolean',
      },
      {
        title: 'Invalid',
        type: 'boolean',
        modelName: 'invalidModel',
        propType: 'boolean',
      },
      {
        title: 'Reverse',
        type: 'boolean',
        modelName: 'reverseModel',
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
      {
        title: 'RequiredText',
        type: 'text',
        modelName: 'requiredTextModel',
        propType: 'string',
      },
    ],
    {
      valueModel: '',
      requiredModel: false,
      disabledModel: false,
      indeterminateModel: true,
      invalidModel: false,
      reverseModel: false,
      labelModel: 'Label',
      helpTextModel: 'Help Text',
      errorTextModel: 'Error Message',
      requiredTextModel: '*Required',
      toggle: false,
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfCheckbox
          value={state.get.valueModel}
          label={`${state.get.labelModel} [${state.get.toggle.toString()}]`}
          indeterminate={state.get.indeterminateModel}
          required={state.get.requiredModel}
          disabled={state.get.disabledModel}
          reverse={state.get.reverseModel}
          invalid={state.get.invalidModel}
          errorText={state.get.errorTextModel}
          helpText={state.get.helpTextModel}
          requiredText={state.get.requiredTextModel}
          onChange={() => state.set({ ...state.get, toggle: !state.get.toggle })}
          checked={state.get.toggle}
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
