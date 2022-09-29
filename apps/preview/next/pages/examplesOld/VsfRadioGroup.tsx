import VsfRadioGroup, { VsfRadioGroupVariants, VsfRadioGroupDirection } from '../../output/blocks/VsfRadioGroup/VsfRadioGroup';
import Controls, { prepareControls } from '../../components/utils/Controls';
import VsfRadio, { VsfRadioVariants } from "../../output/blocks/VsfRadio/VsfRadio";
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls([
    {
      title: 'Direction',
      type: 'select',
      modelName: 'directionModel',
      options: Object.keys(VsfRadioGroupDirection),
      propDefaultValue: VsfRadioGroupDirection.vertical,
      propType: 'VsfRadioVariants',
    },
    {
      title: 'Variant',
      type: 'select',
      modelName: 'variantModel',
      options: Object.keys(VsfRadioVariants),
      propDefaultValue: VsfRadioVariants.base,
      propType: 'VsfRadioVariants',
    },
    {
      title: 'Required',
      type: 'boolean',
      modelName: 'requiredModel',
      propType: 'boolean',
      propDefaultValue: 'false',
    },
    {
      title: 'Required Text',
      type: 'text',
      modelName: 'requiredTextModel',
      propType: 'string',
      propDefaultValue: '*Required',
    },
    {
      title: 'Error Text',
      type: 'text',
      modelName: 'errorTextModel',
      propType: 'string',
      propDefaultValue: 'Error message',
    },
    {
      title: 'HelpText',
      type: 'text',
      modelName: 'helpTextModel',
      propType: 'string',
      propDefaultValue: 'Help text',
    },
    {
      title: 'Selected',
      type: 'text',
      modelName: 'selectedModel',
      propType: 'string',
      propDefaultValue: '',
    },
    {
      title: 'Invalid',
      type: 'boolean',
      modelName: 'invalidModel',
      propType: 'boolean',
      propDefaultValue: 'false',
    },
  ], {
    radioModel: [
      { id: 'radio-1', name: VsfRadioGroupVariants.base ? 'radio-group-1' : `radio-${state.useVariantProp}-group-1`, value: 'one' },
      { id: 'radio-2', name: VsfRadioGroupVariants.base ? 'radio-group-2' : `radio-${state.useVariantProp}-group-2`, value: 'two' },
    ],
    directionModel: VsfRadioGroupDirection.vertical,
    variantModel: VsfRadioVariants.base,
    requiredModel: false,
    requiredTextModel: '*Required',
    errorTextModel: 'Error message',
    helpTextModel: 'Help text',
    selectedModel: '',
    invalidModel: false,
  });
  function onChangeHandler(event) {
    state.set({
      ...state.get,
      selectedModel: event.target.value
    });
  }

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRadioGroup
          direction={state.get.directionModel}
          required={state.get.requiredModel}
          requiredText={state.get.requiredTextModel}
          errorText={state.get.errorTextModel}
          helpText={state.get.helpTextModel}
          isInvalid={state.get.invalidModel}
          variant={state.get.variantModel}
        >
          {state.get.radioModel.map(radio => (
            <VsfRadio
              key={radio.id}
              id={radio.id}
              value={radio.value}
              variant={state.get.variantModel}
              helpText=""
              selected={state.get.selectedModel}
              invalid={state.get.invalidModel}
              onChange={onChangeHandler}
            />
          ))}
        </VsfRadioGroup>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
