import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconWarning } from '@storefront-ui/react';

export default function AlertWarning() {
  return (
    <div
      role="alert"
      className="flex items-start max-w-[600px] shadow-md bg-warning-100 pr-2 pl-4 ring-1 ring-warning-200 typography-text-sm md:typography-text-base py-1 rounded-md"
    >
      <SfIconWarning className="mt-2 mr-2 text-warning-700 shrink-0" />
      <div className="py-2 mr-2">
        <p className="font-medium typography-text-base md:typography-text-lg">Your account</p>
        <p>Your shipping details need to be updated.</p>
      </div>
      <button
        type="button"
        className="py-1.5 px-3 md:py-2 md:px-4 rounded-md text-warning-700 hover:bg-warning-200 active:bg-warning-300 hover:text-warning-800 active:text-warning-900 ml-auto font-medium focus-visible:outline focus-visible:outline-offset"
      >
        Update
      </button>
    </div>
  );
}
// #endregion source
AlertWarning.getLayout = ShowcasePageLayout;
