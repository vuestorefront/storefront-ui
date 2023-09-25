import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconWarning } from '@storefront-ui/react';
import Alert from './Alert';

export default function AlertWarning() {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="warning" className="w-full max-w-[640px]">
        <SfIconWarning className="my-2 text-warning-700 shrink-0" />
        <div className="py-2">
          <p className="font-medium">Your account</p>
          <p>Your shipping details need to be updated.</p>
        </div>
        <button
          type="button"
          className="ms-auto py-2 px-4 rounded-md text-warning-700 hover:bg-warning-200 active:bg-warning-300 hover:text-warning-800 active:text-warning-900 ml-auto font-medium focus-visible:outline focus-visible:outline-offset"
        >
          Update
        </button>
      </Alert>
  
      <Alert variant="warning" size="sm" className="w-full max-w-[320px]">
        <SfIconWarning size="sm" className="my-1.5 text-warning-700 shrink-0" />
        <div className="py-1.5">
          <p className="font-medium">Your account</p>
          <p>Your shipping details need to be updated.</p>
        </div>
        <button
          type="button"
          className="ms-auto py-1.5 px-3 rounded-md text-warning-700 hover:bg-warning-200 active:bg-warning-300 hover:text-warning-800 active:text-warning-900 ml-auto font-medium focus-visible:outline focus-visible:outline-offset"
        >
          Update
        </button>
      </Alert>
    </div>
  );
}
// #endregion source
AlertWarning.getLayout = ShowcasePageLayout;
