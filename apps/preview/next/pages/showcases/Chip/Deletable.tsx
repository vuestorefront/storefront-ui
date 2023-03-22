import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfChip, VsfThumbnail, VsfIconCloseSm } from '@storefront-ui/react';
import { useState } from 'react';

const chipValues = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
];

export default function DeletableChips() {
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
              <VsfIconCloseSm className="text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20" />
            }
          >
            {label}
          </VsfChip>
        </li>
      ))}
    </ul>
  );
}

// #endregion source

DeletableChips.getLayout = ShowcasePageLayout;
