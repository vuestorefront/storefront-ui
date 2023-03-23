import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfRadio } from '@storefront-ui/react';
import { useState } from 'react';

const radioOptions = [
  {
    value: 'value-1',
    name: 'radio-1',
  },
  {
    value: 'value-2',
    name: 'radio-2',
  },
];
export default function RadioWithoutLabel() {
  const [checkedState, setCheckedState] = useState('');
  return (
    <>
      {radioOptions.map(({ name, value }) => (
        <SfRadio
          name={name}
          value={value}
          className="block mb-4"
          checked={checkedState === value}
          onChange={(event) => {
            setCheckedState(event.target.value);
          }}
        />
      ))}
    </>
  );
}

// #endregion source
RadioWithoutLabel.getLayout = ShowcasePageLayout;
