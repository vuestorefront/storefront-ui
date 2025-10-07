/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfInput, SfIconPerson, SfIconLockOpen } from '@storefront-ui/react';

export default function InputWithPrefix() {
  return (
    <label>
      <span className="text-sm font-medium">Label</span>
      <SfInput wrapperClassName="mt-0.5" slotPrefix={<SfIconPerson />} slotSuffix={<SfIconLockOpen />} />
    </label>
  );
}

// #endregion source
InputWithPrefix.getLayout = ShowcasePageLayout;
