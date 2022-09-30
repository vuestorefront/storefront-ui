import VsfChipsFilter, { VsfChipsFilterVariants } from '../../output/blocks/VsfChipsFilter/VsfChipsFilter.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot.lite';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Label',
        type: 'text',
        modelName: 'labelModel',
        propType: 'string',
      },
      {
        title: 'Variant',
        type: 'select',
        modelName: 'variantModel',
        options: Object.keys(VsfChipsFilterVariants),
        propDefaultValue: VsfChipsFilterVariants.base,
        propType: 'VsfChipsFilterVariants',
      },
      {
        title: 'Type',
        type: 'select',
        modelName: 'typeModel',
        options: ['radio', 'checkbox'],
        propDefaultValue: 'checkbox',
        propType: 'string',
      },
      {
        title: 'Disabled',
        type: 'boolean',
        modelName: 'disabledModel',
        propType: 'boolean',
      },
      {
        title: 'No Thumb',
        type: 'boolean',
        modelName: 'noThumbModel',
        propType: 'boolean',
        description: 'Only for demonstration purposes',
      },
    ],
    {
      variantModel: VsfChipsFilterVariants.base,
      disabledModel: false,
      labelModel: 'Label',
      typeModel: '',
      noThumbModel: false,
      modelValue: '',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfChipsFilter
          disabled={state.get.disabledModel}
          noThumb={state.get.noThumbModel}
          size={state.get.variantModel}
          label={state.get.labelModel}
          type={state.get.typeModel}
          value="one"
          slotThumb={!state.get.noThumbModel ? <VsfIconDot className="vsf-icon-full" /> : null}
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
