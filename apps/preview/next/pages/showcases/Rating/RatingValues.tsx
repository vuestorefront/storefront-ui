import { VsfRating } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col">
      <VsfRating value={0} />
      <VsfRating value={3.5} />
      <VsfRating value={3.5} half-increment />
      <VsfRating value={6} max={8} />
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
