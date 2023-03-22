import { VsfChip, VsfThumbnail } from '@storefront-ui/react';
import classNames from 'classnames';
import { ShowcasePageLayout } from '../../showcases';

const chipValues = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
];

export function Showcase() {
  return (
    <ul className="flex flex-wrap gap-4 sm:flex-row">
      {chipValues.map(({ label, value }) => (
        <li>
          <VsfChip
            key={value}
            className="mr-2"
            slotPrefix={
              <VsfThumbnail
                className={classNames({
                  'bg-red-500': value === 'red',
                  'bg-blue-500': value === 'blue',
                  'bg-gray-500': value === 'gray',
                })}
              />
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
