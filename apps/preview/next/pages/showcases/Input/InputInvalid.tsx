/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfInput } from '@storefront-ui/react/components/VsfInput/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <>
      <label>
        <span className="text-sm font-medium">Label</span>
        <VsfInput invalid />
      </label>
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-negative-700 font-medium mt-0.5">Error</p>
          <p className="text-xs text-neutral-500 mt-0.5">Help Text</p>
        </div>
      </div>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
