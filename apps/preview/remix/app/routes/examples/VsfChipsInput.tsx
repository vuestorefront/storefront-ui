import VsfChipsInput, { VsfChipsInputVariants } from '../../output/blocks/VsfChipsInput/VsfChipsInput.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

function Icon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-gray-500">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"></path>
    </svg>
  );
}

export default function ExampleVsfChipsInput() {
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
        title: 'Size',
        type: 'select',
        modelName: 'sizeModel',
        options: Object.keys(VsfChipsInputVariants),
        propDefaultValue: VsfChipsInputVariants.medium,
        propType: 'VsfChipsInputVariants',
      },
      {
        title: 'Disabled',
        type: 'checkbox',
        modelName: 'disabledModel',
        propDefaultValue: 'false',
        propType: 'boolean',
      },
    ],
    {
      valueModel: 'Label',
      disabledModel: false,
      sizeModel: VsfChipsInputVariants.medium,
    },
  );

  function onClickHandler() {
    console.log('VsfChipsInput Clicked!');
  }
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfChipsInput
          value={state.get.valueModel}
          disabled={state.get.disabledModel}
          size={state.get.sizeModel}
          handleChipClose={onClickHandler}
          slotIcon={<Icon />}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
