import VsfChipsInput, { VsfChipsInputVariants } from '../../output/blocks/VsfChipsInput/VsfChipsInput.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot';

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
          slotPrefix={<VsfIconDot className="vsf-icon-full" />}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
