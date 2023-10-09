/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTextarea } from '@storefront-ui/react';

export default function InvalidTextarea() {
  return (
    <>
      <label>
        <span className="typography-text-sm font-medium">Description</span>
        <SfTextarea invalid placeholder="Write something about yourself..." className="w-full block" />
      </label>
      <div className="flex justify-between mt-0.5">
        <p className="typography-text-sm text-negative-700 font-medium">The field cannot be empty</p>
        <p className="typography-hint-xs text-neutral-500">Do not include personal or financial information.</p>
      </div>
    </>
  );
}

// #endregion source
InvalidTextarea.getLayout = ShowcasePageLayout;
