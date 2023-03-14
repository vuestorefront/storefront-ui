/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfSwitch } from '@storefront-ui/react';
import { useState } from 'react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const [checkedState, setCheckedState] = useState(false);
  return (
    <>
      <label className="flex justify-between items-center">
        <span className="text-gray-900 font-body text-base cursor-pointer">Label</span>
        <VsfSwitch
          checked={checkedState}
          value="value-1"
          onChange={(event) => {
            setCheckedState(event.target.checked);
          }}
        />
      </label>
      <span className="text-xs mt-0.5 text-gray-500">Help text</span>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
