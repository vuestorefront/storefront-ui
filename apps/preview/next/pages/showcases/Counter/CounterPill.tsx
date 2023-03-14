import { VsfCounter } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfCounter size="xl" pill className="bg-yellow-300">
      123
    </VsfCounter>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
