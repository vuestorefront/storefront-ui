import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfAccordionItem, VsfCounter, VsfListItem, VsfThumbnail, VsfIconChevronLeft } from '@storefront-ui/react';
import { useState } from 'react';
import classNames from 'classnames';

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

export default function FilterColor() {
  const [colorList, setColorList] = useState<string[]>([]);
  const [opened, setOpened] = useState(true);
  const handleColorSelection = (val: string) => {
    if (colorList.indexOf(val) > -1) {
      setColorList([...colorList.filter((value) => value !== val)]);
    } else {
      setColorList([...colorList, val]);
    }
  };

  const isColorSelected = (val: string) => colorList.includes(val);

  return (
    <VsfAccordionItem
      open={opened}
      onToggle={() => setOpened(!opened)}
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Color</p>
          <VsfIconChevronLeft className={classNames('text-neutral-500', `${opened ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
    >
      {colorValues.map(({ label, value, counter }) => (
        <VsfListItem
          key={value}
          as="label"
          size="sm"
          className="px-1.5 bg-transparent hover:bg-transparent"
          selected={isColorSelected(value)}
          slotPrefix={
            <>
              <input
                value={value}
                checked={isColorSelected(value)}
                className="peer appearance-none"
                type="checkbox"
                onChange={(event) => {
                  handleColorSelection(event.target.value);
                }}
              />
              <span className="cursor-pointer p-1 ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline">
                <VsfThumbnail size="sm" className={value} />
              </span>
            </>
          }
        >
          <p>
            <span className="text-sm mr-2">{label}</span>
            <VsfCounter>{counter}</VsfCounter>
          </p>
        </VsfListItem>
      ))}
    </VsfAccordionItem>
  );
}

// #endregion source
FilterColor.getLayout = ShowcasePageLayout;
