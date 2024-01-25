import { ShowcasePageLayout } from '../../showcases';
// #region source
import Alert from './Alert';

export default function AlertNeutral() {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="neutral" className="w-full max-w-[640px]">
        <p className="py-2">Happy shopping!</p>
      </Alert>

      <Alert variant="neutral" size="sm" className="w-full max-w-[320px]">
        <p className="py-1.5">Happy shopping!</p>
      </Alert>
    </div>
  );
}
// #endregion source
AlertNeutral.getLayout = ShowcasePageLayout;
