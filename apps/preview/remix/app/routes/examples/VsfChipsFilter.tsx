import VsfChipsFilter, { VsfChipsFilterVariants } from '../../output/blocks/VsfChipsFilter/VsfChipsFilter.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfChipsFilterExample() {
  const { state, controls } = prepareControls(
    [
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
      },
      {
        title: 'Label',
        type: 'text',
        modelName: 'labelModel',
        propType: 'string',
      },
      {
        title: 'Thumb Color',
        type: 'select',
        modelName: 'thumbColorModel',
        options: [
          {
            label: 'default',
            value: 'black',
          },
          {
            label: 'red',
            value: 'red',
          },
          {
            label: 'gradient',
            value: 'linear-gradient(90deg, rgba(0,36,0,1) 0%, rgba(9,121,74,1) 47%, rgba(0,212,255,1) 100%)',
          },
        ],
        propType: '---',
        description: 'Only for demonstration purpose',
      },
    ],
    {
      variantModel: VsfChipsFilterVariants.base,
      disabledModel: false,
      labelModel: 'Label',
      typeModel: '',
      thumbColorModel: '',
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
          thumbColor={state.get.thumbColorModel}
          label={state.get.labelModel}
          type={state.get.typeModel}
          value="one"
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
