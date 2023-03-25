import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfCheckbox } from '@storefront-ui/react';

export default function CheckboxLeading() {
  return (
    <>
      <div className="flex items-center">
        <SfCheckbox value="value" className="peer" id="checkbox" />
        <label
          className="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900"
          htmlFor="checkbox"
        >
          Label
        </label>
      </div>
      <div className="flex justify-between ml-8">
        <p className="text-xs mt-0.5 text-neutral-500">Help text</p>
      </div>
    </>
  );
}

// #endregion source
CheckboxLeading.getLayout = ShowcasePageLayout;
