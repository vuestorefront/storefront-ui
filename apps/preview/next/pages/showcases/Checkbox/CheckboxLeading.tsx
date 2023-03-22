import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfCheckbox } from '@storefront-ui/react';

export default function CheckboxLeading() {
  return (
    <div className="flex items-center">
      <VsfCheckbox value="value" className="peer" id="checkbox" />
      <label
        className="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900"
        htmlFor="checkbox"
      >
        Label
      </label>
    </div>
  );
}

// #endregion source
CheckboxLeading.getLayout = ShowcasePageLayout;
