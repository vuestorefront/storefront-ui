/* eslint-disable no-promise-executor-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { type ChangeEvent, type KeyboardEvent, useState, useRef, useId, useEffect } from 'react';
import { offset } from '@floating-ui/react-dom';
import {
  SfInput,
  SfIconExpandMore,
  useDisclosure,
  SfListItem,
  useTrapFocus,
  useDropdown,
  SfSwitch,
} from '@storefront-ui/react';
import classNames from 'classnames';

export function DisableSwitch({
  disabled,
  onChangeHandler,
  className,
}: {
  disabled: boolean;
  onChangeHandler: () => void;
  className: string;
}) {
  return (
    <div className={classNames(['mt-4', className])}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="flex items-center">
        <SfSwitch checked={disabled} value="disabled" onChange={onChangeHandler} />
        <span className="text-base ml-[10px] text-gray-900 cursor-pointer font-body">
          {disabled ? 'Disabled' : 'Enabled'}
        </span>
      </label>
    </div>
  );
}

type SelectOption = {
  label: string;
  value: string;
};

const countriesList: SelectOption[] = [
  {
    label: 'Afghanistan',
    value: 'afghanistan',
  },
  {
    label: 'Albania',
    value: 'albania',
  },
  {
    label: 'Angola',
    value: 'angola',
  },
  {
    label: 'Bahamas',
    value: 'bahamas',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Canada',
    value: 'canada',
  },
  {
    label: 'Chile',
    value: 'chile',
  },
  {
    label: 'Czech Republic',
    value: 'czech Republic',
  },
  {
    label: 'Colombia',
    value: 'colombia',
  },
  {
    label: 'Congo',
    value: 'congo',
  },
  {
    label: 'Croatia',
    value: 'croatia',
  },
  {
    label: 'Cuba',
    value: 'cuba',
  },
  {
    label: 'Denmark',
    value: 'denmark',
  },
  {
    label: 'Dominica',
    value: 'dominica',
  },
  {
    label: 'Egypt',
    value: 'egypt',
  },
  {
    label: 'Ethiopia',
    value: 'ethiopia',
  },
  {
    label: 'Estonia',
    value: 'estonia',
  },
];

const mockAutocompleteRequest = (phrase: string) => {
  const results = countriesList.filter((option: SelectOption) =>
    option.value.toLowerCase().startsWith(phrase.toLowerCase()),
  );
  return results;
};

export default function ComboboxBasic() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const { isOpen, close, open, toggle } = useDisclosure();
  const [snippets, setSnippets] = useState<{ label: string; value: string }[]>([]);
  const { refs, style } = useDropdown({ isOpen, onClose: close, placement: 'bottom-start', middleware: [offset(4)] });
  const [isDisabled, setIsDisabled] = useState(false);
  const id = useId();
  const listId = useId();

  const {
    current: currentFocus,
    focusables: focusableElements,
    updateFocusableElements,
  } = useTrapFocus(dropdownRef, {
    trapTabs: false,
    arrowKeysUpDown: true,
    activeState: isOpen,
    initialFocus: false,
  });

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleReset = () => {
    setSearchValue('');
    setSnippets([]);
    close();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    setSelectedValue('');
    if (phrase) {
      setSearchValue(phrase);
    } else {
      handleReset();
    }
  };

  const handleBlur = () => {
    if (isOpen) return;
    setIsValid(!!selectedValue);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') handleReset();
    if (event.key === 'Enter') close();
    if (event.key === 'ArrowUp') {
      open();
      updateFocusableElements();
      if (isOpen && focusableElements.length > 0) {
        focusableElements[focusableElements.length - 1].focus();
      }
    }
    if (event.key === 'ArrowDown') {
      open();
      updateFocusableElements();
      if (isOpen && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  };

  const selectOption = (option: SelectOption) => {
    setSearchValue(option.label);
    setSelectedValue(option.label);
    close();
    handleFocusInput();
  };

  const handleOptionItemKeyDown = (event: KeyboardEvent<HTMLButtonElement>, option: SelectOption) => {
    if (event.key === 'Escape') {
      handleFocusInput();
    } else if (event.key === ' ' || event.key === 'Enter') selectOption(option);
  };

  useEffect(() => {
    if (searchValue && !selectedValue) {
      const getSnippets = async () => {
        open();
        try {
          const data = await mockAutocompleteRequest(searchValue);
          setSnippets(data);
        } catch (error) {
          close();
          console.error(error);
        }
      };
      getSnippets();
    }
  }, [searchValue]);

  const onDisabledChangeHandler = () => {
    setIsDisabled((disabled) => !disabled);
  };

  return (
    <>
      <div ref={refs.setReference} className="relative">
        <label
          className={classNames('font-medium typography-label-sm', { 'text-disabled-900': isDisabled })}
          htmlFor={id}
        >
          Country
        </label>
        <SfInput
          ref={inputRef}
          id={id}
          role="combobox"
          value={searchValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setIsValid(undefined)}
          aria-label="Choose country"
          placeholder="Choose country"
          aria-controls={listId}
          aria-autocomplete="list"
          aria-disabled={isDisabled}
          aria-expanded={isOpen}
          aria-activedescendant={currentFocus?.id}
          invalid={isValid === false && !isOpen}
          disabled={isDisabled}
          onClick={toggle}
          onKeyDown={handleInputKeyDown}
          className={classNames('cursor-pointer', {
            '!text-disabled-500': isDisabled,
          })}
          wrapperClassName={classNames({
            '!bg-disabled-100 !ring-disabled-300 !ring-1': isDisabled,
          })}
          slotSuffix={
            <SfIconExpandMore
              onClick={() => !isDisabled && toggle()}
              className={classNames('ml-auto text-neutral-500 transition-transform ease-in-out duration-300', {
                'rotate-180': isOpen,
                '!text-disabled-500 cursor-not-allowed': isDisabled,
              })}
            />
          }
        />
        <div ref={refs.setFloating} style={style} className="left-0 right-0 z-1">
          {isOpen && (
            <ul
              id={listId}
              role="listbox"
              ref={dropdownRef}
              aria-label="Country list"
              className="max-h-80 px-1 -mx-1 py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md overflow-y-auto"
            >
              {(snippets.length > 0 &&
                snippets.map((option) => (
                  <li key={`${listId}-${option.value}`}>
                    <SfListItem
                      id={`${listId}-${option.value}`}
                      as="button"
                      type="button"
                      onClick={() => selectOption(option)}
                      onKeyDown={(event) => handleOptionItemKeyDown(event, option)}
                      className="flex justify-start"
                      aria-selected={option.value === selectedValue}
                    >
                      <p className="text-left">
                        <span>{option.label}</span>
                      </p>
                    </SfListItem>
                  </li>
                ))) ||
                (searchValue && (
                  <p className="inline-flex px-4 py-2 w-full text-left" aria-label="No options">
                    <span>No options</span>
                  </p>
                )) ||
                countriesList.map((option) => (
                  <li key={`${listId}-${option.value}`}>
                    <SfListItem
                      id={`${listId}-${option.value}`}
                      as="button"
                      type="button"
                      onClick={() => selectOption(option)}
                      onKeyDown={(event) => handleOptionItemKeyDown(event, option)}
                      className="flex justify-start"
                      aria-selected={option.value === selectedValue}
                    >
                      <p className="text-left">
                        <span>{option.label}</span>
                      </p>
                    </SfListItem>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
      {!isDisabled && isValid === false && (
        <p className="text-negative-700 typography-text-sm font-medium mt-0.5">No option selected</p>
      )}
      <p className="text-xs mt-0.5 text-neutral-500">Help text</p>
      <p className="mt-2 text-neutral-500 typography-text-sm">*Required</p>
      <DisableSwitch
        className={classNames({ hidden: isOpen })}
        onChangeHandler={onDisabledChangeHandler}
        disabled={isDisabled}
      />
    </>
  );
}

// #endregion source
ComboboxBasic.getLayout = ShowcasePageLayout;
