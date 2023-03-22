import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfChip, SfThumbnail } from '@storefront-ui/react';
import classNames from 'classnames';

const chipValues = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
];

export default function ChipList() {
  return (
    <ul className="flex flex-wrap gap-4 sm:flex-row">
      {chipValues.map(({ label, value }) => (
        <li>
          <SfChip
            key={value}
            className="mr-2"
            slotPrefix={
              <SfThumbnail
                className={classNames({
                  'bg-red-500': value === 'red',
                  'bg-blue-500': value === 'blue',
                  'bg-gray-500': value === 'gray',
                })}
              />
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
ChipList.getLayout = ShowcasePageLayout;
