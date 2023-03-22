import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfCheckbox } from '@storefront-ui/react';

export default function CheckboxDemo() {
  return (
    <div className="space-x-4">
      <VsfCheckbox value="value" />
    </div>
  );
}

// #endregion source
CheckboxDemo.getLayout = ShowcasePageLayout;
