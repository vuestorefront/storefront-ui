import VsfSpinner, { VsfSpinnerTypes, VsfSpinnerVariants } from '~/output/blocks/VsfSpinner/VsfSpinner';
import Controls, { prepareControls } from '../../components/utils/Controls';
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
    <div className="e-page">
      <div className="e-page-component">
        <VsfSpinner
          type={state.get.typeModel}
          variant={state.get.variantModel}
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
