import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useState } from 'react';
import { SfIconFavorite, SfIconFavoriteFilled, SfRatingButton } from '@storefront-ui/react';

export default function RatingButtonCustomIcon() {
  const labelId = useId();
  const [rating, setRating] = useState(0);

  return (
    <div>
      <p id={labelId}>Select Rating</p>
      <SfRatingButton value={rating} onChange={setRating} aria-labelledby={labelId}>
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
    </div>
  );
}

// #endregion source
RatingButtonCustomIcon.getLayout = ShowcasePageLayout;
