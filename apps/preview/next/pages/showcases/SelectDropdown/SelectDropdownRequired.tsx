import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import classNames from 'classnames';
import {
  useDisclosure,
  useDropdown,
  SfIconExpandMore,
  SfListItem,
  SfIconCheck,
  useTrapFocus,
} from '@storefront-ui/react';

type SelectOption = {
  label: string;
  value: string;
};

const options: SelectOption[] = [
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

export default function SelectDropdownRequired() {
  const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
  const [selectedOption, setSelectedOption] = useState<SelectOption>();
  const id = useId();
  const listboxId = `select-dropdown-${id}`;
  const selectTriggerRef = useRef<HTMLDivElement>(null);

  const { refs, style: dropdownStyle } = useDropdown({ isOpen, onClose: close });

  useTrapFocus(refs.floating, {
    arrowKeysOn: true,
    activeState: isOpen,
    initialFocusContainerFallback: true,
  });

  const selectOption = (option: SelectOption) => {
    setSelectedOption(option);
    close();
    selectTriggerRef.current?.focus();
  };

  const handleTriggerKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ') toggle();
  };

  const handleOptionItemKeyDown = (e: KeyboardEvent<HTMLLIElement>, option: SelectOption) => {
    if (e.key === ' ' || e.key === 'Enter') selectOption(option);
  };

  return (
    <>
      <label className="font-medium typography-label-sm" htmlFor={id}>
        Speed
      </label>
      <div ref={refs.setReference} className="relative">
        <div
          ref={selectTriggerRef}
          role="combobox"
          aria-required="true"
          aria-controls={listboxId}
          aria-expanded={isOpen}
          aria-label="Select one option"
          aria-activedescendant={selectedOption ? `${listboxId}-${selectedOption.value}` : undefined}
          className="mt-0.5 flex items-center gap-8 relative font-normal typography-text-base ring-1 ring-neutral-300 ring-inset rounded-md py-2 px-4 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 focus-visible:outline focus-visible:outline-offset cursor-pointer"
          tabIndex={0}
          onKeyDown={handleTriggerKeyDown}
          onClick={toggle}
        >
          {selectedOption ? selectedOption.label : <span className="text-neutral-500">Choose from the list</span>}
          <SfIconExpandMore
            className={classNames('ml-auto text-neutral-500 transition-transform ease-in-out duration-300', {
              'rotate-180': isOpen,
            })}
          />
        </div>
        <ul
          id={listboxId}
          ref={refs.setFloating}
          role="listbox"
          aria-label="Select one option"
          className={classNames('w-full py-2 rounded-md shadow-md border border-neutral-100 bg-white z-10', {
            hidden: !isOpen,
          })}
          style={dropdownStyle}
        >
          {options.map((option) => (
            <SfListItem
              id={`${listboxId}-${option.value}`}
              key={option.value}
              role="option"
              tabIndex={0}
              aria-selected={option.value === selectedOption?.value}
              className={classNames('block', { 'font-medium': option.value === selectedOption?.value })}
              onClick={() => selectOption(option)}
              onKeyDown={(e) => handleOptionItemKeyDown(e, option)}
              slotSuffix={option.value === selectedOption?.value && <SfIconCheck className="text-primary-700" />}
            >
              {option.label}
            </SfListItem>
          ))}
        </ul>
      </div>
      <p className="mt-0.5 text-neutral-500 typography-text-xs">Help text</p>
      <p className="mt-2 text-neutral-500 typography-text-sm">*Required</p>
    </>
  );
}
// #endregion source
SelectDropdownRequired.getLayout = ShowcasePageLayout;
