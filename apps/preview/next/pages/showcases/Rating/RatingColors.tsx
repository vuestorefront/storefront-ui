import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfRating } from '@storefront-ui/react';

export default function RatingColors() {
  return (
    <div className="flex flex-col">
      <VsfRating className="!text-red-600" value={4} />
      <VsfRating className="!text-purple-500" value={4} />
      <VsfRating className="!text-cyan-700" value={4} />
    </div>
  );
}

// #endregion source
RatingColors.getLayout = ShowcasePageLayout;
