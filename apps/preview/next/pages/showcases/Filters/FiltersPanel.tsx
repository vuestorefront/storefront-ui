import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  SfAccordionItem,
  SfButton,
  SfCounter,
  SfChip,
  SfIconCancel,
  SfIconClose,
  SfIconChevronLeft,
  SfIconArrowBack,
  SfIconCheck,
  SfListItem,
  SfThumbnail,
  SfRadio,
  SfSelect,
  SfCheckbox,
} from '@storefront-ui/react';
import { useState } from 'react';
import classNames from 'classnames';

const sortOptions = [
  { id: 'sort1', label: 'Relevance', value: 'relevance' },
  { id: 'sort2', label: 'Price: Low to High', value: 'price low to high' },
  { id: 'sort3', label: 'Price: High to Low', value: 'price high to low' },
  { id: 'sort4', label: 'New Arrivals', value: 'new arrivals' },
  { id: 'sort5', label: 'Customer Rating', value: 'customer rating' },
  { id: 'sort6', label: 'Bestsellers', value: 'bestsellers' },
];

const categories = [
  {
    key: 'CLOTHING',
    value: { label: 'Clothing', counter: 30, link: '#' },
  },
  {
    key: 'SHOES',
    value: { label: 'Shoes', counter: 28, link: '#' },
  },
  {
    key: 'ACCESSORIES',
    value: { label: 'Accessories', counter: 56, link: '#' },
  },
  {
    key: 'WEARABLES',
    value: { label: 'Wearables', counter: 12, link: '#' },
  },
  {
    key: 'FOOD_DRINKS',
    value: { label: 'Food & Drinks', counter: 52, link: '#' },
  },
];

const filtersData = [
  {
    id: 'acc1',
    summary: 'Size',
    type: 'size',
    details: [
      { id: 's1', label: '6', value: '6', counter: 10 },
      { id: 's2', label: '6.5', value: '6.5', counter: 10 },
      { id: 's3', label: '7', value: '7.5', counter: 30 },
      { id: 's4', label: '8', value: '8', counter: 0 },
      { id: 's5', label: '8.5', value: '8.5', counter: 3 },
      { id: 's6', label: '9', value: '9', counter: 7 },
      { id: 's7', label: '9.5', value: '9.5', counter: 9 },
      { id: 's8', label: '10', value: '10', counter: 11 },
      { id: 's9', label: '10.5', value: '10.5', counter: 12 },
      { id: 's10', label: '11', value: '11', counter: 0 },
      { id: 's11', label: '11.5', value: '11.5', counter: 4 },
      { id: 's12', label: '12', value: '12', counter: 1 },
    ],
  },
  {
    id: 'acc2',
    summary: 'Categories',
    type: 'categories',
    details: [
      {
        key: 'CLOTHING',
        label: 'Clothing',
        counter: 30,
        link: '#',
      },
      {
        key: 'SHOES',
        label: 'Shoes',
        counter: 28,
        link: '#',
      },
      {
        key: 'ACCESSORIES',
        label: 'Accessories',
        counter: 56,
        link: '#',
      },
      {
        key: 'WEARABLES',
        label: 'Wearables',
        counter: 12,
        link: '#',
      },
      {
        key: 'FOOD_DRINKS',
        label: 'Food & Drinks',
        counter: 52,
        link: '#',
      },
    ],
  },
  {
    id: 'acc3',
    summary: 'Colors',
    type: 'color',
    details: [
      {
        id: 'c1',
        label: 'Primary',
        value: 'bg-primary-500',
        counter: 10,
      },
      {
        id: 'c2',
        label: 'Black and gray',
        value: 'bg-[linear-gradient(-45deg,#000_50%,#d1d5db_50%)]',
        counter: 5,
      },
      {
        id: 'c3',
        label: 'Violet',
        value: 'bg-violet-500',
        counter: 0,
      },
      {
        id: 'c4',
        label: 'Red',
        value: 'bg-red-500',
        counter: 2,
      },
      {
        id: 'c5',
        label: 'Yellow',
        value: 'bg-yellow-500',
        counter: 100,
      },
      {
        id: 'c6',
        label: 'Avocado',
        value: 'bg-gradient-to-tr from-yellow-300 to-primary-500',
        counter: 14,
      },
    ],
  },
  {
    id: 'acc4',
    summary: 'Brand',
    type: 'checkbox',
    details: [
      { id: 'b1', label: 'Conroy', value: 'conroy', counter: 10 },
      { id: 'b2', label: 'Goyette', value: 'goyette', counter: 100 },
      { id: 'b3', label: 'Ledner & Ward', value: 'lednerward', counter: 0 },
      { id: 'b4', label: 'Pacocha', value: 'pacocha', counter: 3 },
    ],
  },
  {
    id: 'acc5',
    summary: 'Price',
    type: 'radio',
    details: [
      { id: 'pr1', label: 'Under $24.99', value: 'under', counter: 123 },
      { id: 'pr2', label: '$25.00 - $49.99', value: '25-49', counter: 100 },
      { id: 'pr3', label: '$50.00 - $99.99', value: '50-99', counter: 12 },
      { id: 'pr4', label: '$100.00 - $199.99', value: '100-199', counter: 3 },
      { id: 'pr5', label: '$200.00 and above', value: 'above', counter: 18 },
    ],
  },
];

