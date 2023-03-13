/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfSelect } from '@storefront-ui/react/components/VsfSelect';
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
    <div className="flex flex-col gap-y-6">
      <label>
        <span className="pb-1 text-sm font-medium text-neutral-900 font-body">Label</span>
        <VsfSelect placeholder="-- Select --" size="sm">
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </VsfSelect>
      </label>

      <label>
        <span className="pb-1 text-sm font-medium text-neutral-900 font-body">Label</span>
        <VsfSelect placeholder="-- Select --" size="base">
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </VsfSelect>
      </label>

      <label>
        <span className="pb-1 text-sm font-medium text-neutral-900 font-body">Label</span>
        <VsfSelect placeholder="-- Select --" size="lg">
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </VsfSelect>
      </label>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
