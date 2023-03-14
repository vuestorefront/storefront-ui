/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfRadio } from '@storefront-ui/react';
import { useState } from 'react';
import { ShowcasePageLayout } from '../../showcases';

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

const radioOptionsTwo = [
  {
    label: 'Label',
    value: 'value-1',
    name: 'radio-2',
  },
  {
    label: 'Label 2',
    value: 'value-2',
    name: 'radio-2',
  },
];

export function Showcase() {
  const [checkedState, setCheckedState] = useState('');
  const [checkedStateTwo, setCheckedStateTwo] = useState('');
  return (
    <div>
      {radioOptions.map(({ label, value, name }) => (
        <label key={value} className="flex items-center mb-4 cursor-pointer">
          <VsfRadio
            name={name}
            value={value}
            checked={checkedState === value}
            onChange={(event) => {
              setCheckedState(event.target.value);
            }}
          />
          <span className="ml-2 text-base font-normal leading-6 font-body">{label}</span>
        </label>
      ))}
      {radioOptionsTwo.map(({ label, value, name }) => (
        <label key={value} className="flex items-center justify-between max-w-xs mb-4 cursor-pointer">
          <span className="ml-2 text-base font-normal leading-6 font-body">{label}</span>
          <VsfRadio
            name={name}
            value={value}
            checked={checkedStateTwo === value}
            onChange={(event) => {
              setCheckedStateTwo(event.target.value);
            }}
          />
        </label>
      ))}
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
