import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfRating } from '@storefront-ui/react';

export default function RatingColors() {
  return (
    <div className="flex flex-col">
      <SfRating className="!text-red-600" value={4} />
      <SfRating className="!text-purple-500" value={4} />
      <SfRating className="!text-cyan-700" value={4} />
    </div>
  );
}

// #endregion source
RatingColors.getLayout = ShowcasePageLayout;
