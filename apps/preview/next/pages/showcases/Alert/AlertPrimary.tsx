import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconInfo } from '@storefront-ui/react';

export default function AlertPrimary() {
  return (
    <div
      role="alert"
      className="flex items-center max-w-[600px] shadow-md bg-primary-200 pr-2 pl-4 ring-1 ring-primary-200 typography-text-sm md:typography-text-base py-1 rounded-xl"
    >
      <SfIconInfo className="mr-2 text-primary-700 shrink-0" />
      <p className="py-2">Your cart will soon be full.</p>
    </div>
  );
}
// #endregion source
AlertPrimary.getLayout = ShowcasePageLayout;
