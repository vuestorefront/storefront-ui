import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfCheckbox } from '@storefront-ui/react';

export default function CheckboxDemo() {
  return (
    <div className="space-x-4">
      <SfCheckbox value="value" />
    </div>
  );
}

// #endregion source
CheckboxDemo.getLayout = ShowcasePageLayout;
