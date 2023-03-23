/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfSwitch } from '@storefront-ui/react';
import { useState } from 'react';

export default function SwitchWithoutLabel() {
  const [checkedState, setCheckedState] = useState(false);
  return (
    <SfSwitch
      checked={checkedState}
      value="value-1"
      onChange={(event) => {
        setCheckedState(event.target.checked);
      }}
    />
  );
}

// #endregion source
SwitchWithoutLabel.getLayout = ShowcasePageLayout;
