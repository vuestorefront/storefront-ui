import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfFieldset, SfCheckbox, SfButton } from '@storefront-ui/react';

const checkboxes = [
  {
    label: 'Label-1',
    hint: 'hint',
    value: 'value-1',
  },
  {
    label: 'Label-2',
    hint: 'hint',
    value: 'value-2',
  },
  {
    label: 'Label-3',
    hint: 'hint',
    value: 'value-3',
  },
  {
    label: 'Label-4',
    hint: 'hint',
    value: 'value-4',
  },
  {
    label: 'Label-5',
    hint: 'hint',
    value: 'value-5',
  },
];

export default function CheckboxLeading() {
  const [invalid, setInvalid] = useState(false);
  return (
    <div>
      <SfFieldset legend="Label" hintText="Hint" invalid={invalid} errorText="Error message">
        <span className="flex flex-wrap justify-between">
          {checkboxes.map(({ label, hint, value }) => (
            <label key={value} className="typography-text-base flex flex-wrap items-center cursor-pointer">
              <SfCheckbox value={value} className="m-0.5" invalid={invalid} />
              <span className="ml-2">{label}</span>
              <span className="block typography-text-xs ml-8 pt-0.5 text-neutral-500 flex-[100%]">{hint}</span>
            </label>
          ))}
        </span>
      </SfFieldset>
      <SfButton onClick={() => setInvalid(!invalid)}>Invalid</SfButton>
    </div>
  );
}

// #endregion source
CheckboxLeading.getLayout = ShowcasePageLayout;
