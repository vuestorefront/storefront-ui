/* eslint-disable jsx-a11y/label-has-associated-control */

import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfInput } from '@storefront-ui/react';

export default function InputWithLabel() {
  return (
    <div className="flex flex-col gap-y-5">
      <SfInput size="sm" aria-label="Label size sm" />
      <SfInput aria-label="Label size base" />
      <SfInput size="lg" aria-label="Label size lg" />
    </div>
  );
}

// #endregion source
InputWithLabel.getLayout = ShowcasePageLayout;
