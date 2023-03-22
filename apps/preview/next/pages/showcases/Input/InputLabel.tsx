/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfInput } from '@storefront-ui/react';

export default function InputWithLabel() {
  return (
    <div className="flex flex-col gap-y-5">
      <label>
        <span className="text-sm font-medium">Label</span>
        <SfInput size="sm" />
      </label>
      <label>
        <span className="text-sm font-medium">Label</span>
        <SfInput />
      </label>
      <label>
        <span className="text-sm font-medium">Label</span>
        <SfInput size="lg" />
      </label>
    </div>
  );
}

// #endregion source
InputWithLabel.getLayout = ShowcasePageLayout;
