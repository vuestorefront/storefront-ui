import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfRating } from '@storefront-ui/react';

export default function RatingSizes() {
  return (
    <div className="flex flex-col">
      <VsfRating value={4} size="xs" />
      <VsfRating value={4} size="sm" />
      <VsfRating value={4} size="base" />
      <VsfRating value={4} />
      <VsfRating value={4} size="lg" />
      <VsfRating value={4} size="xl" />
    </div>
  );
}

// #endregion source
RatingSizes.getLayout = ShowcasePageLayout;
