import { SfChip, SfIconCloseSm, SfThumbnail } from '@storefront-ui/qwik';
import { $, component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const chipValues = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Gray', value: 'gray' },
  ];
  const chipListSignal = useSignal(chipValues);
  const handleRemoveChip = $((val: string) => {
    chipListSignal.value = chipListSignal.value.filter((item) => item.value !== val);
  });

  return (
    <ul class="flex flex-wrap gap-4 sm:flex-row">
      {chipListSignal.value.map(({ label, value }) => (
        <li>
          <SfChip
            key={value}
            class="mr-2"
            inputProps={{ checked: true, onChange$: $(() => handleRemoveChip(value)) }}
            showSlotPrefix={true}
            showSlotSuffix={true}
          >
            <div q:slot="prefix">
              <SfThumbnail class={`bg-${value}-500`} />
            </div>
            {label}
            <div q:slot="suffix">
              <SfIconCloseSm class="text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20" />
            </div>
          </SfChip>
        </li>
      ))}
    </ul>
  );
});
