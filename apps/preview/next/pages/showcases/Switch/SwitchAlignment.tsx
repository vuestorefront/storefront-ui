/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfSwitch } from '@storefront-ui/react';
import { useState } from 'react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const [checkedState, setCheckedState] = useState(false);
  return (
    <>
      <label className="flex items-center justify-between">
        <span className="text-base text-gray-900 cursor-pointer font-body">Label</span>
        <VsfSwitch
          checked={checkedState}
          value="value-1"
          onChange={(event) => {
            setCheckedState(event.target.checked);
          }}
        />
      </label>
      <span className="text-xs mt-0.5 block text-gray-500">Help text</span>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
