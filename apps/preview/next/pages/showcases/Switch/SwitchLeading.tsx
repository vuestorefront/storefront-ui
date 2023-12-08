/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfSwitch } from '@storefront-ui/react';
import { useState } from 'react';

export default function SwitchAlignment() {
  const [checkedState, setCheckedState] = useState(false);
  return (
    <>
      <label className="flex items-center">
        <SfSwitch
          checked={checkedState}
          value="value-1"
          onChange={(event) => {
            setCheckedState(event.target.checked);
          }}
        />
        <span className="text-base ml-[10px] text-gray-900 cursor-pointer font-body">Label</span>
      </label>
      <span className="typography-hint-xs mt-0.5 ml-12 block text-gray-500">Help text</span>
    </>
  );
}

// #endregion source
SwitchAlignment.getLayout = ShowcasePageLayout;
