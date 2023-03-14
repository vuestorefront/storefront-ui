/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfInput } from '@storefront-ui/react/components/VsfInput/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="flex flex-col">
      <label>
        <span className="text-sm font-medium">Label</span>
        <VsfInput size="sm" />
      </label>
      <br />
      <label>
        <span className="text-sm font-medium">Label</span>
        <VsfInput />
      </label>
      <br />
      <label>
        <span className="text-sm font-medium">Label</span>
        <VsfInput size="lg" />
      </label>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
