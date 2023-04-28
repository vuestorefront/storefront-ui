import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useState } from 'react';
import classNames from 'classnames';
import { SfIconExpandMore, SfListItem, SfDropdown, SfIconCheck } from '@storefront-ui/react';

type OptionType = {
  label: string;
  value: string;
};
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
  const [selectedOption, setSelectedOption] = useState(options[0].label);
  const [listVisible, setListVisible] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setListVisible(false);
  };
  

  return (
    <div>
    <SfDropdown open={listVisible} onClose={() => setListVisible(false)} className="!w-full relative" dropdownClassName="w-full" trigger={<label className={classNames('font-medium typography-label-sm w-full cursor-pointer')}
        >Product
        <div
          aria-controls={`select-dropdown-${listboxId}`}
          aria-expanded={listVisible}
          aria-label="Select one option"
          className={classNames(
            'flex items-center relative font-normal ring-1 ring-gray-200 ring-inset rounded-md py-2 pl-4 pr-3 bg-white hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
            { '!ring-2 !ring-negative-700': !selectedOption },
          )}
          role="combobox"
          tabIndex={0}
          onClick={() => setListVisible(true)}
        >
          <span className="'text-neutral-500">{selectedOption}</span>
          <div className="ml-auto text-neutral-500">
            <SfIconExpandMore
              className={classNames(
                'transition-transform ease-in-out duration-300',
                { 'rotate-180': listVisible },
              )}
            />
          </div>
        </div>
      </label>}>
    {listVisible && <ul
      id={`select-dropdown-${listboxId}`}
      className="absolute w-full rounded-md shadow-md border border-neutral-100 bg-white z-1"
    >
      {options.map(({value, label}) => <SfListItem key={value} className="block" slotSuffix={label === selectedOption && <SfIconCheck className="text-primary-700" />} onClick={() => handleSelect(label)}>
        { label }
      </SfListItem>
      )}
    </ul>}
  </SfDropdown>
  { !selectedOption && <p className="text-negative-700 typography-text-sm font-medium mt-1">No option selected</p>}
</div>
  );
}
// #endregion source
SelectDropdownDisabled.getLayout = ShowcasePageLayout;
