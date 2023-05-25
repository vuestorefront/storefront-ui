import { ShowcasePageLayout } from '../../showcases';
// #region source
import { type ChangeEvent, type FormEvent, type KeyboardEvent, useState, useRef, useId, useEffect } from 'react';
import { useDebounce } from 'react-use';
import { offset } from '@floating-ui/react-dom';
import {
  SfInput,
  SfIconExpandMore,
  useDisclosure,
  SfListItem,
  SfLoaderCircular,
  useTrapFocus,
  useDropdown,
  SfSwitch,
} from '@storefront-ui/react';
import classNames from 'classnames';

export function DisableSwitch({
  disabledState,
  setDisabledState,
}: {
  disabledState: boolean;
  setDisabledState: (disabledState: boolean) => void;
}) {
  return (
    <div className="mt-40">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="flex items-center">
        <SfSwitch checked={disabledState} value="disabled" onChange={() => setDisabledState(!disabledState)} />
        <span className="text-base ml-[10px] text-gray-900 cursor-pointer font-body">Disabled/Enabled</span>
      </label>
    </div>
  );
}

type SelectOption = {
  label: string;
  value: string;
};

const options: SelectOption[] = [
  {
    label: 'Startup',
    value: 'startup',
  },
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'Buses',
    value: 'buses',
  },
  {
    label: 'Enterprise',
    value: 'enterprise',
  },
  {
    label: 'Enter',
    value: 'enter',
  },
];

// eslint-disable-next-line no-promise-executor-return
const delay = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

const mockAutocompleteRequest = async (phrase: string) => {
  await delay();
  const results = options.filter((option) => option.value.toLowerCase().startsWith(phrase.toLowerCase()));
  return results;
};

export default function ComboboxBasic() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const [isLoadingSnippets, setIsLoadingSnippets] = useState(false);
  const { isOpen, close, open, toggle } = useDisclosure();
  const [snippets, setSnippets] = useState<{ label: string; value: string }[]>([]);
  const { refs, style } = useDropdown({ isOpen, onClose: close, placement: 'bottom-start', middleware: [offset(4)] });
  const [disabledState, setDisabledState] = useState(false);
  const id = useId();
  const listId = useId();

  const { current: currentFocus, focusables: focusableElements } = useTrapFocus(dropdownRef, {
    trapTabs: false,
    arrowKeysOn: true,
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
    if (event.key === 'ArrowUp') {
      open();
      if (isOpen) {
        const focusableElementsAmount = focusableElements.length;
        focusableElements[focusableElementsAmount - 1].focus();
      }
    }
    if (event.key === 'ArrowDown') {
      open();
      if (isOpen) {
        focusableElements[0].focus();
      }
    }
  };

  const selectOption = (event: FormEvent, option: SelectOption) => {
    event.preventDefault();
    setSearchValue(option.value);
    setSelectedValue(option.value);
    close();
    handleFocusInput();
  };

  const handleOptionItemKeyDown = (event: KeyboardEvent<HTMLButtonElement>, option: SelectOption) => {
    if (event.key === ' ' || event.key === 'Enter') selectOption(event, option);
  };

  useDebounce(
    () => {
      if (searchValue && !selectedValue) {
        const getSnippets = async () => {
          if (!isOpen) open();
          setIsLoadingSnippets(true);
          try {
            const data = await mockAutocompleteRequest(searchValue);
            setSnippets(data);
          } catch (error) {
            close();
            console.error(error);
          }
          setIsLoadingSnippets(false);
        };

        getSnippets();
      }
    },
    500,
    [searchValue],
  );

  return (
    <>
      <div ref={refs.setReference} className="relative">
        <label
          className={classNames('font-medium typography-label-sm', { 'text-disabled-900': disabledState })}
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
          aria-autocomplete="both"
          aria-disabled={disabledState}
          aria-expanded={isOpen}
          aria-activedescendant={currentFocus?.id}
          invalid={isValid === false && !isOpen}
          disabled={disabledState}
          onClick={toggle}
          onKeyDown={handleInputKeyDown}
          className={classNames('cursor-pointer', {
            '!text-disabled-500': disabledState,
          })}
          wrapperClassName={classNames({
            '!bg-disabled-100 !ring-disabled-300 !ring-1': disabledState,
          })}
          slotSuffix={
            <SfIconExpandMore
              onClick={() => !disabledState && toggle()}
              className={classNames('ml-auto text-neutral-500 transition-transform ease-in-out duration-300', {
                'rotate-180': isOpen,
                '!text-disabled-500 cursor-not-allowed': disabledState,
              })}
            />
          }
        />
        <div ref={refs.setFloating} style={style} className={classNames('left-0 right-0')}>
          {isOpen &&
            (isLoadingSnippets ? (
              <div className="flex items-center justify-center w-full h-20 py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md">
                <SfLoaderCircular />
              </div>
            ) : (
              <ul
                id={listId}
                role="listbox"
                ref={dropdownRef}
                aria-label="Country list"
                className="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
              >
                {(snippets.length > 0 &&
                  snippets.map((option) => (
                    <li key={option.value}>
                      <SfListItem
                        id={`${listId}-${option.value}`}
                        as="button"
                        type="button"
                        onClick={(event) => selectOption(event, option)}
                        onKeyDown={(event) => handleOptionItemKeyDown(event, option)}
                        className="flex justify-start"
                        aria-selected={option.value === selectedValue}
                      >
                        <p className="text-left">
                          <span className={disabledState ? '!text-disabled-500' : 'text-neutral-500'}>
                            {option.label}
                          </span>
                        </p>
                      </SfListItem>
                    </li>
                  ))) ||
                  (searchValue && (
                    <SfListItem className="flex justify-start" aria-label="No options">
                      <p className="text-left">
                        <span>No options</span>
                      </p>
                    </SfListItem>
                  )) ||
                  options.map((option) => (
                    <li key={option.value}>
                      <SfListItem
                        id={`${listId}-${option.value}`}
                        as="button"
                        type="button"
                        onClick={(event) => selectOption(event, option)}
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
            ))}
        </div>
      </div>
      <p className="text-xs mt-0.5 text-neutral-500">Help text</p>
      <p className="mt-2 text-neutral-500 typography-text-sm">*Required</p>
      {!disabledState && isValid === false && (
        <p className="text-negative-700 typography-text-sm font-medium mt-0.5">No option selected</p>
      )}
      <DisableSwitch setDisabledState={setDisabledState} disabledState={disabledState} />
    </>
  );
}

// #endregion source
ComboboxBasic.getLayout = ShowcasePageLayout;
