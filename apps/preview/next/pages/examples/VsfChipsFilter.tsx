import VsfChipsFilter, { VsfChipsFilterVariants } from '@sfui/sfui/frameworks/react/components/VsfChipsFilter';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'labelModel',
        propType: 'string',
      },
      {
        type: 'select',
        modelName: 'variantModel',
        options: Object.keys(VsfChipsFilterVariants),
        propDefaultValue: VsfChipsFilterVariants.base,
        propType: 'VsfChipsFilterVariants',
      },
      {
        type: 'select',
        modelName: 'typeModel',
        options: ['checkbox', 'radio'],
        propDefaultValue: 'checkbox',
        propType: 'string',
      },
      {
        type: 'boolean',
        modelName: 'disabledModel',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'showThumbModel',
        propType: 'boolean',
        description: 'Only for demonstration purposes',
      },
    ],
    {
      variantModel: VsfChipsFilterVariants.base,
      disabledModel: false,
      labelModel: 'Label',
      typeModel: 'checkbox',
      showThumbModel: true,
      modelValue: '',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfChipsFilter
          name="test"
          disabled={state.get.disabledModel}
          size={state.get.variantModel}
          label={state.get.labelModel}
          type={state.get.typeModel as 'radio' | 'checkbox'}
          value="one"
          onChange={() => console.log('changed!')}
          className="mr-2"
        >
          {state.get.showThumbModel ? <div className="bg-black w-full h-full rounded-full" /> : null}
        </VsfChipsFilter>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
