/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTextarea } from '@storefront-ui/react';

export default function InvalidTextarea() {
  return (
    <>
      <label>
        <span className="typography-text-sm font-medium">Description</span>
        <SfTextarea invalid placeholder="Write something about yourself..." className="w-full" />
      </label>
      <div className="flex justify-between mt-0.5">
        <div>
          <p className="typography-text-sm text-negative-700 font-medium mt-0.5">The field cannot be empty</p>
          <p className="typography-text-xs text-neutral-500">Do not include personal or financial information.</p>
        </div>
      </div>
    </>
  );
}

// #endregion source
InvalidTextarea.getLayout = ShowcasePageLayout;
