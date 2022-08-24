import { useState } from 'react';
import VsfRatingBase, {
  VsfRatingBaseVariants,
  VsfRatingBaseProps,
} from '../../output/blocks/VsfRating/VsfRatingBase.lite';
import VsfRatingWithValue from '../../output/blocks/VsfRating/VsfRatingWithValue.lite';
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
        options: Object.keys(VsfRatingBaseVariants),
        propDefaultValue: VsfRatingBaseVariants.base,
        propType: 'VsfRatingBaseVariants',
      },
    ],
    {
      valueModel: 3,
      maxModel: 5,
      reviewsModel: 0,
      sizeModel: VsfRatingBaseVariants.base,
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRatingBase
          value={state.get.valueModel}
          max={state.get.maxModel}
          reviews={state.get.reviewsModel}
          size={state.get.sizeModel}
        />
        <VsfRatingWithValue
          value={state.get.valueModel}
          max={state.get.maxModel}
          reviews={state.get.reviewsModel}
          size={state.get.sizeModel}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
