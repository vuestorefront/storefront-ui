import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfRatingButton } from '@storefront-ui/react';

export default function RatingButtonSizes() {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);

  return (
    <div>
      <SfRatingButton value={rating1} onChange={setRating1} size="sm" />
      <SfRatingButton value={rating2} onChange={setRating2} size="base" />
      <SfRatingButton value={rating3} onChange={setRating3} size="lg" />
    </div>
  );
}

// #endregion source
RatingButtonSizes.getLayout = ShowcasePageLayout;
