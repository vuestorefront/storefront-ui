import { useState } from 'react';
import VsfRatingBase, {
  VsfRatingBaseVariants,
  VsfRatingBaseProps,
} from '../../output/blocks/VsfRating/VsfRatingBase.lite';
import VsfRatingWithValue from '../../output/blocks/VsfRating/VsfRatingWithValue.lite';

export default function ExampleVsfRating() {
  const [formData, setFormData] = useState({
    value: 3,
    max: 5,
    reviews: 0,
    size: VsfRatingBaseVariants.base,
  } as VsfRatingBaseProps);
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRatingBase value={formData.value} max={formData.max} reviews={formData.reviews} size={formData.size} />
        <VsfRatingWithValue value={formData.value} max={formData.max} reviews={formData.reviews} size={formData.size} />
      </div>
      <div className="e-page-controls">
        <table>
          <tbody>
            <tr>
              <td>Size</td>
              <td>
                {Object.keys(VsfRatingBaseVariants).map((variant: string) => {
                  return (
                    <label key={variant}>
                      {variant}
                      <input
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        type="radio"
                        name="size"
                        value={variant}
                      />
                    </label>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td>Value</td>
              <td>
                <input
                  value={formData.value}
                  type="range"
                  min="0"
                  max={formData.max}
                  step="0.5"
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Max</td>
              <td>
                <input
                  value={formData.max}
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  onChange={(e) => setFormData({ ...formData, max: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Reviews</td>
              <td>
                <input
                  value={formData.reviews}
                  type="range"
                  min="0"
                  step="1"
                  onChange={(e) => setFormData({ ...formData, reviews: e.target.value })}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
