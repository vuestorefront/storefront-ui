import { component$ } from "@builder.io/qwik";
import { SfSelect } from "@storefront-ui/qwik";

const options = [
  { label: 'red', value: 'red' },
  { label: 'blue', value: 'blue' },
  { label: 'yellow', value: 'yellow' },
  { label: 'green', value: 'green' },
  { label: 'gray', value: 'gray' },
  { label: 'black', value: 'black' },
  { label: 'brown', value: 'brown' },
];

export default component$(() => {
  return (
    <label>
      <span class="pb-1 text-sm font-medium text-neutral-900 font-body">Label</span>
      <SfSelect invalid placeholder="-- Select --">
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </SfSelect>
    </label>
  );
});
