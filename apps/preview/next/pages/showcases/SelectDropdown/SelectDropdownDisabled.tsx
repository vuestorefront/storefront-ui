import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import classNames from 'classnames';
import {
  SfIconExpandMore,
  SfListItem,
  useDisclosure,
  useDropdown,
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

export default function SelectDropdownDisabled() {
  const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
  const [selectedOption, setSelectedOption] = useState<SelectOption>();
  const id = useId();
  const listboxId = useId();
  const selectTriggerRef = useRef<HTMLDivElement>(null);
  const isDisabled = true;

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

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ') toggle();
  };

  const handleOptionItemKeyDown = (event: KeyboardEvent<HTMLLIElement>, option: SelectOption) => {
    if (event.key === ' ' || event.key === 'Enter') selectOption(option);
  };

  return (
    <>
      <label
        className={classNames('font-medium typography-label-sm', { 'text-disabled-900': isDisabled })}
        htmlFor={id}
      >
        Speed
      </label>
      <div ref={refs.setReference} className="relative">
        <div
          ref={selectTriggerRef}
          role="combobox"
          aria-required="true"
          aria-controls={listboxId}
          aria-expanded={isOpen}
          aria-disabled={isDisabled}
          aria-label="Select one option"
          aria-activedescendant={selectedOption ? `${listboxId}-${selectedOption.value}` : undefined}
          className={classNames(
            'mt-0.5 flex items-center gap-8 relative font-normal typography-text-base ring-1 ring-inset rounded-md py-2 px-4 focus-visible:outline focus-visible:outline-offset',
            isDisabled
              ? 'bg-disabled-100 ring-disabled-300 cursor-not-allowed'
              : 'ring-neutral-300 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 cursor-pointer',
          )}
          tabIndex={isDisabled ? -1 : 0}
          onKeyDown={handleTriggerKeyDown}
          onClick={() => !isDisabled && toggle()}
        >
          {selectedOption ? (
            selectedOption.label
          ) : (
            <span className={isDisabled ? 'text-disabled-500' : 'text-neutral-500'}>Choose from the list</span>
          )}
          <SfIconExpandMore
            className={classNames(
              'ml-auto transition-transform ease-in-out duration-300',
              { 'rotate-180': isOpen },
              isDisabled ? 'text-disabled-500' : 'text-neutral-500',
            )}
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
              onKeyDown={(event) => handleOptionItemKeyDown(event, option)}
              slotSuffix={option.value === selectedOption?.value && <SfIconCheck className="text-primary-700" />}
            >
              {option.label}
            </SfListItem>
          ))}
        </ul>
      </div>
    </>
  );
}
// #endregion source
SelectDropdownDisabled.getLayout = ShowcasePageLayout;
