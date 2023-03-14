import { VsfCheckbox } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
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

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
