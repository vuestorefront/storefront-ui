import { VsfCheckbox } from '@storefront-ui/react/components/VsfCheckbox';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
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

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
