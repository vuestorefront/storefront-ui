/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfSwitch } from '@storefront-ui/react';
import { useState } from 'react';

export default function SwitchAlignment() {
  const [checkedState, setCheckedState] = useState(false);
  return (
    <>
      <label className="flex items-center justify-between">
        <span className="text-base text-gray-900 cursor-pointer font-body">Label</span>
        <SfSwitch
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

// #endregion source
SwitchAlignment.getLayout = ShowcasePageLayout;
