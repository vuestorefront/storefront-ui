import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfCheckbox } from '@storefront-ui/react';

export default function CheckboxTrailing() {
  return (
    <div className="flex justify-between">
      <label
        className="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900"
        htmlFor="checkbox"
      >
        Label
      </label>
      <VsfCheckbox value="value" className="peer" id="checkbox" />
    </div>
  );
}

// #endregion source
CheckboxTrailing.getLayout = ShowcasePageLayout;
