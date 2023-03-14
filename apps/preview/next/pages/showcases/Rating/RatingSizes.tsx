import { VsfRating } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
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

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
