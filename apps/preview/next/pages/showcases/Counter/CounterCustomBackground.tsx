import { SfCounter } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <SfCounter size="xl" pill className="text-white bg-secondary-700 ring-white">
      123
    </SfCounter>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
