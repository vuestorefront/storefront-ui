import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfRating } from '@storefront-ui/react';

export default function RatingValues() {
  return (
    <div className="flex flex-col">
      <SfRating value={0} />
      <SfRating value={3.5} />
      <SfRating value={3.5} half-increment />
      <SfRating value={6} max={8} />
    </div>
  );
}

// #endregion source
RatingValues.getLayout = ShowcasePageLayout;
