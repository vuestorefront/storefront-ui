import { SfCounter } from '@storefront-ui/react';
// #region source
import { ShowcasePageLayout } from '../../showcases';

export default function Showcase() {
  return (
    <SfCounter size="lg" pill className="text-white bg-secondary-700 ring-white">
      123
    </SfCounter>
  );
}
// #endregion source
Showcase.getLayout = ShowcasePageLayout;
