import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfChip, SfThumbnail, SfIconCloseSm } from '@storefront-ui/react';
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
          <SfChip
            key={value}
            className="mr-2"
            inputProps={{ checked: true, onChange: () => handleRemoveChip(value) }}
            slotPrefix={<SfThumbnail className={`bg-${value}-500`} />}
            slotSuffix={
              <SfIconCloseSm className="text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20" />
            }
          >
            {label}
          </SfChip>
        </li>
      ))}
    </ul>
  );
}

// #endregion source

DeletableChips.getLayout = ShowcasePageLayout;
