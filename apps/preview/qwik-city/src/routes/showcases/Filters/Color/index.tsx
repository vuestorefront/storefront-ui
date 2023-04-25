import { $, component$, useSignal } from '@builder.io/qwik';
import { SfAccordionItem, SfCounter, SfIconChevronLeft, SfListItem, SfThumbnail } from '@storefront-ui/qwik';

const colorValues = [
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
];

export default component$(() => {
  const colorListSignal = useSignal<string[]>([]);
  const openedSignal = useSignal(true);

  const handleColorSelection = $((val: string) => {
    colorListSignal.value.indexOf(val) > -1
      ? (colorListSignal.value = [...colorListSignal.value.filter((value) => value !== val)])
      : (colorListSignal.value = [...colorListSignal.value, val]);
  });

  return (
    <SfAccordionItem
      open={openedSignal.value}
      onToggle$={() => {
        openedSignal.value = !openedSignal.value;
      }}
    >
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Color</p>
        <SfIconChevronLeft class={`text-neutral-500 ${openedSignal.value ? 'rotate-90' : '-rotate-90'}`} />
      </div>
      <div q:slot="detail">
        {colorValues.map(({ label, value, counter }) => (
          <SfListItem
            key={value}
            as="label"
            size="sm"
            class="px-1.5 bg-transparent hover:bg-transparent"
            selected={colorListSignal.value.includes(value)}
          >
            <div q:slot="prefix">
              <>
                <input
                  value={value}
                  checked={colorListSignal.value.includes(value)}
                  class="appearance-none peer"
                  type="checkbox"
                  onChange$={(event) => {
                    handleColorSelection(event.target.value);
                  }}
                />
                <span class="inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline">
                  <SfThumbnail size="sm" class={value} />
                </span>
              </>
            </div>
            <p>
              <span class="mr-2 text-sm">{label}</span>
              <SfCounter size="sm">{counter}</SfCounter>
            </p>
          </SfListItem>
        ))}
      </div>
    </SfAccordionItem>
  );
});
