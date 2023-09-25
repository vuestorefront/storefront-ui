import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconCheckCircle, SfIconClose } from '@storefront-ui/react';
import Alert from './Alert';

export default function AlertPositive() {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="positive" className="w-full max-w-[640px]">
        <SfIconCheckCircle className="my-2 text-positive-700 shrink-0" />
        <p className="py-2">The product has been added to the cart.</p>
        <button
          type="button"
          className="ms-auto p-2 rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900 focus-visible:outline focus-visible:outline-offset"
          aria-label="Close positive alert"
        >
          <SfIconClose />
        </button>
      </Alert>

      <Alert variant="positive" className="w-full max-w-[320px]" size="sm">
        <SfIconCheckCircle size="sm" className="my-1.5 text-positive-700 shrink-0" />
        <p className="py-1.5">The product has been added to the cart.</p>
        <button
          type="button"
          className="ms-auto p-1.5 rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900 focus-visible:outline focus-visible:outline-offset"
          aria-label="Close positive alert"
        >
          <SfIconClose size="sm" />
        </button>
      </Alert>
    </div>
  );
}
// #endregion source
AlertPositive.getLayout = ShowcasePageLayout;
