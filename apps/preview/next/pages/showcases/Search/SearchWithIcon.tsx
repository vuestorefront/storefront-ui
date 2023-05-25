/* eslint-disable no-alert */
/* eslint-disable no-console */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { type ChangeEvent, type FormEvent, useState, useRef } from 'react';
import { useDebounce } from 'react-use';
import { offset } from '@floating-ui/react-dom';
import {
  SfButton,
  SfInput,
  SfIconSearch,
  SfIconCancel,
  useDisclosure,
  SfListItem,
  SfLoaderCircular,
  useTrapFocus,
  useDropdown,
} from '@storefront-ui/react';

interface Product {
  id: string;
  name: string;
  category: string;
}

const mockProducts: Product[] = [
  { id: 'ip-14', name: 'iPhone 14', category: 'Smartphones' },
  { id: 'ip-14-pro', name: 'iPhone 14 Pro', category: 'Smartphones' },
  { id: 'ip-14-pro-max', name: 'iPhone 14 Pro Max', category: 'Smartphones' },
  { id: 'ip-14-plus', name: 'iPhone 14 Plus', category: 'Smartphones' },
  { id: 'ip-13', name: 'iPhone 13', category: 'Smartphones' },
  { id: 'ip-13-mini', name: 'iPhone 13 mini', category: 'Smartphones' },
  { id: 'ip-12', name: 'iPhone 12', category: 'Smartphones' },
  { id: 'ip-11', name: 'iPhone 11', category: 'Smartphones' },
  { id: 'mb-air', name: 'MacBook Air', category: 'Laptops' },
  { id: 'mb-pro-13', name: 'MacBook Pro 13"', category: 'Laptops' },
  { id: 'mb-pro-14', name: 'MacBook Pro 14"', category: 'Laptops' },
  { id: 'mb-pro-16', name: 'MacBook Pro 16"', category: 'Laptops' },
];

// Just for presentation purposes. Replace mock request with the actual API call.
// eslint-disable-next-line no-promise-executor-return
const delay = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
const mockAutocompleteRequest = async (phrase: string) => {
  await delay();
  const results = mockProducts
    .filter((product) => product.name.toLowerCase().startsWith(phrase.toLowerCase()))
    .map((product) => {
      const highlight = product.name.substring(0, phrase.length);
      const rest = product.name.substring(phrase.length);
      return { highlight, rest, product };
    });
  return results;
};

export default function SearchWithIcon() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownListRef = useRef<HTMLUListElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const [isLoadingSnippets, setIsLoadingSnippets] = useState(false);
  const [snippets, setSnippets] = useState<{ highlight: string; rest: string; product: Product }[]>([]);
  const { isOpen, close, open } = useDisclosure();
  const { refs, style } = useDropdown({
    isOpen,
    onClose: close,
    placement: 'bottom-start',
    middleware: [offset(4)],
  });
  useTrapFocus(dropdownListRef, { arrowKeysOn: true, activeState: isOpen, initialFocus: false });
  const isResetButton = Boolean(searchValue);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    close();
    alert(`Search for phrase: ${searchValue}`);
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleReset = () => {
    setSearchValue('');
    setSnippets([]);
    close();
    handleFocusInput();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    if (phrase) {
      setSearchValue(phrase);
    } else {
      handleReset();
    }
  };

  const handleSelect = (phrase: string) => () => {
    setSearchValue(phrase);
    close();
    handleFocusInput();
  };

  useDebounce(
    () => {
      if (searchValue) {
        const getSnippets = async () => {
          open();
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
    <form role="search" onSubmit={handleSubmit} ref={refs.setReference} className="relative">
      <div className="flex">
        <SfInput
          ref={inputRef}
          value={searchValue}
          onChange={handleChange}
          onFocus={open}
          wrapperClassName="w-full ring-0 active:ring-0 hover:ring-0 focus-within:ring-0 border-y border-l border-neutral-200 rounded-r-none hover:border-primary-800 active:border-primary-700 active:border-y-2 active:border-l-2 focus-within:border-y-2 focus-within:border-l-2 focus-within:border-primary-700"
          aria-label="Search"
          placeholder="Search 'MacBook' or 'iPhone'..."
          slotPrefix={<SfIconSearch />}
          slotSuffix={
            isResetButton && (
              <button
                type="reset"
                onClick={handleReset}
                aria-label="Reset search"
                className="flex rounded-md focus-visible:outline focus-visible:outline-offset"
              >
                <SfIconCancel />
              </button>
            )
          }
        />
        <SfButton type="submit" aria-label="Search for a specific phrase on the page" className="rounded-l-none">
          <SfIconSearch />
        </SfButton>
      </div>
      {isOpen && (
        <div ref={refs.setFloating} style={style} className="left-0 right-0">
          {isLoadingSnippets ? (
            <div className="flex items-center justify-center bg-white w-full h-screen sm:h-20 py-2 sm:border sm:border-solid sm:rounded-md sm:border-neutral-100 sm:drop-shadow-md">
              <SfLoaderCircular />
            </div>
          ) : (
            snippets.length > 0 && (
              <ul
                ref={dropdownListRef}
                className="py-2 bg-white h-screen sm:h-auto sm:border sm:border-solid sm:rounded-md sm:border-neutral-100 sm:drop-shadow-md"
              >
                {snippets.map(({ highlight, rest, product }) => (
                  <li key={product.id}>
                    <SfListItem
                      as="button"
                      type="button"
                      onClick={handleSelect(product.name)}
                      className="!py-4 sm:!py-2 flex justify-start"
                    >
                      <p className="text-left">
                        <span>{highlight}</span>
                        <span className="font-medium">{rest}</span>
                      </p>
                      <p className="text-left typography-text-xs text-neutral-500">{product.category}</p>
                    </SfListItem>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      )}
    </form>
  );
}

// #endregion source
SearchWithIcon.getLayout = ShowcasePageLayout;
