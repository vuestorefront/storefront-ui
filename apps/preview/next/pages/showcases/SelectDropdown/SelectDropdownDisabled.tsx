import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useState } from 'react';
import classNames from 'classnames';
import { SfIconExpandMore, SfListItem, SfDropdown, SfIconCheck } from '@storefront-ui/react';

type OptionType = {
  label: string;
  value: string;
};
const isDisabled = true;

const options: Array<OptionType> = [
  {
    label: 'Startup',
    value: 'startup',
  },
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'Enterprise',
    value: 'enterprise',
  },
];

export default function SelectDropdownDisabled() {
  const listboxId = useId();
  const [selectedOption, setSelectedOption] = useState('');
  const [listVisible, setListVisible] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setListVisible(false);
  };
  

  return (
    <SfDropdown open={listVisible} onClose={() => setListVisible(false)} className="!w-full" trigger={<label className={classNames('font-medium typography-label-sm w-full', { 'cursor-not-allowed text-disabled-900': isDisabled })}
        >Product
        <div
          aria-controls={`select-dropdown-${listboxId}`}
          aria-expanded={listVisible}
          aria-label="Select one option"
          className={classNames(
            'flex items-center relative font-normal ring-1 ring-inset rounded-md py-2 px-4',
            { 'bg-disabled-100 ring-disabled-300': isDisabled },
          )}
          role="combobox"
          tabIndex={isDisabled ? -1 : 0}
        >
          <span className={classNames('text-neutral-500', { '!text-disabled-500': isDisabled })}>Choose from the list</span>
          <div className="ml-auto text-neutral-500">
            <SfIconExpandMore
              className={classNames(
                'transition-transform ease-in-out duration-300',
                { 'rotate-180': listVisible, '!text-disabled-500': isDisabled },
              )}
            />
          </div>
        </div>
      </label>}>
    {listVisible && <ul
      id={`select-dropdown-${listboxId}`}
      className="absolute w-full rounded-md shadow-md border border-neutral-100 bg-white z-1"
    >
      {options.map(({value, label}) => <SfListItem key={value} className="block" slotSuffix={<SfIconCheck v-if="label === selectedOption" className="text-primary-700" />} onClick={() => handleSelect(label)}>
        { label }
      </SfListItem>
      )}
    </ul>}
  </SfDropdown>
  );
}
// #endregion source
SelectDropdownDisabled.getLayout = ShowcasePageLayout;
