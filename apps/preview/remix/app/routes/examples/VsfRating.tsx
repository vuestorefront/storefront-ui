import VsfRating, { VsfRatingVariants, VsfRatingTypes } from '../../output/blocks/VsfRating/VsfRating.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function ExampleVsfRating() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'value',
        type: 'range',
        modelName: 'valueModel',
        propDefaultValue: 0,
        propType: 'number',
        options: [
          {
            bind: {
              min: 0,
              max: 10,
              step: 0.5,
            },
          },
        ],
      },
      {
        title: 'max',
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
        title: 'reviews',
        type: 'range',
        modelName: 'reviewsModel',
        propDefaultValue: 0,
        propType: 'number',
        options: [
          {
            bind: {
              min: 0,
              step: 1,
            },
          },
        ],
      },
      {
        title: 'size',
        type: 'select',
        modelName: 'sizeModel',
        options: Object.keys(VsfRatingVariants),
        propDefaultValue: VsfRatingVariants.base,
        propType: 'VsfRatingVariants',
      },
      {
        title: 'type',
        type: 'select',
        modelName: 'typeModel',
        options: Object.keys(VsfRatingTypes),
        propDefaultValue: VsfRatingTypes.base,
        propType: 'VsfRatingTypes',
      },
    ],
    {
      valueModel: 3,
      maxModel: 5,
      reviewsModel: 10,
      sizeModel: VsfRatingVariants.base,
      typeModel: VsfRatingTypes.base,
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRating
          value={state.get.valueModel}
          max={state.get.maxModel}
          reviews={state.get.reviewsModel}
          size={state.get.sizeModel}
          type={state.get.typeModel}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
