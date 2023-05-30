import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfChip, SfAccordionItem, SfIconChevronLeft } from '@storefront-ui/react';
import classNames from 'classnames';
import { useState } from 'react';

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

export default function FilterSizes() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [opened, setOpened] = useState(true);
  const handleSizeSelection = (val: string) => {
    if (selectedSizes.indexOf(val) > -1) {
      setSelectedSizes([...selectedSizes.filter((value) => value !== val)]);
    } else {
      setSelectedSizes([...selectedSizes, val]);
    }
  };
  return (
    <SfAccordionItem
      open={opened}
      onToggle={() => setOpened(!opened)}
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Sizes</p>
          <SfIconChevronLeft className={classNames('text-neutral-500', `${opened ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
    >
      <ul className="grid grid-cols-5 gap-2">
        {chipSizes.map(({ id, label, value, isAvailable }) => (
          <li>
            <SfChip
              key={id}
              size="sm"
              className="w-16"
              inputProps={{ value, disabled: !isAvailable, onChange: () => handleSizeSelection(value) }}
            >
              {label}
            </SfChip>
          </li>
        ))}
      </ul>
    </SfAccordionItem>
  );
}

// #endregion source
FilterSizes.getLayout = ShowcasePageLayout;
