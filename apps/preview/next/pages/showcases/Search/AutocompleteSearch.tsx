import { ShowcasePageLayout } from '../../showcases';
// #region source
import { type ChangeEvent, type FormEvent, useState, useEffect, useRef } from 'react';
import { useDebounce } from 'react-use';
import {
  SfInput,
  SfIconSearch,
  SfIconCancel,
  SfButton,
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
  {
    id: 'ip-14',
    name: 'iPhone 14',
  },
  {
    id: 'ip-14-p',
    name: 'iPhone 14 Pro',
  },
  {
    id: 'ip-14-pm',
    name: 'iPhone 14 Pro Max',
  },
  {
    id: 'ip-14-p',
    name: 'iPhone 14 Plus',
  },
  {
    id: 'ip-13',
    name: 'iPhone 13',
  },
  {
    id: 'ip-13-m',
    name: 'iPhone 13 mini',
  },
  {
    id: 'ip-12',
    name: 'iPhone 12',
  },
  {
    id: 'ip-11',
    name: 'iPhone 11',
  },
  {
    id: 'mb-a',
    name: 'MacBook Air',
  },
  {
    id: 'mb-p-13',
    name: 'MacBook Pro 13"',
  },
  {
    id: 'mb-p-14',
    name: 'MacBook Pro 14"',
  },
  {
    id: 'mb-p-16',
    name: 'MacBook Pro 16"',
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockSearchRequest = async (phrase: string) => {
  console.log('SEARCH WITH PHRASE:', phrase);
  // alert(`Searching phrase: ${phrase}`);
};

const mockAutocompleteRequest = async (phrase: string) => {
  // Just for presentation purposes. Replace it with the actual API call.
  await delay(1000);
  const results = mockProducts
    .filter((product) => product.name.toLowerCase().startsWith(phrase.toLowerCase()))
    .map((product) => {
      const highlight = product.name.substring(0, phrase.length);
      const rest = product.name.substring(phrase.length);
      return [highlight, rest, product] as [string, string, Product];
    });
  return results;
};

export default function AutocompleteSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [snippets, setSnippets] = useState<[string, string, Product][]>([]);
  const { isOpen, close, open } = useDisclosure();
  const { refs, style } = useDropdown({ onClose: close, placement: 'bottom-start' });
  const [isLoadingSnippets, setIsLoadingSnippets] = useState(false);
  useTrapFocus(refs.floating, { arrowKeysOn: true, activeState: isOpen });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    mockSearchRequest(searchValue);
    close();
  };

  const handleReset = () => {
    setSearchValue('');
    setDebouncedSearchValue('');
    close();
    setSnippets([]);
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
    setDebouncedSearchValue(phrase);
    mockSearchRequest(phrase);
    close();
  };

  useDebounce(
    () => {
      setDebouncedSearchValue(searchValue);
    },
    1000,
    [searchValue],
  );

  useEffect(() => {
    if (debouncedSearchValue) {
      const getSnippets = async () => {
        open();
        setIsLoadingSnippets(true);

        try {
          const data = await mockAutocompleteRequest(debouncedSearchValue);
          setSnippets(data);
        } catch (error) {
          console.error(error);
        }

        setIsLoadingSnippets(false);
      };

      getSnippets();
    }
  }, [debouncedSearchValue]);

  return (
    <>
      <form onSubmit={handleSubmit} ref={refs.setReference} className="relative">
        <label>
          <SfInput
            value={searchValue}
            onChange={handleChange}
            onFocus={open}
            placeholder="Search"
            slotPrefix={<SfIconSearch />}
            slotSuffix={
              <SfButton onClick={handleReset} square variant="tertiary" aria-label="Reset search">
                <SfIconCancel />
              </SfButton>
            }
          />
        </label>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={style}
            className="border border-solid border-neutral-100 rounded-md drop-shadow-md bg-white py-2 right-0 left-0"
          >
            {isLoadingSnippets ? (
              <div className="w-full h-20 flex justify-center items-center">
                <SfLoaderCircular />
              </div>
            ) : (
              snippets.length > 0 && (
                <ul>
                  {snippets.map(([highlight, rest, product]) => (
                    <li key={product.id}>
                      <SfListItem
                        as="button"
                        type="button"
                        onClick={handleSelect(product.name)}
                        className="flex justify-start"
                      >
                        <p className="text-left">
                          <span>{highlight}</span>
                          <span className="font-semibold">{rest}</span>
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
    </>
  );
}

// #endregion source
AutocompleteSearch.getLayout = ShowcasePageLayout;
