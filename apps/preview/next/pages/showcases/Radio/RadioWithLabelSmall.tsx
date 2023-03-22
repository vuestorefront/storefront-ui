import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfRadio } from '@storefront-ui/react';
import { useState } from 'react';

const radioOptions = [
  {
    label: 'Label',
    value: 'value-1',
    name: 'radio-1',
  },
  {
    label: 'Label 2',
    value: 'value-2',
    name: 'radio-1',
  },
];
export default function RadioWithLabelSmall() {
  const [checkedState, setCheckedState] = useState('');
  return (
    <div>
      {radioOptions.map(({ label, value, name }) => (
        <label key={value} className="flex items-center mb-4 cursor-pointer">
          <SfRadio
            name={name}
            value={value}
            checked={checkedState === value}
            onChange={(event) => {
              setCheckedState(event.target.value);
            }}
          />
          <span className="ml-2 text-sm font-normal leading-5 font-body">{label}</span>
        </label>
      ))}
    </div>
  );
}

// #endregion source
RadioWithLabelSmall.getLayout = ShowcasePageLayout;
