/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfInput } from '@storefront-ui/react';

export default function DisabledInputDemo() {
  return (
    <>
      <label>
        <span className="text-sm font-medium cursor-not-allowed text-disabled-900">Label</span>
        <SfInput disabled wrapperClassName="!bg-disabled-100 !ring-disabled-300 !ring-1" />
      </label>
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-disabled-500 mt-0.5">Help Text</p>
        </div>
      </div>
    </>
  );
}

// #endregion source
DisabledInputDemo.getLayout = ShowcasePageLayout;
