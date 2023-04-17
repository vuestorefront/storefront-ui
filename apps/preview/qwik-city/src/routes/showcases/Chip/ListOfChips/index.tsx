import { component$ } from '@builder.io/qwik';
import { SfChip, SfThumbnail } from '@storefront-ui/qwik';

export default component$(() => {
  const chipValues = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Gray', value: 'gray' },
  ];
  return (
    <ul class="flex flex-wrap gap-4 sm:flex-row">
      {chipValues.map(({ label, value }) => (
        <li>
          <SfChip key={value} class="mr-2" showSlotPrefix={true}>
            <div q:slot="prefix">
              <SfThumbnail
                class={`
                  ${value === 'red' ? 'bg-red-500' : ''} 
                  ${value === 'blue' ? 'bg-blue-500' : ''} 
                  ${value === 'gray' ? 'bg-gray-500' : ''}
                `}
              />
            </div>
            {label}
          </SfChip>
        </li>
      ))}
    </ul>
  );
});
