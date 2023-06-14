import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { SfFieldset, SfRadio, SfButton } from '@storefront-ui/react';

const radio = [
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

export default function RadioBlock() {
  const [invalid, setInvalid] = useState(false);

  return (
    <div>
      <SfFieldset legend="Label" hintText="Hint" invalid={invalid} errorText="Error message">
        {radio.map(({ label, hint, value }) => (
          <label
            key={value}
            className="typography-text-base flex flex-wrap items-center mb-4 first-of-type:mt-2 last-of-type:mb-2 cursor-pointer"
          >
            <SfRadio value={value} className="m-0.5" invalid={invalid} />
            <span className="ml-1">{label}</span>
            <span className="block typography-text-xs ml-6 pt-0.5 text-neutral-500 flex-[100%]">{hint}</span>
          </label>
        ))}
      </SfFieldset>
      <SfButton onClick={() => setInvalid(!invalid)}>Invalid</SfButton>
    </div>
  );
}

// #endregion source
RadioBlock.getLayout = ShowcasePageLayout;
