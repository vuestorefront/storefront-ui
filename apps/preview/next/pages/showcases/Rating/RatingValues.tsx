import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfRating } from '@storefront-ui/react';

export default function RatingValues() {
  return (
    <div className="flex flex-col">
      <VsfRating value={0} />
      <VsfRating value={3.5} />
      <VsfRating value={3.5} half-increment />
      <VsfRating value={6} max={8} />
    </div>
  );
}

// #endregion source
RatingValues.getLayout = ShowcasePageLayout;
