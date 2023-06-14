import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfFieldset, SfCheckbox, SfButton } from '@storefront-ui/react';

const checkboxes = [
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-1',
  },
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-2',
  },
  {
    label: 'Label',
    hint: 'hint',
    disabled: true,
    value: 'value-3',
  },
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-4',
  },
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-5',
  },
];

export default function CheckboxBlock() {
  const [invalid, setInvalid] = useState(false);
  return (
    <div>
      <SfFieldset legend="Label" hintText="Hint" invalid={invalid} errorText="Error message">
        {checkboxes.map(({ label, hint, value }) => (
          <label
            key={value}
            className="typography-text-base flex flex-wrap items-center mb-4 first-of-type:mt-2 last-of-type:mb-2 cursor-pointer"
          >
            <SfCheckbox value={value} invalid={invalid} />
            <span className="ml-2">{label}</span>
            <span className="block typography-text-xs ml-7 pt-0.5 text-neutral-500 flex-[100%]">{hint}</span>
          </label>
        ))}
      </SfFieldset>
      <SfButton onClick={() => setInvalid(!invalid)}>Invalid</SfButton>
    </div>
  );
}

// #endregion source
CheckboxBlock.getLayout = ShowcasePageLayout;
