/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfSelect } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

const options = [
  { label: 'red', value: 'red' },
  { label: 'blue', value: 'blue' },
  { label: 'yellow', value: 'yellow' },
  { label: 'green', value: 'green' },
  { label: 'gray', value: 'gray' },
  { label: 'black', value: 'black' },
  { label: 'brown', value: 'brown' },
];

export function Showcase() {
  return (
    <label>
      <span className="pb-1 text-sm font-medium text-neutral-900 font-body">Label</span>
      <VsfSelect invalid placeholder="-- Select --">
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </VsfSelect>
    </label>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
