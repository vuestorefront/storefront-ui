import { VsfCounter } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfCounter size="xl" pill className="text-white bg-secondary-700 ring-white">
      123
    </VsfCounter>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
