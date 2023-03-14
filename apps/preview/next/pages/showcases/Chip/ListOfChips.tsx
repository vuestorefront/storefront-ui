import { VsfChip } from '@storefront-ui/react/components/VsfChip';
import { VsfThumbnail } from '@storefront-ui/react/components/VsfThumbnail';
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
          <VsfChip key={value} className="mr-2">
            <VsfThumbnail className={`bg-${value}-500`} />
            <span className="ml-2">{label}</span>
          </VsfChip>
        </li>
      ))}
    </ul>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
