import { ShowcasePageLayout } from '../../showcases';
// #region source
import { type ChangeEvent, type FormEvent, type KeyboardEvent, useState, useRef, useId, useEffect } from 'react';
import { offset } from '@floating-ui/react-dom';
import { SfInput, SfIconExpandMore, useDisclosure, SfListItem, useTrapFocus, useDropdown } from '@storefront-ui/react';
import classNames from 'classnames';

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
];

const mockAutocompleteRequest = (phrase: string) => {
  const results = options.filter((option) => option.value.toLowerCase().startsWith(phrase.toLowerCase()));
  return results;
};

export default function ComboboxBasic() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const { isOpen, close, open, toggle } = useDisclosure();
  const [snippets, setSnippets] = useState<{ label: string; value: string }[]>([]);
  const { refs, style } = useDropdown({ isOpen, onClose: close, placement: 'bottom-start', middleware: [offset(4)] });
  const id = useId();
  const listId = useId();
  useTrapFocus(refs.floating, { arrowKeysOn: true, activeState: isOpen, initialFocus: false });

  const handleSelect = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
    close();
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    if (phrase) {
      setSearchValue(phrase);
    } else {
      setSearchValue(undefined);
      setSnippets([]);
      close();
    }
  };

  const selectOption = (event: FormEvent, option: SelectOption) => {
    setSearchValue(option.value);
    handleSelect(event);
    close();
    handleFocusInput();
  };

  const handleOptionItemKeyDown = (event: KeyboardEvent<HTMLButtonElement>, option: SelectOption) => {
    if (event.key === ' ' || event.key === 'Enter') selectOption(event, option);
  };

  useEffect(() => {
    if (searchValue) {
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

  return (
    <div ref={refs.setReference} className="relative">
      <label className="font-medium typography-label-sm" htmlFor={id}>
        Country
      </label>
      <SfInput
        ref={inputRef}
        id={id}
        role="combobox"
        value={searchValue}
        onChange={handleChange}
        aria-label="Choose country"
        placeholder="Choose country"
        aria-controls={listId}
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-activedescendant=""
        onClick={toggle}
        slotSuffix={
          <SfIconExpandMore
            onClick={toggle}
            className={classNames('ml-auto text-neutral-500 transition-transform ease-in-out duration-300', {
              'rotate-180': isOpen,
            })}
          />
        }
      />
      <div ref={refs.setFloating} style={style} className="left-0 right-0">
        {isOpen && (
          <ul
            id={listId}
            role="listbox"
            aria-label="Country list"
            className="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
          >
            {(snippets.length > 0 &&
              snippets.map((option) => (
                <li key={option.value}>
                  <SfListItem
                    as="button"
                    type="button"
                    onClick={(event) => selectOption(event, option)}
                    onKeyDown={(event) => handleOptionItemKeyDown(event, option)}
                    className="flex justify-start"
                  >
                    <p className="text-left">
                      <span>{option.label}</span>
                    </p>
                  </SfListItem>
                </li>
              ))) ||
              (searchValue && (
                <SfListItem className="flex justify-start">
                  <p className="text-left">
                    <span>No options</span>
                  </p>
                </SfListItem>
              )) ||
              options.map((option) => (
                <div key={option.value}>
                  <SfListItem
                    as="button"
                    type="button"
                    onClick={(event) => selectOption(event, option)}
                    onKeyDown={(event) => handleOptionItemKeyDown(event, option)}
                    className="flex justify-start"
                  >
                    <p className="text-left">
                      <span>{option.label}</span>
                    </p>
                  </SfListItem>
                </div>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// #endregion source
ComboboxBasic.getLayout = ShowcasePageLayout;
