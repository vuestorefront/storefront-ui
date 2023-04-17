import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconClose } from '@storefront-ui/react';

export default function AlertError() {
  return (
    <div
      role="alert"
      className="flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"
    >
      <p className="py-2 mr-2">The password change was failed.</p>
      <button
        type="button"
        className="py-1.5 px-3 md:py-2 md:px-4 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 ml-auto font-medium"
      >
        Retry
      </button>
      <button
        type="button"
        className="p-1.5 md:p-2 ml-2 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900"
        aria-label="Close error alert"
      >
        <SfIconClose className="hidden md:block" />
        <SfIconClose size="sm" className="md:hidden block" />
      </button>
    </div>
  );
}
// #endregion source
AlertError.getLayout = ShowcasePageLayout;
