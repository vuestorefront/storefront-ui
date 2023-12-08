import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfCheckbox } from '@storefront-ui/react';

export default function CheckboxTrailing() {
  return (
    <>
      <div className="flex justify-between">
        <label
          className="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900"
          htmlFor="checkbox"
        >
          Label
        </label>
        <SfCheckbox value="value" className="peer" id="checkbox" />
      </div>
      <div className="flex justify-between ml-3">
        <p className="typography-hint-xs mt-0.5 text-neutral-500">Help text</p>
      </div>
    </>
  );
}

// #endregion source
CheckboxTrailing.getLayout = ShowcasePageLayout;
