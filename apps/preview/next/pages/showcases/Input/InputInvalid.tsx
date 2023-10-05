/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfInput } from '@storefront-ui/react';

export default function InvalidInput() {
  return (
    <>
      <label>
        <span className="text-sm font-medium">Label</span>
        <SfInput invalid />
      </label>
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-negative-700 font-medium mt-0.5">Error</p>
          <p className="typography-hint-xs text-neutral-500 mt-0.5">Help Text</p>
        </div>
      </div>
    </>
  );
}

// #endregion source
InvalidInput.getLayout = ShowcasePageLayout;
