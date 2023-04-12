import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconInfo } from '@storefront-ui/react';

export default function AlertSecondary() {
  return (
    <div
      role="alert"
      className="flex items-center max-w-[600px] shadow-md bg-secondary-100 pr-2 pl-4 ring-1 ring-secondary-200 typography-text-sm md:typography-text-base py-1 rounded-md"
    >
      <SfIconInfo className="mr-2 text-secondary-700" />
      <p className="py-2">Your cart will soon be full.</p>
    </div>
  );
}
// #endregion source
AlertSecondary.getLayout = ShowcasePageLayout;
