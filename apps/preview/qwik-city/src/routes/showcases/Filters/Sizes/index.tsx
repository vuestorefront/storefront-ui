import { $, component$, useSignal } from '@builder.io/qwik';
import { SfAccordionItem, SfChip, SfIconChevronLeft } from '@storefront-ui/qwik';

const chipSizes = [
  { id: 's1', label: '6', value: '6', isAvailable: true },
  { id: 's2', label: '6.5', value: '6.5', isAvailable: true },
  { id: 's3', label: '7', value: '7.5', isAvailable: true },
  { id: 's4', label: '8', value: '8', isAvailable: false },
  { id: 's5', label: '8.5', value: '8.5', isAvailable: false },
  { id: 's6', label: '9', value: '9', isAvailable: true },
  { id: 's7', label: '9.5', value: '9.5', isAvailable: true },
  { id: 's8', label: '10', value: '10', isAvailable: false },
  { id: 's9', label: '10.5', value: '10.5', isAvailable: true },
  { id: 's10', label: '11', value: '11', isAvailable: true },
  { id: 's11', label: '11.5', value: '11.5', isAvailable: true },
  { id: 's12', label: '12', value: '12', isAvailable: true },
];

export default component$(() => {
  const openedSignal = useSignal(true);
  const selectedSizesSignal = useSignal<string[]>([]);

  const handleSizeSelection = $((val: string) => {
    selectedSizesSignal.value.indexOf(val) > -1
      ? (selectedSizesSignal.value = [...selectedSizesSignal.value.filter((value) => value !== val)])
      : (selectedSizesSignal.value = [...selectedSizesSignal.value, val]);
  });

  return (
    <SfAccordionItem
      open={openedSignal.value}
      onToggle$={() => {
        openedSignal.value = !openedSignal.value;
      }}
    >
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Sizes</p>
        <SfIconChevronLeft class={`text-neutral-500 ${openedSignal.value ? 'rotate-90' : '-rotate-90'}`} />
      </div>
      <div q:slot="detail">
        <ul class="flex flex-wrap gap-4 px-1.5">
          {chipSizes.map(({ id, label, value, isAvailable }, key) => (
            <li key={key}>
              <SfChip
                key={id}
                size="sm"
                inputProps={{
                  value,
                  disabled: !isAvailable,
                  onChange$: $(() => {
                    handleSizeSelection(value);
                  }),
                }}
              >
                {label}
              </SfChip>
            </li>
          ))}
        </ul>
      </div>
    </SfAccordionItem>
  );
});
