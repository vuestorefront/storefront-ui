import { VsfLink } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="space-x-4">
      <VsfLink variant="primary"> Primary </VsfLink>
      <VsfLink variant="secondary"> Secondary </VsfLink>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