export default function FiltersPanel() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [opened, setOpened] = useState<string[]>(filtersData.map((item) => item.id));

  const isAccordionItemOpen = (id: string) => opened.includes(id);
  const isFilterSelected = (val: string) => selectedFilters.includes(val);

  const handleFilterSelection = (val: string) => {
    if (selectedFilters.indexOf(val) > -1) {
      setSelectedFilters([...selectedFilters.filter((value) => value !== val)]);
    } else {
      setSelectedFilters([...selectedFilters, val]);
    }
  };

  const handleRadioSelection = (val: string) => {
    const newSelectedFilters = selectedFilters.filter((selectedFilter) => !isFilterSelected(selectedFilter));
    newSelectedFilters.push(val);
    setSelectedFilters(newSelectedFilters);
  };

  const handleToggle = (id: string) => (open: boolean) => {
    if (open) {
      setOpened((current) => [...current, id]);
    } else {
      setOpened((current) => current.filter((item) => item !== id));
    }
  };

  return (
    <aside>
      <div className="flex items-center justify-between mb-4">
        <h4 className="px-2 font-bold typography-headline-4">List settings</h4>
        {selectedFilters.length ? (
          <SfButton
            type="reset"
            size="sm"
            variant="tertiary"
            className="hidden md:flex"
            onClick={() => setSelectedFilters([])}
            slotSuffix={<SfIconCancel size="sm" />}
          >
            Clear all
          </SfButton>
        ) : null}
        <button type="button" className="sm:hidden text-neutral-500" aria-label="Close filters panel">
          <SfIconClose />
        </button>
      </div>
      <h5 className="py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        Sort by
      </h5>
      <div className="px-2">
        <SfSelect aria-label="Sort by">
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </SfSelect>
      </div>
      <h5 className="py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        Filters
      </h5>
      {filtersData.map((section) => (
        <>
          <SfAccordionItem
            key={section.id}
            onToggle={handleToggle(section.id)}
            open={isAccordionItemOpen(section.id)}
            summary={
              <div className="flex justify-between p-2 mb-2">
                <p className="mb-2 font-medium typography-headline-5">{section.summary}</p>
                <SfIconChevronLeft
                  className={classNames(
                    'text-neutral-500',
                    `${isAccordionItemOpen(section.id) ? 'rotate-90' : '-rotate-90'}`,
                  )}
                />
              </div>
            }
          >
            {section.type === 'size' && (
              <ul className="flex flex-wrap gap-4 px-1.5">
                {section.details.map(({ id, label, value, counter }) => (
                  <li>
                    <SfChip
                      key={id}
                      size="sm"
                      inputProps={{
                        value,
                        disabled: !counter,
                        checked: isFilterSelected(value),
                        onChange: (event) => handleFilterSelection(event.target.value),
                      }}
                    >
                      {label}
                    </SfChip>
                  </li>
                ))}
              </ul>
            )}
            {section.type === 'categories' && (
              <ul className="mt-2 mb-6">
                <li>
                  <SfListItem size="sm" as="button" type="button">
                    <div className="flex items-center">
                      <SfIconArrowBack size="sm" className="text-neutral-500" />
                      <p className="ml-3">Back to {categories[0].value.label}</p>
                    </div>
                  </SfListItem>
                </li>
                {section.details.map((category) => (
                  <li key={category.key}>
                    <SfListItem
                      size="sm"
                      as="a"
                      href={category.link}
                      className={classNames('first-of-type:mt-2 rounded-md active:bg-primary-100', {
                        'bg-primary-100 hover:bg-primary-100': isFilterSelected(category.label),
                      })}
                      slotSuffix={
                        isFilterSelected(category.label) && <SfIconCheck size="xs" className="text-primary-700" />
                      }
                      onClick={() => handleFilterSelection(category.label)}
                    >
                      <span className="flex items-center">
                        <span className="text-left">{category.label}</span>
                        <SfCounter className="ml-2 typography-text-sm">{category.counter}</SfCounter>
                      </span>
                    </SfListItem>
                  </li>
                ))}
              </ul>
            )}
            {section.type === 'color' &&
              section.details.map(({ id, label, value, counter }) => (
                <SfListItem
                  key={id}
                  as="label"
                  size="sm"
                  className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
                    'font-medium': isFilterSelected(value),
                  })}
                  selected={isFilterSelected(value)}
                  slotPrefix={
                    <>
                      <input
                        value={value}
                        checked={isFilterSelected(value)}
                        className="appearance-none peer"
                        type="checkbox"
                        onChange={(event) => {
                          handleFilterSelection(event.target.value);
                        }}
                      />
                      <span className="inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline">
                        <SfThumbnail size="sm" className={value} />
                      </span>
                    </>
                  }
                >
                  <p>
                    <span className="mr-2 text-sm">{label}</span>
                    <SfCounter size="sm">{counter}</SfCounter>
                  </p>
                </SfListItem>
              ))}
            {section.type === 'checkbox' &&
              section.details.map(({ label, value, counter }) => (
                <SfListItem
                  key={value}
                  as="label"
                  size="sm"
                  disabled={counter === 0}
                  className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
                    'font-medium': isFilterSelected(value),
                  })}
                  slotPrefix={
                    <SfCheckbox
                      disabled={counter === 0}
                      value={value}
                      checked={isFilterSelected(value)}
                      onChange={(event) => {
                        handleFilterSelection(event.target.value);
                      }}
                    />
                  }
                >
                  <p>
                    <span className="mr-2 text-sm">{label}</span>
                    <SfCounter size="sm">{counter}</SfCounter>
                  </p>
                </SfListItem>
              ))}
            {section.type === 'radio' &&
              section.details.map(({ label, value, counter }) => (
                <SfListItem
                  key={value}
                  as="label"
                  size="sm"
                  disabled={counter === 0}
                  className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
                    'font-medium': isFilterSelected(value),
                  })}
                  slotPrefix={
                    <SfRadio
                      disabled={counter === 0}
                      value={value}
                      name="radio-price"
                      checked={isFilterSelected(value)}
                      onChange={(event) => {
                        handleRadioSelection(event.target.value);
                      }}
                    />
                  }
                >
                  <p>
                    <span className="mr-2 text-sm">{label}</span>
                    <SfCounter size="sm">{counter}</SfCounter>
                  </p>
                </SfListItem>
              ))}
          </SfAccordionItem>
          <hr className="my-4" />
        </>
      ))}
      <div className="flex justify-between">
        <SfButton variant="secondary" className="w-full mr-3" onClick={() => setSelectedFilters([])}>
          Clear all filters
        </SfButton>
        <SfButton className="w-full">Show products</SfButton>
      </div>
    </aside>
  );
}

// #endregion source
FiltersPanel.getLayout = ShowcasePageLayout;
