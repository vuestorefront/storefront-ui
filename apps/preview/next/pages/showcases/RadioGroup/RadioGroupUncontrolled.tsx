/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { VsfRadio } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <fieldset role="radiogroup">
      <div className="flex flex-col">
        <label className="flex items-center mb-4 cursor-pointer">
          <VsfRadio name="name" />
          <span className="ml-2 text-base font-normal leading-6 font-body">Label</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <VsfRadio name="name" />
          <span className="ml-2 text-base font-normal leading-6 font-body">Label 2</span>
        </label>
      </div>
    </fieldset>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
