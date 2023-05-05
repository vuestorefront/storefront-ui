import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import classNames from 'classnames';
import { SfIconExpandMore, SfListItem, SfDropdown, SfIconCheck, useTrapFocus } from '@storefront-ui/react';

type OptionType = {
  label: string;
  value: string;
};

const options: OptionType[] = [
  {
    label: 'Today',
    value: 'today',
  },
  {
    label: 'Tomorrow',
    value: 'tomorrow',
  },
  {
    label: 'Anytime',
    value: 'anytime',
  },
];

export default function SelectDropdownWithPlaceholder() {
  const [listVisible, setListVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>();
  const listboxId = `select-dropdown-${useId()}`;

  const selectDropdownRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  useTrapFocus(listboxRef, {
    arrowKeysOn: true,
    activeState: listVisible,
    initialFocusContainerFallback: true,
  });

  const selectOption = (option: OptionType) => {
    setSelectedOption(option);
    setListVisible(false);
    selectDropdownRef.current?.focus();
  };

  const handleTriggerKeyDown = (e:  KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ') setListVisible(isOpen => !isOpen);
  };

  const handleOptionItemKeyDown = (e:  KeyboardEvent<HTMLLIElement>, option: OptionType) => {
    if (e.key === ' ' || e.key === 'Enter') selectOption(option);
  };

  return (<>
    <SfDropdown
      open={listVisible}
      onClose={() => setListVisible(false)}
      className="relative !w-full"
      dropdownClassName="w-full"
      trigger={
        <label
          className="font-medium typography-label-sm cursor-pointer"
          onClick={() => setListVisible((isOpen) => !isOpen)}
        >
          Speed
          <div
            ref={selectDropdownRef}
            role="combobox"
            aria-controls={listboxId}
            aria-expanded={listVisible}
            aria-label="Select one option"
            aria-activedescendant={selectedOption ? `${listboxId}-${selectedOption.value}` : undefined}
            className={classNames(
              'mt-0.5 flex items-center gap-8 relative font-normal typography-text-base ring-inset rounded-md py-2 px-4',
              selectedOption
                ? 'ring-1 ring-neutral-300 hover:ring-primary-700 active:ring-primary-700 active:ring-2'
                : 'ring-2 ring-negative-700'
            )}
            tabIndex={0}
            onKeyDown={handleTriggerKeyDown}
          >
            {
              selectedOption
              ? selectedOption.label
              : <span className="text-neutral-500">Choose from the list</span>
            }
            <SfIconExpandMore
              className={classNames('ml-auto text-neutral-500 transition-transform ease-in-out duration-300', { 'rotate-180': listVisible })}
            />
          </div>
        </label>
      }
    >
    <ul
      id={listboxId}
      ref={listboxRef}
      role="listbox"
      aria-label="Select one option"
      className="absolute w-full py-2 rounded-md shadow-md border border-neutral-100 bg-white z-10"
    >
      {options.map((option) => 
        <SfListItem
          id={`${listboxId}-${option.value}`}
          key={option.value}
          role="option"
          tabIndex={0}
          aria-selected={option.value === selectedOption?.value}
          className="block"
          onClick={() => selectOption(option)}
          onKeyDown={(e) => handleOptionItemKeyDown(e, option)}
          slotSuffix={option.value === selectedOption?.value && <SfIconCheck className="text-primary-700" />}
        >
          { option.label }
        </SfListItem>
      )}
    </ul>
    </SfDropdown>
    {!selectedOption && <p className="text-negative-700 typography-text-sm font-medium mt-0.5">No option selected</p>}
  </>);
}
// #endregion source
SelectDropdownWithPlaceholder.getLayout = ShowcasePageLayout;
