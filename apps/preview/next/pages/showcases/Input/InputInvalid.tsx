/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfInput } from '@storefront-ui/react';

export default function InvalidInput() {
  return (
    <>
      <label>
        <span className="text-sm font-medium">Label</span>
        <VsfInput invalid />
      </label>
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-negative-700 font-medium mt-0.5">Error</p>
          <p className="text-xs text-neutral-500 mt-0.5">Help Text</p>
        </div>
      </div>
    </>
  );
}

// #endregion source
InvalidInput.getLayout = ShowcasePageLayout;
