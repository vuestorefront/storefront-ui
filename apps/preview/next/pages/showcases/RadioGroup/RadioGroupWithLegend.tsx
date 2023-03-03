/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { VsfRadio } from '@storefront-ui/react/components/VsfRadio';
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
export function Showcase() {
  const [checkedState, setCheckedState] = useState('');
  return (
    <fieldset role="radiogroup">
      <legend className="mb-2 text-sm font-normal text-gray-500">Legend</legend>
      <div className="flex flex-col">
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
      </div>
    </fieldset>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
