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

interface SelectDropdownProps {
  options: SelectOption[];
  label?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: SelectOption;
  disabled?: boolean;
  isError?: boolean;
  className?: string;
}

export default function SelectDropdown(props: SelectDropdownProps) {
  const { options, label, name, disabled, isError, defaultValue, placeholder, className } = props;
  const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
  const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(defaultValue);
  const id = useId();
  const listboxId = useId();
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

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ') toggle();
  };

  const handleOptionItemKeyDown = (event: KeyboardEvent<HTMLLIElement>, option: SelectOption) => {
    if (event.key === ' ' || event.key === 'Enter') selectOption(option);
  };

  return (
    <>
      <label className="font-medium typography-label-sm" htmlFor={id}>
        {label}
      </label>
      <input id={id} hidden name={name} value={selectedOption?.value} />
      <div ref={refs.setReference} className={classNames('relative', className)}>
        <div
          ref={selectTriggerRef}
          role="combobox"
          aria-required="true"
          aria-controls={listboxId}
          aria-expanded={isOpen}
          aria-disabled={disabled}
          aria-label="Select one option"
          aria-activedescendant={selectedOption ? `${listboxId}-${selectedOption.value}` : undefined}
          className={classNames(
            'flex items-center gap-8 relative font-normal typography-text-base ring-1 ring-inset rounded-md py-2 px-4',
            {
              'mt-0.5': label,
            },
            disabled
              ? 'bg-disabled-100 ring-disabled-300 cursor-not-allowed'
              : 'ring-neutral-300 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 cursor-pointer',
            isError
              ? 'ring-2 ring-negative-700'
              : 'ring-1 ring-neutral-300 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2',
          )}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleTriggerKeyDown}
          onClick={() => !disabled && toggle()}
        >
          {selectedOption ? (
            <span className="whitespace-nowrap">{selectedOption.label}</span>
          ) : (
            <span className={disabled ? 'text-disabled-500' : 'text-neutral-500'}>{placeholder}</span>
          )}
          <SfIconExpandMore
            className={classNames(
              'ml-auto transition-transform ease-in-out duration-300',
              { 'rotate-180': isOpen },
              disabled ? 'text-disabled-500' : 'text-neutral-500',
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
      {isError && <p className="text-negative-700 typography-text-sm font-medium mt-0.5">No option selected</p>}
    </>
  );
}
// #endregion source
SelectDropdown.getLayout = ShowcasePageLayout;
