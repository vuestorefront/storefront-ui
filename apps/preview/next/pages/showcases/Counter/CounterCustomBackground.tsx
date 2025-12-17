import { SfCounter } from '@storefront-ui/react';
// #region source
import { ShowcasePageLayout } from '../../showcases';

export default function Showcase() {
  return (
    <div className="flex items-center gap-4 md:flex-row">
      <SfCounter pill className="text-neutral-900 bg-primary-100 ring-neutral-200">
        123
      </SfCounter>
      <SfCounter pill className="text-neutral-900 bg-positive-100 ring-neutral-200">
        123
      </SfCounter>
      <SfCounter pill className="text-neutral-900 bg-negative-100 ring-neutral-200">
        123
      </SfCounter>
      <SfCounter pill className="text-neutral-900 bg-warning-100 ring-neutral-200">
        123
      </SfCounter>
      <SfCounter pill className="text-white bg-secondary-700 ring-white">
        123
      </SfCounter>
    </div>
  );
}
// #endregion source
Showcase.getLayout = ShowcasePageLayout;
