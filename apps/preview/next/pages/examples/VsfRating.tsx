import VsfRating from '@sfui/sfui/frameworks/react/components/VsfRating';
import { VsfRatingVariants, VsfRatingSizes } from '@sfui/sfui/frameworks/react/components/VsfRating/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Value',
        type: 'range',
        modelName: 'valueModel',
        propDefaultValue: 0,
        propType: 'number',
        options: [
          {
            bind: {
              min: 0,
              max: 10,
              step: 0.1,
            },
          },
        ],
      },
      {
        title: 'Max',
        type: 'range',
        modelName: 'maxModel',
        propDefaultValue: 5,
        propType: 'number',
        options: [
          {
            bind: {
              min: 1,
              step: 1,
              max: 10,
            },
          },
        ],
      },
      {
        title: 'Half increment',
        type: 'boolean',
        modelName: 'halfIncrementModel',
        propType: 'boolean',
      },
      {
        title: 'Size',
        type: 'select',
        modelName: 'sizeModel',
        options: Object.keys(VsfRatingSizes),
        propDefaultValue: VsfRatingSizes.base,
        propType: 'VsfRatingSizes',
      },
      {
        title: 'Variant',
        type: 'select',
        modelName: 'variantModel',
        options: Object.keys(VsfRatingVariants),
        propDefaultValue: VsfRatingVariants.base,
        propType: 'VsfRatingVariants',
      },
    ],
    {
      valueModel: 3,
      maxModel: 5,
      sizeModel: VsfRatingSizes.base,
      variantModel: VsfRatingVariants.base,
      halfIncrementModel: false,
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRating
          value={state.get.valueModel}
          max={state.get.maxModel}
          size={state.get.sizeModel}
          variant={state.get.variantModel}
          halfIncrement={state.get.halfIncrementModel}
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
