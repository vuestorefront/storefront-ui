import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfRating } from '@storefront-ui/react';

export default function RatingSizes() {
  return (
    <div className="flex flex-col">
      <SfRating value={4} size="xs" />
      <SfRating value={4} size="sm" />
      <SfRating value={4} size="base" />
      <SfRating value={4} />
      <SfRating value={4} size="lg" />
      <SfRating value={4} size="xl" />
    </div>
  );
}

// #endregion source
RatingSizes.getLayout = ShowcasePageLayout;
