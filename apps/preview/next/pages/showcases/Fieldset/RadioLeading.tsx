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

export default function RadioLeading() {
  const [invalid, setInvalid] = useState(false);

  return (
    <div>
      <SfFieldset legend="Label" hintText="Hint" invalid={invalid} errorText="Error message">
        <span className="flex flex-wrap justify-between">
          {radio.map(({ label, hint, value }) => (
            <label key={value} className="typography-text-base flex flex-wrap mb-1 items-center cursor-pointer">
              <SfRadio value={value} className="m-0.5" invalid={invalid} />
              <span className="ml-1">{label}</span>
              <span className="block typography-text-xs ml-8 text-neutral-500 flex-[100%]">{hint}</span>
            </label>
          ))}
        </span>
      </SfFieldset>
      <SfButton onClick={() => setInvalid(!invalid)}>Invalid</SfButton>
    </div>
  );
}

// #endregion source
RadioLeading.getLayout = ShowcasePageLayout;
