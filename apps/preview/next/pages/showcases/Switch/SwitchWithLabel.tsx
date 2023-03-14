/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfSwitch } from '@storefront-ui/react';
import { useState } from 'react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const [checkedState, setCheckedState] = useState(false);
  return (
    <>
      <label className="flex items-center">
        <VsfSwitch
          checked={checkedState}
          value="value-1"
          onChange={(event) => {
            setCheckedState(event.target.checked);
          }}
        />
        <span className="text-gray-900 font-body text-base cursor-pointer ml-3">Label</span>
      </label>
      <span className="text-xs mt-0.5 ml-12 text-gray-500">Help text</span>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
