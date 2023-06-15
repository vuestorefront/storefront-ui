import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useState } from 'react';
import { SfRatingButton } from '@storefront-ui/react';

export default function RatingButtonMax() {
  const labelId = useId();
  const [rating, setRating] = useState(5);

  return (
    <div>
      <p id={labelId}>Select Rating</p>
      <SfRatingButton max={10} value={rating} onChange={setRating} aria-labelledby={labelId} />
    </div>
  );
}

// #endregion source
RatingButtonMax.getLayout = ShowcasePageLayout;
