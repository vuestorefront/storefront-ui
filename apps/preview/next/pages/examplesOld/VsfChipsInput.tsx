import VsfChipsInput, { VsfChipsInputVariants } from '../../output/blocks/VsfChipsInput/VsfChipsInput.lite';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
// import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot.lite';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Label',
        type: 'text',
        modelName: 'labelModel',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        title: 'Size',
        type: 'select',
        modelName: 'sizeModel',
        options: Object.keys(VsfChipsInputVariants),
        propDefaultValue: VsfChipsInputVariants.base,
        propType: 'VsfChipsInputVariants',
      },
      {
        title: 'Disabled',
        type: 'boolean',
        modelName: 'disabledModel',
        propDefaultValue: 'false',
        propType: 'boolean',
      },
    ],
    {
      labelModel: 'Label',
      disabledModel: false,
      sizeModel: VsfChipsInputVariants.base,
    },
  );

  function onClickHandler() {
    console.log('VsfChipsInput Clicked!');
  }
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfChipsInput
        label={state.get.labelModel}
        disabled={state.get.disabledModel}
        size={state.get.sizeModel}
        handleChipClose={onClickHandler}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
