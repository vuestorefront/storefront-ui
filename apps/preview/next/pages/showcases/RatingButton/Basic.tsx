import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useState } from 'react';
import { SfRatingButton } from '@storefront-ui/react';

export default function RatingButtonBasic() {
  const labelId = useId();
  const [rating, setRating] = useState(0);

  return (
    <div>
      <p id={labelId}>Select Rating</p>
      <SfRatingButton value={rating} onChange={setRating} aria-labelledby={labelId} />
    </div>
  );
}

// #endregion source
RatingButtonBasic.getLayout = ShowcasePageLayout;
