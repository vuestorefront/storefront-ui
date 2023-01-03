import VsfSpinner, { VsfSpinnerTypes, VsfSpinnerVariants } from '~/output/blocks/VsfSpinner/VsfSpinner.lite';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls([
    {
      title: 'Type',
      type: 'select',
      modelName: 'typeModel',
      options: Object.keys(VsfSpinnerTypes),
      propDefaultValue: VsfSpinnerTypes.base,
      propType: 'VsfSpinnerTypes'
    },
    {
      title: 'Variant',
      type: 'select',
      modelName: 'variantModel',
      options: Object.keys(VsfSpinnerVariants),
      propDefaultValue: VsfSpinnerVariants.base,
      propType: 'VsfSpinnerVariants'
    },
  ], {
    typeModel: VsfSpinnerTypes.base,
    variantModel: VsfSpinnerVariants.base,
  });

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfSpinner
        type={state.get.typeModel}
        variant={state.get.variantModel}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
