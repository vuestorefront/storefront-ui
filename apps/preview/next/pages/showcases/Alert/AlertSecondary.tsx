import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconInfo } from '@storefront-ui/react';
import Alert from './Alert';

export default function AlertSecondary() {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="secondary" className="w-full max-w-[640px]">
        <SfIconInfo className="my-2 text-secondary-700 shrink-0" />
        <p className="py-2">Your cart will soon be full.</p>
      </Alert>
  
      <Alert variant="secondary" size="sm" className="w-full max-w-[320px]">
        <SfIconInfo size="sm" className="my-1.5 text-secondary-700 shrink-0" />
        <p className="py-1.5">Your cart will soon be full.</p>
      </Alert>
    </div>
  );
}
// #endregion source
AlertSecondary.getLayout = ShowcasePageLayout;
