import { component$ } from '@builder.io/qwik';
import { SfSelect } from '@storefront-ui/qwik';

const options = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Price: Low to High', value: 'price low to high' },
  { label: 'Price: High to Low', value: 'price high to low' },
  { label: 'New Arrivals', value: 'new arrivals' },
  { label: 'Customer Rating', value: 'customer rating' },
  { label: 'Bestsellers', value: 'bestsellers' },
];

export default component$(() => {
  return (
    <>
      <h6 class="bg-neutral-100 mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest">
        Sort by
      </h6>
      <div class="px-4">
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
});
