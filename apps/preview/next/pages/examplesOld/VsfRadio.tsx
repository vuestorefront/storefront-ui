import VsfRadio, { VsfRadioVariants, VsfRadioAlignment, VsfRadioSize } from '../../output/blocks/VsfRadio/VsfRadio';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls([
    {
      title: 'Id',
      type: 'text',
      modelName: 'idModel',
      propType: 'string',
      isRequired: true,
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
      title: 'Alignment',
      type: 'select',
      modelName: 'alignmentModel',
      options: Object.keys(VsfRadioAlignment),
      propDefaultValue: VsfRadioAlignment.left,
      propType: 'VsfRadioAlignment',
    },
    {
      title: 'Size',
      type: 'select',
      modelName: 'sizeModel',
      options: Object.keys(VsfRadioSize),
      propDefaultValue: VsfRadioSize.base,
      propType: 'VsfRadioSize',
    },
    {
      title: 'Name',
      type: 'text',
      modelName: 'nameModel',
      propType: 'string',
      propDefaultValue: '',
    },
    {
      title: 'Value',
      type: 'text',
      modelName: 'valueModel',
      propType: 'string',
      propDefaultValue: 'string',
      description: "v-model prop",
    },
    {
      title: 'Disabled',
      type: 'boolean',
      modelName: 'disabledModel',
      propType: 'boolean',
      propDefaultValue: 'false',
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
    {
      title: 'Label',
      type: 'text',
      modelName: 'labelModel',
      propType: 'string',
      propDefaultValue: 'Label',
    },
    {
      title: 'HelpText',
      type: 'text',
      modelName: 'helpTextModel',
      propType: 'string',
      propDefaultValue: 'Help text',
    },
  ], {
    idModel: 'radio',
    variantModel: VsfRadioVariants.base,
    alignmentModel: VsfRadioAlignment.left,
    nameModel: '',
    valueModel: 'Value',
    disabledModel: false,
    requiredModel: false,
    selectedModel: '',
    invalidModel: false,
    labelModel: 'Label',
    sizeModel: VsfRadioSize.base,
    helpTextModel: 'Help text',
  });
  function onChangeHandler(event) {
    state.set({
      ...state.get,
      valueModel: event.target.value,
      selectedModel: event.target.value
    });
  }

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRadio
          id={state.get.idModel}
          variant={state.get.variantModel}
          name={state.get.nameModel}
          value={state.get.valueModel}
          disabled={state.get.disabledModel}
          selected={state.get.selectedModel}
          invalid={state.get.invalidModel}
          label={state.get.labelModel}
          alignment={state.get.alignmentModel}
          size={state.get.sizeModel}
          helpText={state.get.helpTextModel}
          onChange={onChangeHandler}
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
