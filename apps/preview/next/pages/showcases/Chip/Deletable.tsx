import { VsfChip } from '@storefront-ui/react/components/VsfChip';
import { VsfThumbnail } from '@storefront-ui/react/components/VsfThumbnail';
import { VsfIconClose } from '@storefront-ui/react/components/VsfIcons/index';
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
          <VsfChip key={value} className="mr-2" inputProps={{ checked: true, onChange: () => handleRemoveChip(value) }}>
            <VsfThumbnail className={`bg-${value}-500`} />
            <span className="ml-2">{label}</span>
            <VsfIconClose className="ml-1 text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20" />
          </VsfChip>
        </li>
      ))}
    </ul>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
