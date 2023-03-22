import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfRadio, VsfListItem } from '@storefront-ui/react';
import { useState } from 'react';

const deliveryOptions = [
  {
    name: 'Standard',
    cost: 'Free',
    date: 'Thursday, September 15',
  },
  {
    name: 'Express',
    cost: '$5.00',
    date: 'Tomorrow, September 12',
  },
];

export default function DeliveryOptions() {
  const [checkedState, setCheckedState] = useState('');

  return (
    <div>
      {deliveryOptions.map(({ name, cost, date }) => (
        <VsfListItem
          as="label"
          key={name}
          slotPrefix={
            <VsfRadio
              name="delivery-options"
              value={name}
              checked={checkedState === name}
              onChange={(event) => {
                setCheckedState(event.target.value);
              }}
            />
          }
          slotSuffix={<span className="text-gray-900">{cost}</span>}
          className="!items-start max-w-sm border rounded-md border-neutral-200 first-of-type:mr-4 first-of-type:mb-4"
        >
          {name}
          <span className="text-xs text-gray-500 break-words">{date}</span>
        </VsfListItem>
      ))}
    </div>
  );
}

// #endregion source
DeliveryOptions.getLayout = ShowcasePageLayout;
