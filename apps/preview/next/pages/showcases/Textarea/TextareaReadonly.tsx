/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTextarea } from '@storefront-ui/react';

export default function ReadonlyTextarea() {
  return (
    <>
      <label>
        <span className="typography-text-sm font-medium">Description</span>
        <SfTextarea
          value="Hello! I'm a passionate shopper and a regular user of this ecommerce platform."
          className="w-full !bg-disabled-100 !ring-disabled-300 !ring-1 block"
          readOnly
        />
      </label>
      <p className="typography-hint-xs text-neutral-500 mt-0.5">Do not include personal or financial information.</p>
    </>
  );
}

// #endregion source
ReadonlyTextarea.getLayout = ShowcasePageLayout;
