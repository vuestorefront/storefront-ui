/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
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
  const [checkedStateRadioOne, setCheckedStateRadioOne] = useState('');
  const [checkedStateRadioTwo, setCheckedStateRadioTwo] = useState('');

  return (
    <div className="flex gap-x-10">
      <fieldset role="radiogroup">
        <div className="flex flex-col">
          {radioOptions.map(({ label, value, name }) => (
            <label key={value} className="flex items-center mb-4 cursor-pointer">
              <VsfRadio
                name={name}
                value={value}
                checked={checkedStateRadioOne === value}
                onChange={(event) => {
                  setCheckedStateRadioOne(event.target.value);
                }}
              />
              <span className="ml-2 text-base font-normal leading-6 font-body">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset role="radiogroup">
        <div className="flex flex-row">
          {radioOptionsTwo.map(({ label, value, name }) => (
            <label key={value} className="flex items-center mx-4 cursor-pointer">
              <VsfRadio
                name={name}
                value={value}
                checked={checkedStateRadioTwo === value}
                onChange={(event) => {
                  setCheckedStateRadioTwo(event.target.value);
                }}
              />
              <span className="ml-2 text-base font-normal leading-6 font-body">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
