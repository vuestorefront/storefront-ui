import { component$, useSignal } from '@builder.io/qwik';
import { SfRadio } from '@storefront-ui/qwik';

const radioOptions = [
  {
    value: 'value-1',
    name: 'radio-1',
  },
  {
    value: 'value-2',
    name: 'radio-2',
  },
];
export default component$(() => {
  const checkedStateSignal = useSignal('');
  return (
    <>
      {radioOptions.map(({ name, value }) => (
        <SfRadio
          name={name}
          value={value}
          class="block mb-4"
          checked={checkedStateSignal.value === value}
          onChange$={(event) => {
            checkedStateSignal.value = event.target.value;
          }}
        />
      ))}
    </>
  );
});
