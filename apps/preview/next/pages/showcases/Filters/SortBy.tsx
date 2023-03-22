/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfSelect } from '@storefront-ui/react';

const options = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Price: Low to High', value: 'price low to high' },
  { label: 'Price: High to Low', value: 'price high to low' },
  { label: 'New Arrivals', value: 'new arrivals' },
  { label: 'Customer Rating', value: 'customer rating' },
  { label: 'Bestsellers', value: 'bestsellers' },
];

export default function SortByFilter() {
  return (
    <>
      <h6 className="bg-neutral-100 mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest">
        Sort by
      </h6>
      <div className="px-4">
        <SfSelect aria-label="Sort by">
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </SfSelect>
      </div>
    </>
  );
}

// #endregion source
SortByFilter.getLayout = ShowcasePageLayout;
