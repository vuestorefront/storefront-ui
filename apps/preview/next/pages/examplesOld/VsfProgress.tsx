
import VsfProgress, { VsfProgressVariants, VsfProgressTypes } from '~/output/blocks/VsfProgress/VsfProgress.lite';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls([
    {
      title: 'Label',
      type: 'text',
      modelName: 'labelModel',
      description: 'Prop used only to set aria-label attribute',
      propDefaultValue: 'Loading',
      propType: 'string',
    },
    {
      title: 'Value',
      type: 'range',
      modelName: 'valueModel',
      propDefaultValue: 0,
      propType: 'number'
    },
    {
      title: 'Variant',
      type: 'select',
      modelName: 'variantModel',
      options: Object.keys(VsfProgressVariants),
      propDefaultValue: VsfProgressVariants.base,
      propType: 'VsfProgressVariants'
    },
    {
      title: 'Type',
      type: 'select',
      modelName: 'typeModel',
      options: Object.keys(VsfProgressTypes),
      propDefaultValue: VsfProgressTypes.circle,
      propType: 'VsfProgressTypes'
    },
  ], {
    labelModel: '',
    valueModel: 0,
    variantModel: '',
    typeModel: '',
  })
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfProgress
        label={state.get.labelModel}
        value={state.get.valueModel}
        variant={state.get.variantModel}
        type={state.get.typeModel}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
