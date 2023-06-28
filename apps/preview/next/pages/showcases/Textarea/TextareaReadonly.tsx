/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTextarea } from '@storefront-ui/react';

export default function ReadonlyTextarea() {
  return (
    <>
      <label>
        <span className="text-sm font-medium">Label</span>
        <SfTextarea value="value" className="w-full !bg-disabled-100 !ring-disabled-300 !ring-1" readOnly />
      </label>
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-neutral-500 mt-0.5">Help Text</p>
        </div>
      </div>
    </>
  );
}

// #endregion source
ReadonlyTextarea.getLayout = ShowcasePageLayout;
