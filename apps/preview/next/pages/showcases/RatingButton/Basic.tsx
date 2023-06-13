import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfRatingButton } from '@storefront-ui/react';

export default function RatingButtonBasic() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <p>Select rating</p>
      <SfRatingButton value={rating} onChange={setRating} />
    </div>
  );
}

// #endregion source
RatingButtonBasic.getLayout = ShowcasePageLayout;
