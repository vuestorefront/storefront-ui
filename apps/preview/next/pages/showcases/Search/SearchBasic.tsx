import { ShowcasePageLayout } from '../../showcases';
// #region source
import { type ChangeEvent, type FormEvent, useState, useRef } from 'react';
import { useDebounce } from 'react-use';
import { offset } from '@floating-ui/react-dom';
import {
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
}

const mockProducts: Product[] = [
  { id: 'ip-14', name: 'iPhone 14' },
  { id: 'ip-14-pro', name: 'iPhone 14 Pro' },
  { id: 'ip-14-pro-max', name: 'iPhone 14 Pro Max' },
  { id: 'ip-14-plus', name: 'iPhone 14 Plus' },
  { id: 'ip-13', name: 'iPhone 13' },
  { id: 'ip-13-mini', name: 'iPhone 13 mini' },
  { id: 'ip-12', name: 'iPhone 12' },
  { id: 'ip-11', name: 'iPhone 11' },
  { id: 'mb-air', name: 'MacBook Air' },
  { id: 'mb-pro-13', name: 'MacBook Pro 13"' },
  { id: 'mb-pro-14', name: 'MacBook Pro 14"' },
  { id: 'mb-pro-16', name: 'MacBook Pro 16"' },
];

// Just for presentation purposes. Replace mock request with the actual API call.
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

export default function SearchBasic() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const [isLoadingSnippets, setIsLoadingSnippets] = useState(false);
  const [snippets, setSnippets] = useState<{ highlight: string; rest: string; product: Product }[]>([]);
  const { isOpen, close, open } = useDisclosure();
  const { refs, style } = useDropdown({ isOpen, onClose: close, placement: 'bottom-start', middleware: [offset(4)] });
  useTrapFocus(refs.floating, { arrowKeysOn: true, activeState: isOpen, initialFocus: false });

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
    <form onSubmit={handleSubmit} ref={refs.setReference} className="relative">
      <label>
        <SfInput
          ref={inputRef}
          value={searchValue}
          onChange={handleChange}
          onFocus={open}
          placeholder="Search 'MacBook' or 'iPhone'..."
          slotPrefix={<SfIconSearch />}
          slotSuffix={
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset search"
              className="flex rounded-md focus-visible:outline focus-visible:outline-offset"
            >
              <SfIconCancel />
            </button>
          }
        />
      </label>
      {isOpen && (
        <div ref={refs.setFloating} style={style} className="right-0 left-0">
          {isLoadingSnippets ? (
            <div className="w-full h-20 flex justify-center items-center border border-solid border-neutral-100 rounded-md drop-shadow-md bg-white py-2">
              <SfLoaderCircular />
            </div>
          ) : (
            snippets.length > 0 && (
              <ul className="border border-solid border-neutral-100 rounded-md drop-shadow-md bg-white py-2">
                {snippets.map(({ highlight, rest, product }) => (
                  <li key={product.id}>
                    <SfListItem
                      as="button"
                      type="button"
                      onClick={handleSelect(product.name)}
                      className="flex justify-start"
                    >
                      <p className="text-left">
                        <span>{highlight}</span>
                        <span className="font-medium">{rest}</span>
                      </p>
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
SearchBasic.getLayout = ShowcasePageLayout;
