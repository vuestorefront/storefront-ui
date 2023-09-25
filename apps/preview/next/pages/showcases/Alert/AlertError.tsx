import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconError, SfIconClose } from '@storefront-ui/react';
import Alert from './Alert';

export default function AlertError() {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="negative" className="w-full max-w-[640px]">
        <SfIconError className="my-2 text-negative-700 shrink-0" />
        <p className="py-2">The password change was failed.</p>
        <button
          type="button"
          className="ms-auto py-2 px-4 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 font-medium focus-visible:outline focus-visible:outline-offset"
        >
          Retry
        </button>
        <button
          type="button"
          className="p-2 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 focus-visible:outline focus-visible:outline-offset"
          aria-label="Close error alert"
        >
          <SfIconClose />
        </button>
      </Alert>

      <Alert variant="negative" size="sm" className="w-full max-w-[320px]">
        <SfIconError className="my-1.5 text-negative-700 shrink-0" size="sm" />
        <p className="py-2">The password change was failed.</p>
        <button
          type="button"
          className="ms-auto py-1.5 px-3 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 font-medium focus-visible:outline focus-visible:outline-offset"
        >
          Retry
        </button>
        <button
          type="button"
          className="p-1.5 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 focus-visible:outline focus-visible:outline-offset"
          aria-label="Close error alert"
        >
          <SfIconClose size="sm" />
        </button>
      </Alert>
    </div>
  );
}
// #endregion source
AlertError.getLayout = ShowcasePageLayout;
