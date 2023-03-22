import { VsfChip, VsfThumbnail, VsfIconClose } from '@storefront-ui/react';
import { useState } from 'react';
import { ShowcasePageLayout } from '../../showcases';

const chipValues = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
];

export function Showcase() {
  const [chipList, setChipList] = useState(chipValues);
  const handleRemoveChip = (val: string) => {
    const newList = chipList.filter((item) => item.value !== val);

    setChipList(newList);
  };
  return (
    <ul className="flex flex-wrap gap-4 sm:flex-row">
      {chipList.map(({ label, value }) => (
        <li>
          <VsfChip
            key={value}
            className="mr-2"
            inputProps={{ checked: true, onChange: () => handleRemoveChip(value) }}
            slotPrefix={<VsfThumbnail className={`bg-${value}-500`} />}
            slotSuffix={
              <VsfIconClose className="text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20" />
            }
          >
            {label}
          </VsfChip>
        </li>
      ))}
    </ul>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
