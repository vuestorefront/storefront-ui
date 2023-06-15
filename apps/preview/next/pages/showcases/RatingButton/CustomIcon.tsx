import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfIconFavorite, SfIconFavoriteFilled, SfRatingButton } from '@storefront-ui/react';

export default function RatingButtonCustomIcon() {
  const [rating, setRating] = useState(0);

  return (
    <SfRatingButton value={rating} onChange={setRating}>
      {({ isFilled, iconSize }) =>
        isFilled ? (
          <SfIconFavoriteFilled
            role="none"
            size={iconSize}
            className="text-red-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-neutral-500 peer-focus-visible:outline"
          />
        ) : (
          <SfIconFavorite
            role="none"
            size={iconSize}
            className="text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-neutral-400 peer-focus-visible:outline"
          />
        )
      }
    </SfRatingButton>
  );
}

// #endregion source
RatingButtonCustomIcon.getLayout = ShowcasePageLayout;
