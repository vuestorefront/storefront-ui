/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTextarea } from '@storefront-ui/react';

export default function DisabledTextareaDemo() {
  return (
    <>
      <label>
        <span className="typography-text-sm font-medium cursor-not-allowed text-disabled-900">Description</span>
        <SfTextarea
          disabled
          placeholder="Write something about yourself..."
          className="w-full !bg-disabled-100 !ring-disabled-300 !ring-1 block"
        />
      </label>
      <p className="typography-hint-xs text-disabled-500  mt-0.5">Do not include personal or financial information.</p>
    </>
  );
}

// #endregion source
DisabledTextareaDemo.getLayout = ShowcasePageLayout;
