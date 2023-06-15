import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfRatingButton } from '@storefront-ui/react';

export default function RatingButtonMax() {
  const [rating, setRating] = useState(5);

  return <SfRatingButton max={10} value={rating} onChange={setRating} />;
}

// #endregion source
RatingButtonMax.getLayout = ShowcasePageLayout;
