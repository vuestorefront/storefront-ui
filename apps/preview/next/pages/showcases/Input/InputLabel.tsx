/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfInput } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col gap-y-5">
      <label>
        <span className="text-sm font-medium">Label</span>
        <VsfInput size="sm" />
      </label>
      <label>
        <span className="text-sm font-medium">Label</span>
        <VsfInput />
      </label>
      <label>
        <span className="text-sm font-medium">Label</span>
        <VsfInput size="lg" />
      </label>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
