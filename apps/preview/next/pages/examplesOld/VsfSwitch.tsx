import VsfSwitch, { VsfSwitchVariants } from '../../output/blocks/VsfSwitch/VsfSwitch';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
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
        title: 'Size',
        type: 'select',
        modelName: 'sizeModel',
        options: Object.keys(VsfSwitchVariants),
        propDefaultValue: VsfSwitchVariants.base,
        propType: 'VsfSwitchVariants',
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
        title: 'Invalid',
        type: 'boolean',
        modelName: 'invalidModel',
        propType: 'boolean',
      },
      {
        title: 'RightCheckbox',
        type: 'boolean',
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
      sizeModel: '',
      requiredModel: false,
      disabledModel: false,
      invalidModel: false,
      rightCheckboxModel: false,
      labelModel: 'Label',
      helpTextModel: 'help',
      errorTextModel: 'error',
      toggle: false,
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSwitch
          name={state.get.nameModel!}
          value={state.get.valueModel}
          label={state.get.labelModel}
          required={state.get.requiredModel}
          disabled={state.get.disabledModel}
          rightCheckbox={state.get.rightCheckboxModel}
          invalid={state.get.invalidModel}
          errorText={state.get.errorTextModel}
          helpText={state.get.helpTextModel}
          size={state.get.sizeModel}
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
