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
    <>
      <div className="-mt-4">
        {radioOptions.map(({ label, value, name }) => (
          <label key={value} className="flex flex-row-reverse items-center justify-between mt-4 cursor-pointer">
            <SfRadio
              name={name}
              value={value}
              checked={checkedState === value}
              onChange={(event) => {
                setCheckedState(event.target.value);
              }}
            />
            <span className="ml-2 text-base font-normal leading-5 font-body">{label}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-between mt-2 ml-2">
        <p className="text-xs text-neutral-500">helpText</p>
      </div>
    </>
  );
}

// #endregion source
RadioWithLabelSmall.getLayout = ShowcasePageLayout;
